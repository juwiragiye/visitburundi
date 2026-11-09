import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactForm, Newsletter } from "@/components/forms";
import { DestinationExplorer, IntentSearch } from "@/components/discovery";
import { Planner } from "@/components/planner";
import { TripProvider, AddToTrip } from "@/components/trip-context";
import { ToastProvider, Tabs } from "@/components/ui/interactive";
const navigation = vi.hoisted(() => ({
  query: "",
  push: vi.fn(),
  replace: vi.fn(),
}));
vi.mock("next/navigation", () => ({
  useSearchParams: () => new URLSearchParams(navigation.query),
  useRouter: () => ({ push: navigation.push, replace: navigation.replace }),
}));
beforeEach(() => {
  navigation.query = "";
  navigation.push.mockClear();
  navigation.replace.mockClear();
  localStorage.clear();
  HTMLDialogElement.prototype.showModal = function () {
    this.open = true;
  };
  HTMLDialogElement.prototype.close = function () {
    this.open = false;
  };
});
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});
const renderPlanner = () =>
  render(
    <ToastProvider>
      <TripProvider>
        <Planner />
      </TripProvider>
    </ToastProvider>,
  );
describe("preview forms", () => {
  it("validates newsletter input and explicitly confirms nothing was submitted", async () => {
    const user = userEvent.setup();
    render(<Newsletter />);
    await user.click(screen.getByRole("button", { name: /keep me inspired/i }));
    expect(screen.getByRole("alert").textContent).toContain("valid email");
    await user.type(
      screen.getByLabelText("Email address"),
      "traveller@example.com",
    );
    await user.click(screen.getByRole("button", { name: /keep me inspired/i }));
    expect(screen.getByRole("status").textContent).toContain(
      "not sent or saved",
    );
    expect(localStorage.length).toBe(0);
  });
  it("associates contact errors, focuses the first field, then shows local-only success", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    await user.click(
      screen.getByRole("button", { name: /preview submission/i }),
    );
    expect(document.activeElement).toBe(screen.getByLabelText(/your name/i));
    expect(
      screen.getByLabelText(/your name/i).getAttribute("aria-invalid"),
    ).toBe("true");
    await user.type(screen.getByLabelText(/your name/i), "Preview Traveller");
    await user.type(
      screen.getByLabelText(/email address/i),
      "traveller@example.com",
    );
    await user.type(
      screen.getByLabelText(/your message/i),
      "I would like to share feedback about this preview.",
    );
    await user.click(screen.getByRole("checkbox"));
    await user.click(
      screen.getByRole("button", { name: /preview submission/i }),
    );
    expect(screen.getByRole("status").textContent).toContain(
      "not been sent or saved",
    );
  });
});
describe("discovery", () => {
  it("combines shared category and region filters", () => {
    navigation.query = "category=Culture&region=Central+highlands";
    render(<DestinationExplorer />);
    expect(screen.getByRole("status").textContent).toContain("2 destinations");
    expect(screen.getByRole("heading", { name: "Gitega" })).toBeTruthy();
    expect(
      screen.getByRole("heading", { name: "Royal drummers of Gishora" }),
    ).toBeTruthy();
  });
  it("offers a reset when nothing matches and writes shareable filter URLs", async () => {
    const user = userEvent.setup();
    navigation.query = "q=does-not-exist";
    render(<DestinationExplorer />);
    expect(screen.getByRole("status").textContent).toContain("0 destinations");
    await user.selectOptions(screen.getByLabelText("Category"), "Adventure");
    expect(navigation.replace.mock.calls.at(-1)?.[0]).toContain(
      "category=Adventure",
    );
    await user.click(screen.getByRole("button", { name: "Reset filters" }));
    expect(navigation.replace).toHaveBeenLastCalledWith("/destinations", {
      scroll: false,
    });
  });
  it("carries destination, date and interest from the intent form", async () => {
    const user = userEvent.setup();
    render(<IntentSearch />);
    await user.type(screen.getByLabelText(/where calls to you/i), "Gitega");
    fireEvent.change(screen.getByLabelText(/when would you go/i), {
      target: { value: "2027-06-10" },
    });
    await user.selectOptions(
      screen.getByLabelText(/find your rhythm/i),
      "culture",
    );
    await user.click(screen.getByRole("button", { name: "Explore" }));
    expect(navigation.push).toHaveBeenCalledWith(
      "/destinations?q=Gitega&date=2027-06-10&interest=culture",
    );
  });
});
describe("trip planning", () => {
  it("adds from a detail page and restores the saved trip on a new render", async () => {
    const user = userEvent.setup();
    const view = render(
      <ToastProvider>
        <TripProvider>
          <AddToTrip slug="gitega" />
        </TripProvider>
      </ToastProvider>,
    );
    await user.click(screen.getByRole("button", { name: "Add to trip" }));
    expect(
      JSON.parse(localStorage.getItem("visitburundi-trip-v1")!).stops[0].slug,
    ).toBe("gitega");
    view.unmount();
    renderPlanner();
    expect(
      screen.getByRole("button", { name: "Remove stop 1: Gitega" }),
    ).toBeTruthy();
  });
  it("reorders, assigns days, clamps days and removes stops", async () => {
    const user = userEvent.setup();
    renderPlanner();
    await user.click(
      screen.getByRole("button", { name: "Add Gitega to trip" }),
    );
    await user.click(
      screen.getByRole("button", {
        name: "Add Royal drummers of Gishora to trip",
      }),
    );
    await user.click(screen.getByRole("button", { name: "Move stop 2 up" }));
    await user.selectOptions(
      screen.getByRole("combobox", {
        name: "Day for stop 1: Royal drummers of Gishora",
      }),
      "3",
    );
    await user.selectOptions(screen.getByLabelText("Number of days"), "2");
    const saved = JSON.parse(localStorage.getItem("visitburundi-trip-v1")!);
    expect(saved.stops[0].slug).toBe("gishora");
    expect(saved.stops[0].day).toBe(2);
    await user.click(
      screen.getByRole("button", { name: "Remove stop 2: Gitega" }),
    );
    expect(
      JSON.parse(localStorage.getItem("visitburundi-trip-v1")!).stops.length,
    ).toBe(1);
  });
  it("opens a linked sample and asks before replacing an existing trip", async () => {
    const user = userEvent.setup();
    navigation.query = "sample=living-culture";
    renderPlanner();
    expect(
      screen
        .getByRole("tab", { name: "Sample journeys" })
        .getAttribute("aria-selected"),
    ).toBe("true");
    await user.click(screen.getByRole("button", { name: "Use this sample" }));
    expect(JSON.parse(localStorage.getItem("visitburundi-trip-v1")!).days).toBe(
      4,
    );
    await user.click(screen.getByRole("button", { name: "Use this sample" }));
    expect(
      screen.getByRole("dialog", { name: "Replace your current outline?" }),
    ).toBeTruthy();
    await user.click(screen.getByRole("button", { name: "Keep my trip" }));
    expect(
      screen.queryByRole("dialog", { name: "Replace your current outline?" }),
    ).toBeNull();
  });
  it("retains session edits and explains unavailable browser storage", async () => {
    const user = userEvent.setup();
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("blocked");
    });
    renderPlanner();
    await user.click(
      screen.getByRole("button", { name: "Add Gitega to trip" }),
    );
    expect(screen.getByRole("alert").textContent).toContain(
      "storage is unavailable",
    );
    expect(
      screen.getByRole("button", { name: "Remove stop 1: Gitega" }),
    ).toBeTruthy();
  });
  it("provides a manual copy fallback if clipboard access fails", async () => {
    const user = userEvent.setup();
    vi.spyOn(navigator.clipboard, "writeText").mockRejectedValue(
      new Error("blocked"),
    );
    renderPlanner();
    await user.click(
      screen.getByRole("button", { name: "Add Gitega to trip" }),
    );
    await user.click(screen.getByRole("button", { name: "Copy summary" }));
    const dialog = screen.getByRole("dialog", { name: "Copy your summary" });
    expect(
      (within(dialog).getByRole("textbox") as HTMLTextAreaElement).value,
    ).toContain("Day 1: Gitega");
  });
});
it("supports arrow, home and end keys in tabs", async () => {
  const user = userEvent.setup();
  render(
    <Tabs
      items={[
        { label: "First", content: "A" },
        { label: "Second", content: "B" },
      ]}
    />,
  );
  screen.getByRole("tab", { name: "First" }).focus();
  await user.keyboard("{ArrowRight}");
  expect(document.activeElement).toBe(
    screen.getByRole("tab", { name: "Second" }),
  );
  await user.keyboard("{Home}");
  expect(
    screen.getByRole("tab", { name: "First" }).getAttribute("aria-selected"),
  ).toBe("true");
  await user.keyboard("{End}");
  expect(screen.getByRole("tabpanel").textContent).toBe("B");
});
