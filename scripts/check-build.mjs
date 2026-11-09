import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, relative } from "node:path";
const root = ".next/server/app";
function files(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((item) =>
    item.isDirectory() ? files(join(dir, item.name)) : [join(dir, item.name)],
  );
}
const pages = files(root).filter(
  (path) => path.endsWith(".html") && !path.endsWith("_global-error.html"),
);
assert.equal(
  pages.length,
  21,
  "20 content pages and the custom 404 must be generated",
);
for (const path of pages) {
  const html = readFileSync(path, "utf8");
  assert.equal(
    (html.match(/<main(?:\s|>)/g) ?? []).length,
    1,
    `${path}: one main landmark`,
  );
  assert.equal((html.match(/<h1(?:\s|>)/g) ?? []).length, 1, `${path}: one h1`);
  assert.match(
    html,
    /name="robots" content="noindex, nofollow"/,
    `${path}: noindex`,
  );
  for (const image of html.match(/<img\s[^>]+>/g) ?? []) {
    assert.match(image, /\salt="[^"]*"/, `${path}: image alt`);
    const src = image.match(/\ssrc="(\/images\/[^"?]+)"/)?.[1];
    if (src) assert.ok(existsSync(`public${src}`), `${path}: ${src} exists`);
  }
  for (const link of html.matchAll(/href="(\/[^"#?]*)[^\"]*"/g)) {
    const href = link[1];
    if (
      href.startsWith("/_next/") ||
      href.startsWith("/icon") ||
      href.startsWith("/apple-icon")
    )
      continue;
    if (href === "/") continue;
    assert.ok(
      existsSync(join(root, `${href.slice(1)}.html`)) ||
        existsSync(`public${href}`),
      `${relative(root, path)}: valid internal link ${href}`,
    );
  }
}
assert.match(
  readFileSync(join(root, "robots.txt.body"), "utf8"),
  /Disallow: \//,
);
for (const [name, width, height] of [
  ["opengraph-image", 1200, 630],
  ["apple-icon", 180, 180],
]) {
  const png = readFileSync(join(root, `${name}.body`));
  assert.equal(png.readUInt32BE(16), width);
  assert.equal(png.readUInt32BE(20), height);
}
console.log(
  `Checked ${pages.length} generated pages, landmarks, noindex, internal links, image alts/paths, robots and PNG dimensions.`,
);
