import fs from "fs";

const brass = [0.765, 0.643, 0.416, 1];
const walnut = [0.18, 0.12, 0.08, 1];
const cream = [0.95, 0.91, 0.86, 1];

function transform(extra = {}) {
  return {
    ty: "tr",
    p: { a: 0, k: [0, 0] },
    a: { a: 0, k: [0, 0] },
    s: { a: 0, k: [100, 100] },
    r: { a: 0, k: 0 },
    o: { a: 0, k: 100 },
    sk: { a: 0, k: 0 },
    sa: { a: 0, k: 0 },
    nm: "Transform",
    ...extra,
  };
}

/** Hardwood planks laying in sequence */
function hardwoodPlanks() {
  const layers = [0, 1, 2, 3, 4].map((i) => {
    const y = 70 + i * 52;
    return {
      ddd: 0,
      ind: i + 1,
      ty: 4,
      nm: `Plank ${i}`,
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { t: i * 12, s: [0], e: [85], i: { x: [0.4], y: [1] }, o: { x: [0.6], y: [0] } },
            { t: 40 + i * 12, s: [85] },
            { t: 150, s: [85], e: [40], i: { x: [0.4], y: [1] }, o: { x: [0.6], y: [0] } },
            { t: 180, s: [40] },
          ],
        },
        r: { a: 0, k: 0 },
        p: {
          a: 1,
          k: [
            { t: i * 12, s: [-80, y, 0], e: [200, y, 0], i: { x: [0.33], y: [1] }, o: { x: [0.67], y: [0] } },
            { t: 45 + i * 12, s: [200, y, 0] },
          ],
        },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ao: 0,
      shapes: [
        {
          ty: "rc",
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [280, 36] },
          r: { a: 0, k: 2 },
          nm: "Plank",
        },
        {
          ty: "fl",
          c: { a: 0, k: i % 2 ? brass : [0.55, 0.4, 0.25, 1] },
          o: { a: 0, k: 100 },
          r: 1,
          nm: "Fill",
        },
        transform(),
      ],
      ip: 0,
      op: 180,
      st: 0,
      bm: 0,
    };
  });

  return {
    v: "5.7.4",
    fr: 60,
    ip: 0,
    op: 180,
    w: 400,
    h: 360,
    nm: "Hardwood Planks",
    ddd: 0,
    assets: [],
    layers,
  };
}

/** Tile / stone mosaic grid pulse */
function tileMosaic() {
  const layers = [];
  let ind = 1;
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const x = 90 + col * 110;
      const y = 90 + row * 110;
      const delay = (row + col) * 8;
      layers.push({
        ddd: 0,
        ind: ind++,
        ty: 4,
        nm: `Tile ${row}-${col}`,
        sr: 1,
        ks: {
          o: {
            a: 1,
            k: [
              { t: delay, s: [20], e: [80], i: { x: [0.4], y: [1] }, o: { x: [0.6], y: [0] } },
              { t: 60 + delay, s: [80], e: [35], i: { x: [0.4], y: [1] }, o: { x: [0.6], y: [0] } },
              { t: 120 + delay, s: [35], e: [75], i: { x: [0.4], y: [1] }, o: { x: [0.6], y: [0] } },
              { t: 180, s: [75] },
            ],
          },
          r: { a: 0, k: 0 },
          p: { a: 0, k: [x, y, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: {
            a: 1,
            k: [
              { t: delay, s: [70, 70, 100], e: [100, 100, 100], i: { x: [0.4], y: [1] }, o: { x: [0.6], y: [0] } },
              { t: 50 + delay, s: [100, 100, 100] },
            ],
          },
        },
        ao: 0,
        shapes: [
          {
            ty: "rc",
            p: { a: 0, k: [0, 0] },
            s: { a: 0, k: [78, 78] },
            r: { a: 0, k: 4 },
            nm: "Tile",
          },
          {
            ty: "st",
            c: { a: 0, k: brass },
            o: { a: 0, k: 100 },
            w: { a: 0, k: 2 },
            lc: 2,
            lj: 1,
            nm: "Stroke",
          },
          {
            ty: "fl",
            c: { a: 0, k: (row + col) % 2 ? cream : [0.88, 0.8, 0.7, 1] },
            o: { a: 0, k: 100 },
            r: 1,
            nm: "Fill",
          },
          transform(),
        ],
        ip: 0,
        op: 180,
        st: 0,
        bm: 0,
      });
    }
  }
  return {
    v: "5.7.4",
    fr: 60,
    ip: 0,
    op: 180,
    w: 400,
    h: 400,
    nm: "Tile Mosaic",
    ddd: 0,
    assets: [],
    layers,
  };
}

/** Material sample swatches fanning */
function sampleSwatches() {
  const colors = [
    [0.45, 0.3, 0.16, 1],
    [0.7, 0.55, 0.35, 1],
    brass,
    [0.55, 0.52, 0.48, 1],
    [0.82, 0.78, 0.72, 1],
  ];
  const layers = colors.map((c, i) => {
    const rot = -24 + i * 12;
    return {
      ddd: 0,
      ind: i + 1,
      ty: 4,
      nm: `Swatch ${i}`,
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { t: i * 6, s: [0], e: [90], i: { x: [0.4], y: [1] }, o: { x: [0.6], y: [0] } },
            { t: 40 + i * 6, s: [90] },
          ],
        },
        r: {
          a: 1,
          k: [
            { t: i * 6, s: [0], e: [rot], i: { x: [0.33], y: [1] }, o: { x: [0.67], y: [0] } },
            { t: 50 + i * 6, s: [rot], e: [rot + 4], i: { x: [0.4], y: [1] }, o: { x: [0.6], y: [0] } },
            { t: 110 + i * 6, s: [rot + 4], e: [rot], i: { x: [0.4], y: [1] }, o: { x: [0.6], y: [0] } },
            { t: 180, s: [rot] },
          ],
        },
        p: { a: 0, k: [200, 260, 0] },
        a: { a: 0, k: [0, 70, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ao: 0,
      shapes: [
        {
          ty: "rc",
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [70, 120] },
          r: { a: 0, k: 3 },
          nm: "Swatch",
        },
        { ty: "fl", c: { a: 0, k: c }, o: { a: 0, k: 100 }, r: 1, nm: "Fill" },
        {
          ty: "st",
          c: { a: 0, k: walnut },
          o: { a: 0, k: 40 },
          w: { a: 0, k: 1.5 },
          lc: 2,
          lj: 1,
          nm: "Stroke",
        },
        transform(),
      ],
      ip: 0,
      op: 180,
      st: 0,
      bm: 0,
    };
  });

  return {
    v: "5.7.4",
    fr: 60,
    ip: 0,
    op: 180,
    w: 400,
    h: 360,
    nm: "Sample Swatches",
    ddd: 0,
    assets: [],
    layers,
  };
}

/** Tree-ring / underfoot concentric rings */
function underfootRings() {
  const layers = [0, 1, 2, 3, 4].map((i) => ({
    ddd: 0,
    ind: i + 1,
    ty: 4,
    nm: `Ring ${i}`,
    sr: 1,
    ks: {
      o: {
        a: 1,
        k: [
          { t: i * 10, s: [0], e: [55], i: { x: [0.4], y: [1] }, o: { x: [0.6], y: [0] } },
          { t: 70 + i * 10, s: [55], e: [15], i: { x: [0.4], y: [1] }, o: { x: [0.6], y: [0] } },
          { t: 140 + i * 10, s: [15], e: [45], i: { x: [0.4], y: [1] }, o: { x: [0.6], y: [0] } },
          { t: 180, s: [45] },
        ],
      },
      r: { a: 0, k: 0 },
      p: { a: 0, k: [200, 200, 0] },
      a: { a: 0, k: [0, 0, 0] },
      s: {
        a: 1,
        k: [
          { t: i * 8, s: [40 + i * 15, 40 + i * 15, 100], e: [55 + i * 18, 55 + i * 18, 100], i: { x: [0.4], y: [1] }, o: { x: [0.6], y: [0] } },
          { t: 90 + i * 8, s: [55 + i * 18, 55 + i * 18, 100], e: [40 + i * 15, 40 + i * 15, 100], i: { x: [0.4], y: [1] }, o: { x: [0.6], y: [0] } },
          { t: 180, s: [40 + i * 15, 40 + i * 15, 100] },
        ],
      },
    },
    ao: 0,
    shapes: [
      { ty: "el", p: { a: 0, k: [0, 0] }, s: { a: 0, k: [120, 120] }, nm: "Ellipse" },
      {
        ty: "st",
        c: { a: 0, k: brass },
        o: { a: 0, k: 100 },
        w: { a: 0, k: 2 },
        lc: 2,
        lj: 1,
        nm: "Stroke",
      },
      transform(),
    ],
    ip: 0,
    op: 180,
    st: 0,
    bm: 0,
  }));

  return {
    v: "5.7.4",
    fr: 60,
    ip: 0,
    op: 180,
    w: 400,
    h: 400,
    nm: "Underfoot Rings",
    ddd: 0,
    assets: [],
    layers,
  };
}

/** Location pin pulse over floor-plan crosshair */
function locationPin() {
  return {
    v: "5.7.4",
    fr: 60,
    ip: 0,
    op: 120,
    w: 320,
    h: 320,
    nm: "Location Pin",
    ddd: 0,
    assets: [],
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "Pulse",
        sr: 1,
        ks: {
          o: {
            a: 1,
            k: [
              { t: 0, s: [50], e: [0], i: { x: [0.4], y: [1] }, o: { x: [0.6], y: [0] } },
              { t: 90, s: [0] },
              { t: 120, s: [0] },
            ],
          },
          r: { a: 0, k: 0 },
          p: { a: 0, k: [160, 210, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: {
            a: 1,
            k: [
              { t: 0, s: [40, 40, 100], e: [140, 140, 100], i: { x: [0.4], y: [1] }, o: { x: [0.6], y: [0] } },
              { t: 90, s: [140, 140, 100] },
            ],
          },
        },
        ao: 0,
        shapes: [
          { ty: "el", p: { a: 0, k: [0, 0] }, s: { a: 0, k: [60, 60] }, nm: "Ellipse" },
          { ty: "st", c: { a: 0, k: brass }, o: { a: 0, k: 100 }, w: { a: 0, k: 2 }, lc: 2, lj: 1, nm: "Stroke" },
          transform(),
        ],
        ip: 0,
        op: 120,
        st: 0,
        bm: 0,
      },
      {
        ddd: 0,
        ind: 2,
        ty: 4,
        nm: "Pin",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 0, k: 0 },
          p: {
            a: 1,
            k: [
              { t: 0, s: [160, 120, 0], e: [160, 130, 0], i: { x: [0.4], y: [1] }, o: { x: [0.6], y: [0] } },
              { t: 60, s: [160, 130, 0], e: [160, 120, 0], i: { x: [0.4], y: [1] }, o: { x: [0.6], y: [0] } },
              { t: 120, s: [160, 120, 0] },
            ],
          },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] },
        },
        ao: 0,
        shapes: [
          {
            ty: "sh",
            ks: {
              a: 0,
              k: {
                i: [[0, 0], [0, 0], [0, 0]],
                o: [[0, 0], [0, 0], [0, 0]],
                v: [[0, -48], [22, -10], [0, 28]],
                c: true,
              },
            },
            nm: "PinPath",
          },
          { ty: "fl", c: { a: 0, k: brass }, o: { a: 0, k: 100 }, r: 1, nm: "Fill" },
          transform(),
        ],
        ip: 0,
        op: 120,
        st: 0,
        bm: 0,
      },
      {
        ddd: 0,
        ind: 3,
        ty: 4,
        nm: "PinCore",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 0, k: 0 },
          p: {
            a: 1,
            k: [
              { t: 0, s: [160, 95, 0], e: [160, 105, 0], i: { x: [0.4], y: [1] }, o: { x: [0.6], y: [0] } },
              { t: 60, s: [160, 105, 0], e: [160, 95, 0], i: { x: [0.4], y: [1] }, o: { x: [0.6], y: [0] } },
              { t: 120, s: [160, 95, 0] },
            ],
          },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] },
        },
        ao: 0,
        shapes: [
          { ty: "el", p: { a: 0, k: [0, 0] }, s: { a: 0, k: [18, 18] }, nm: "Ellipse" },
          { ty: "fl", c: { a: 0, k: walnut }, o: { a: 0, k: 100 }, r: 1, nm: "Fill" },
          transform(),
        ],
        ip: 0,
        op: 120,
        st: 0,
        bm: 0,
      },
    ],
  };
}

fs.mkdirSync("public/lottie", { recursive: true });
const files = {
  "hardwood-planks.json": hardwoodPlanks(),
  "tile-mosaic.json": tileMosaic(),
  "sample-swatches.json": sampleSwatches(),
  "underfoot-rings.json": underfootRings(),
  "location-pin.json": locationPin(),
};
for (const [name, data] of Object.entries(files)) {
  fs.writeFileSync(`public/lottie/${name}`, JSON.stringify(data));
}
// Remove old abstract files
for (const old of ["pulse-ring.json", "waves.json", "network-nodes.json"]) {
  try {
    fs.unlinkSync(`public/lottie/${old}`);
  } catch {
    /* ignore */
  }
}
console.log("flooring lottie files written", Object.keys(files));
