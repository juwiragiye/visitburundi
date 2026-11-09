const copy = {
  title: "VisitBurundi, coming soon",
};

export default function Home() {
  return (
    <main className="flex min-h-svh items-center justify-center px-6 py-16">
      <h1 className="max-w-4xl text-center text-4xl font-semibold tracking-tight text-forest sm:text-6xl">
        {copy.title}
      </h1>
    </main>
  );
}
