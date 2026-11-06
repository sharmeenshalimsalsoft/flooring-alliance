import re
import urllib.request
from pathlib import Path

urls = [
    "https://commercialusa.com",
    "https://commercialusa.com/suppliers/",
    "https://commercialusa.com/membership/",
    "https://americanhomesurfaces.com",
    "https://americanhomesurfaces.com/about/",
    "https://americanhomesurfaces.com/membership/",
]

pat = re.compile(
    r"(?:https?:)?//(?:www\.)?(?:commercialusa|americanhomesurfaces)\.com/wp-content/uploads/[^\s\"'<>\\]+",
    re.I,
)

found = set()
for url in urls:
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        html = urllib.request.urlopen(req, timeout=30).read().decode("utf-8", "ignore")
        for m in pat.findall(html):
            full = m if m.startswith("http") else "https:" + m
            # strip size suffixes for originals where useful
            found.add(full.split("?")[0])
        print(f"OK {url}")
    except Exception as e:
        print(f"FAIL {url}: {e}")

out = Path("scripts/client_images.txt")
out.write_text("\n".join(sorted(found)), encoding="utf-8")
print(f"\n{len(found)} unique image URLs -> {out}")
for u in sorted(found):
    print(u)
