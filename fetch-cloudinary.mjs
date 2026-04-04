// fetch-cloudinary.mjs — run: node fetch-cloudinary.mjs

const CLOUD_NAME = "djx10ffrj";
const API_KEY    = "118595952139827";
const API_SECRET = "mSpySSpKaccDFRepjql2YMaoO_g";
const BASE       = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;
const AUTH       = Buffer.from(`${API_KEY}:${API_SECRET}`).toString("base64");

const FOLDERS = [
  "3CupstonewithbeadsBellDuku","40CupStoneMebaDuku",
  "AirConditionBrissiWithTheStone","AirconditioneBrissiEmbroidery",
  "AirConditioneWithTheBell","BeadBrissi","BrissiBeadsEmbroidery",
  "BrissiEmbroideryStoneandFlag","BrissiEmbroideryWithTheStone",
  "DeseboCrossLine","DeseboDuku","DeseboDukuWithStone",
  "DeseboShineSequence","MebaDuku","obamaKente","ObamaKenteWithStone",
];

async function api(path) {
  const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}${path}`, {
    headers: { Authorization: `Basic ${AUTH}` },
  });
  return res.json();
}

async function fetchFolder(folder) {
  // Try with trailing slash first, then without
  for (const prefix of [`${folder}/`, folder]) {
    const data = await api(`/resources/image?type=upload&prefix=${encodeURIComponent(prefix)}&max_results=50`);
    if (data.resources?.length > 0) {
      const urls = data.resources.map(r => `${BASE}/${r.public_id}.${r.format}`);
      console.log(`  ✓ ${folder}: ${urls.length} images`);
      return urls;
    }
  }
  console.log(`  ✗ ${folder}: 0 images`);
  return [];
}

async function main() {
  console.log("Fetching from Cloudinary...\n");

  // First check what public_ids look like
  const sample = await api("/resources/image?max_results=5&type=upload");
  if (sample.error) {
    console.error("API error:", sample.error.message);
    return;
  }

  if (sample.resources?.length) {
    console.log("Sample public_ids (first 5):");
    sample.resources.forEach(r => console.log(`  ${r.public_id}.${r.format}`));
    console.log();
  }

  const allImages = {};
  for (const folder of FOLDERS) {
    allImages[folder] = await fetchFolder(folder);
  }

  const total = Object.values(allImages).reduce((s, a) => s + a.length, 0);
  console.log(`\nTotal: ${total} images across ${FOLDERS.length} folders`);

  if (total === 0) {
    console.log("\nNo images found. Check that folder names match exactly.");
    console.log("Look at the sample public_ids above — the folder name is the part before the /");
    return;
  }

  // Write products.ts
  const fs = await import("fs");
  const content = buildProductsTs(allImages);
  fs.writeFileSync("products.ts", content);
  console.log("\n✅ products.ts written!");
  console.log("Run: cp products.ts app/components/products.ts");
}

function q(folder, allImages) {
  return JSON.stringify(allImages[folder] ?? []);
}

function buildProductsTs(imgs) {
  return `export type Product = {
  id: string; name: string; category: string; cats: string[];
  price: string; unit: string; meta: string; swatch: string;
  badge?: { label: string; type: "hot" | "new" | "export" };
  folder: string; images?: string[];
};

export const PRODUCTS: Product[] = [
  { id:"obama-kente", name:"Obama Kente", category:"Kente", cats:["kente"], price:"$44", unit:"roll", meta:"Cotton Poly · 12 yards · MOQ 1 roll", swatch:"sw-kente", badge:{label:"Best Seller",type:"hot"}, folder:"obamaKente", images:${q("obamaKente",imgs)} },
  { id:"obama-kente-stone", name:"Obama Kente with Stone", category:"Kente", cats:["kente"], price:"$45", unit:"roll", meta:"Cotton Poly · 12 yards · Stone embellished", swatch:"sw-kente", badge:{label:"Export",type:"export"}, folder:"ObamaKenteWithStone", images:${q("ObamaKenteWithStone",imgs)} },
  { id:"bead-brissi", name:"Bead Brissi", category:"Embroidery", cats:["embroidery"], price:"$24", unit:"roll", meta:"Cotton Poly · 12 yards", swatch:"sw-embroidery", badge:{label:"Popular",type:"hot"}, folder:"BeadBrissi", images:${q("BeadBrissi",imgs)} },
  { id:"brissi-beads-embroidery", name:"Brissi Beads Embroidery", category:"Embroidery", cats:["embroidery"], price:"$26", unit:"roll", meta:"Cotton Poly · 12 yards", swatch:"sw-embroidery", folder:"BrissiBeadsEmbroidery", images:${q("BrissiBeadsEmbroidery",imgs)} },
  { id:"brissi-stone-flag", name:"Brissi Embroidery Stone & Flag", category:"Embroidery", cats:["embroidery"], price:"$28", unit:"roll", meta:"Cotton Poly · 12 yards · Flag motif", swatch:"sw-embroidery", badge:{label:"New",type:"new"}, folder:"BrissiEmbroideryStoneandFlag", images:${q("BrissiEmbroideryStoneandFlag",imgs)} },
  { id:"brissi-with-stone", name:"Brissi Embroidery with Stone", category:"Embroidery", cats:["embroidery"], price:"$26", unit:"roll", meta:"Cotton Poly · 12 yards", swatch:"sw-embroidery", folder:"BrissiEmbroideryWithTheStone", images:${q("BrissiEmbroideryWithTheStone",imgs)} },
  { id:"aircondition-brissi-stone", name:"Air Condition Brissi with Stone", category:"Embroidery", cats:["embroidery"], price:"$27", unit:"roll", meta:"Cotton Poly · 12 yards", swatch:"sw-embroidery", folder:"AirConditionBrissiWithTheStone", images:${q("AirConditionBrissiWithTheStone",imgs)} },
  { id:"aircondition-brissi-embroidery", name:"Air Condition Brissi Embroidery", category:"Embroidery", cats:["embroidery"], price:"$25", unit:"roll", meta:"Cotton Poly · 12 yards", swatch:"sw-brissi", folder:"AirconditioneBrissiEmbroidery", images:${q("AirconditioneBrissiEmbroidery",imgs)} },
  { id:"desebo-duku", name:"Desebo Duku", category:"Scarves", cats:["scarf"], price:"$4.50", unit:"piece", meta:"Polyester · 1.2 yards", swatch:"sw-scarf", folder:"DeseboDuku", images:${q("DeseboDuku",imgs)} },
  { id:"desebo-duku-stone", name:"Desebo Duku with Stone", category:"Scarves", cats:["scarf"], price:"$5.00", unit:"piece", meta:"Polyester · 1.2 yards · Stone embellished", swatch:"sw-scarf", folder:"DeseboDukuWithStone", images:${q("DeseboDukuWithStone",imgs)} },
  { id:"desebo-crossline", name:"Desebo Cross Line", category:"Scarves", cats:["scarf"], price:"$4.50", unit:"piece", meta:"Polyester · 1.2 yards", swatch:"sw-scarf", folder:"DeseboCrossLine", images:${q("DeseboCrossLine",imgs)} },
  { id:"desebo-shine", name:"Desebo Shine Sequence", category:"Scarves", cats:["scarf"], price:"$5.50", unit:"piece", meta:"Polyester · 1.2 yards · Sequin finish", swatch:"sw-scarf", badge:{label:"New",type:"new"}, folder:"DeseboShineSequence", images:${q("DeseboShineSequence",imgs)} },
  { id:"meba-duku", name:"Meba Duku", category:"Scarves", cats:["scarf"], price:"$4.00", unit:"piece", meta:"Polyester · 1.2 yards", swatch:"sw-scarf", folder:"MebaDuku", images:${q("MebaDuku",imgs)} },
  { id:"3cup-stone-beads", name:"3 Cupstone with Beads Bell Duku", category:"Scarves", cats:["scarf"], price:"$5.50", unit:"piece", meta:"Polyester · 1.2 yards · Beads & Bell", swatch:"sw-scarf", folder:"3CupstonewithbeadsBellDuku", images:${q("3CupstonewithbeadsBellDuku",imgs)} },
  { id:"40cup-meba", name:"40 Cupstone Meba Duku", category:"Scarves", cats:["scarf"], price:"$5.00", unit:"piece", meta:"Polyester · 1.2 yards", swatch:"sw-scarf", folder:"40CupStoneMebaDuku", images:${q("40CupStoneMebaDuku",imgs)} },
  { id:"aircondition-bell", name:"Air Condition Duku with Bell", category:"Scarves", cats:["scarf"], price:"$4.50", unit:"piece", meta:"Polyester · 1.2 yards", swatch:"sw-president", folder:"AirConditioneWithTheBell", images:${q("AirConditioneWithTheBell",imgs)} },
];

export const CATEGORIES = [
  { id:"all", label:"All" },
  { id:"kente", label:"Kente" },
  { id:"embroidery", label:"Embroidery / Brissi" },
  { id:"scarf", label:"Scarves (Duku)" },
];
`;
}

main().catch(console.error);
