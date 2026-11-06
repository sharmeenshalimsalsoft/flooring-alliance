import fs from "fs";
import path from "path";
import https from "https";
import http from "http";

const assetsDir =
  "C:/Users/sharmeen.shalim/.cursor/projects/c-Users-sharmeen-shalim-Desktop-Cursor-flooring-alliance/assets";
const outDir = path.resolve("public/images/site");
fs.mkdirSync(outDir, { recursive: true });

const generated = [
  "residential-showroom.jpg",
  "commercial-lobby.jpg",
  "supplier-materials.jpg",
  "about-alliance.jpg",
  "hospitality-floor.jpg",
  "retail-interior.jpg",
  "office-flooring.jpg",
  "hardwood-detail.jpg",
  "stone-tile.jpg",
  "training-workshop.jpg",
  "membership-cta.jpg",
  "summit-event.jpg",
  "podcast-studio.jpg",
  "news-flooring-1.jpg",
  "news-flooring-2.jpg",
  "news-flooring-3.jpg",
  "contact-showroom.jpg",
  "portal-login.jpg",
];

for (const name of generated) {
  const src = path.join(assetsDir, name);
  const dest = path.join(outDir, name);
  if (!fs.existsSync(src)) {
    console.log("MISSING generated:", name);
    continue;
  }
  fs.copyFileSync(src, dest);
  console.log("copied", name);
}

function cleanUrl(u) {
  return u.replace(/\);.*$/, "").split("?")[0];
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith("https") ? https : http;
    const file = fs.createWriteStream(dest);
    lib
      .get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
        if ([301, 302, 307, 308].includes(res.statusCode) && res.headers.location) {
          file.close();
          try {
            fs.unlinkSync(dest);
          } catch {}
          const next = res.headers.location.startsWith("http")
            ? res.headers.location
            : new URL(res.headers.location, url).href;
          return resolve(download(cleanUrl(next), dest));
        }
        if (res.statusCode !== 200) {
          file.close();
          try {
            fs.unlinkSync(dest);
          } catch {}
          return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        }
        res.pipe(file);
        file.on("finish", () => file.close(() => resolve(dest)));
      })
      .on("error", (err) => {
        file.close();
        try {
          fs.unlinkSync(dest);
        } catch {}
        reject(err);
      });
  });
}

const clientDownloads = [
  // Commercial USA
  {
    url: "https://commercialusa.com/wp-content/uploads/2019/08/iStock-1140531083.jpg",
    name: "client-commercial-hero.jpg",
  },
  {
    url: "https://commercialusa.com/wp-content/uploads/2019/02/bg4.jpg",
    name: "client-commercial-bg.jpg",
  },
  {
    url: "https://commercialusa.com/wp-content/uploads/2022/09/Hero-Elevate-A.jpg",
    name: "client-elevate-hero.jpg",
  },
  {
    url: "https://commercialusa.com/wp-content/uploads/2019/07/Pandora-HQ-stairs-cropped.png",
    name: "client-stairs.png",
  },
  {
    url: "https://commercialusa.com/wp-content/uploads/2022/08/Masthead-Partners.jpg",
    name: "client-partners.jpg",
  },
  // AHSG photography
  {
    url: "https://www.americanhomesurfaces.com/wp-content/uploads/2021/11/Browsing-Tile.jpg",
    name: "client-browsing-tile.jpg",
  },
  {
    url: "https://www.americanhomesurfaces.com/wp-content/uploads/2021/11/Wood-Floor-Samples.jpg",
    name: "client-wood-samples.jpg",
  },
  {
    url: "https://www.americanhomesurfaces.com/wp-content/uploads/2021/12/Updated-Kitchen.jpg",
    name: "client-kitchen.jpg",
  },
  {
    url: "https://www.americanhomesurfaces.com/wp-content/uploads/2021/12/Commercial-Flooring.jpg",
    name: "client-commercial-flooring.jpg",
  },
  {
    url: "https://www.americanhomesurfaces.com/wp-content/uploads/2021/12/Flooring-Samples.jpg",
    name: "client-flooring-samples.jpg",
  },
  {
    url: "https://www.americanhomesurfaces.com/wp-content/uploads/2021/12/Slider-BrowsingWoodFlooringSamples.jpg",
    name: "client-wood-slider.jpg",
  },
  {
    url: "https://www.americanhomesurfaces.com/wp-content/uploads/2021/12/Slider-Carpet.jpg",
    name: "client-carpet-slider.jpg",
  },
  {
    url: "https://www.americanhomesurfaces.com/wp-content/uploads/2022/01/Home-Center-Retail.jpg",
    name: "client-retail.jpg",
  },
  {
    url: "https://www.americanhomesurfaces.com/wp-content/uploads/2022/01/Main-Street-Commercial.jpg",
    name: "client-main-street.jpg",
  },
  {
    url: "https://www.americanhomesurfaces.com/wp-content/uploads/2022/01/Multi-Family.jpg",
    name: "client-multifamily.jpg",
  },
  {
    url: "https://www.americanhomesurfaces.com/wp-content/uploads/2022/01/New-Home.jpg",
    name: "client-new-home.jpg",
  },
  {
    url: "https://www.americanhomesurfaces.com/wp-content/uploads/2022/01/Remodel.jpg",
    name: "client-remodel.jpg",
  },
  {
    url: "https://www.americanhomesurfaces.com/wp-content/uploads/2022/01/kitchen-and-bath.jpg",
    name: "client-kitchen-bath.jpg",
  },
  {
    url: "https://www.americanhomesurfaces.com/wp-content/uploads/2022/02/Design-Center2.jpg",
    name: "client-design-center.jpg",
  },
  {
    url: "https://www.americanhomesurfaces.com/wp-content/uploads/2022/02/Slider-BrowsingTile2.jpg",
    name: "client-tile-slider.jpg",
  },
  {
    url: "https://www.americanhomesurfaces.com/wp-content/uploads/2022/01/tenant-improvement.jpg",
    name: "client-tenant.jpg",
  },
  {
    url: "https://www.americanhomesurfaces.com/wp-content/uploads/2026/11/underfoot-podcast-feature.webp",
    name: "client-podcast.webp",
  },
  {
    url: "https://www.americanhomesurfaces.com/wp-content/uploads/2026/10/ahsgsummit-fcw.webp",
    name: "client-summit.webp",
  },
  {
    url: "https://www.americanhomesurfaces.com/wp-content/uploads/2021/12/Panoramic-Porcelain.jpg",
    name: "client-porcelain.jpg",
  },
];

for (const item of clientDownloads) {
  const dest = path.join(outDir, item.name);
  try {
    await download(cleanUrl(item.url), dest);
    const size = fs.statSync(dest).size;
    console.log("downloaded", item.name, size, "bytes");
    if (size < 2000) {
      console.log("  (tiny file, removing)");
      fs.unlinkSync(dest);
    }
  } catch (e) {
    console.log("FAIL", item.name, e.message);
  }
}

console.log("\nDone. Site images:");
fs.readdirSync(outDir).forEach((f) => console.log(" -", f));
