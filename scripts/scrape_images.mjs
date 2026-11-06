import https from "https";
import http from "http";
import fs from "fs";

const urls = [
  "https://commercialusa.com",
  "https://commercialusa.com/suppliers/",
  "https://commercialusa.com/membership/",
  "https://americanhomesurfaces.com",
  "https://americanhomesurfaces.com/about/",
  "https://americanhomesurfaces.com/membership/",
  "https://americanhomesurfaces.com/whats-underfoot/",
];

const found = new Set();

function get(url) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith("https") ? https : http;
    lib
      .get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (r) => {
        let d = "";
        r.on("data", (c) => (d += c));
        r.on("end", () =>
          resolve({ status: r.statusCode, headers: r.headers, body: d }),
        );
      })
      .on("error", reject);
  });
}

for (const u of urls) {
  try {
    let r = await get(u);
    if ([301, 302, 307, 308].includes(r.status) && r.headers.location) {
      const next = r.headers.location.startsWith("http")
        ? r.headers.location
        : new URL(r.headers.location, u).href;
      r = await get(next);
    }
    const re =
      /(?:https?:)?\/\/(?:www\.)?(?:commercialusa|americanhomesurfaces)\.com\/wp-content\/uploads\/[^\s"'<>\\]+/gi;
    let m;
    while ((m = re.exec(r.body))) {
      const full = m[0].startsWith("http") ? m[0] : "https:" + m[0];
      found.add(full.split("?")[0]);
    }
    console.log("OK", u, "status", r.status);
  } catch (e) {
    console.log("FAIL", u, e.message);
  }
}

const list = [...found].sort();
fs.writeFileSync("scripts/client_images.txt", list.join("\n"));
console.log(`\n${list.length} urls`);
list.forEach((x) => console.log(x));
