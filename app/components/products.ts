export type Product = {
  id: string;
  name: string;
  category: string;
  cats: string[];
  price: string;
  unit: string;
  meta: string;
  swatch: string;
  badge?: { label: string; type: "hot" | "new" | "export" };
  folder: string;
  images?: string[];
};

export const PRODUCTS: Product[] = [
  {
    id: "obama-kente",
    name: "Obama Kente",
    category: "Kente",
    cats: ["kente"],
    price: "$44",
    unit: "12 yards",
    meta: "Cotton Poly · 12 yards · MOQ 1 roll",
    swatch: "sw-kente",
    badge: { label: "Best Seller", type: "hot" },
    folder: "obamaKente",
    images: [
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775283730/21_xxgx2i.jpg",
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775283730/19_h4jvvg.jpg",
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775283729/18_qqrlro.jpg",
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775283728/17_kzabpm.jpg",
    ],
  },
  {
    id: "obama-kente-stone",
    name: "Obama Kente with Stone",
    category: "Kente",
    cats: ["kente"],
    price: "$65",
    unit: "12 yards",
    meta: "Cotton Poly · 12 yards · Stone embellished",
    swatch: "sw-kente",
    badge: { label: "Export", type: "export" },
    folder: "ObamaKenteWithStone",
    images: [
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775283605/IMG_2408_iyzlmv.jpg",
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775283604/IMG_2407_karjdm.jpg",
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775283604/IMG_2406_stwl5w.jpg",
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775283603/IMG_2404_le0fze.jpg"

    ],
  },
  {
    id: "bead-brissi",
    name: "Bead Brissi",
    category: "Embroidery",
    cats: ["embroidery"],
    price: "$45",
    unit: "12 yards",
    meta: "Cotton Poly · 12 yards",
    swatch: "sw-embroidery",
    badge: { label: "Popular", type: "hot" },
    folder: "BeadBrissi",
    images: [
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775283481/IMG_2307_qxs3ru.jpg",
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775283481/IMG_2306_urfngu.jpg",
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775283481/IMG_2302_sw2tge.jpg",
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775283480/IMG_2296_qd8kqg.jpg"
    ],
  },
  {
    id: "brissi-beads-embroidery",
    name: "Brissi Beads Embroidery",
    category: "Embroidery",
    cats: ["embroidery"],
    price: "55",
    unit: "12 yards",
    meta: "Cotton Poly · 12 yards",
    swatch: "sw-embroidery",
    folder: "BrissiBeadsEmbroidery",
    images: [
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775284235/IMG_2459_rnluro.jpg",
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775284233/IMG_2458_n1oiqh.jpg",
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775284212/IMG_2457_aosjuy.jpg"
    ],
  },
  {
    id: "brissi-stone-flag",
    name: "Brissi Embroidery Stone & Flag",
    category: "Embroidery",
    cats: ["embroidery"],
    price: "$65",
    unit: "12 yards",
    meta: "Cotton Poly · 12 yards · Flag motif",
    swatch: "sw-embroidery",
    badge: { label: "New", type: "new" },
    folder: "BrissiEmbroideryStoneandFlag",
    images: [
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775284185/IMG_2456_v3jk4h.jpg",
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775284182/IMG_2455_kfdbck.jpg",
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775284174/IMG_2454_gwi3be.jpg"  
    ],
  },
  {
    id: "brissi-with-stone",
    name: "Brissi Embroidery with Stone",
    category: "Embroidery",
    cats: ["embroidery"],
    price: "$45",
    unit: "12 yards",
    meta: "Cotton Poly · 12 yards",
    swatch: "sw-embroidery",
    folder: "BrissiEmbroideryWithTheStone",
    images: [
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775284161/IMG_1642_innxv1.jpg",
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775284152/IMG_1636_eo7biq.jpg",
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775284143/IMG_1630_q0ma9j.jpg"
    ],
  },
  {
    id: "aircondition-brissi-stone",
    name: "Air Condition Brissi with Stone",
    category: "Embroidery",
    cats: ["embroidery"],
    price: "$95",
    unit: "12 yards",
    meta: "Cotton Poly · 12 yards",
    swatch: "sw-embroidery",
    folder: "AirConditionBrissiWithTheStone",
    images: [
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775284793/IMG_2453_mrnmak.jpg",
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775284790/IMG_2451_tby9mh.jpg"
    ],
  },
  {
    id: "aircondition-brissi-embroidery",
    name: "Air Condition Brissi Embroidery",
    category: "Embroidery",
    cats: ["embroidery"],
    price: "$80",
    unit: "12 yards",
    meta: "Cotton Poly · 12 yards",
    swatch: "sw-brissi",
    folder: "AirconditioneBrissiEmbroidery",
    images: [
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775284371/IMG_2280_v8kg89.jpg",
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775284364/IMG_2279_mvjyuo.jpg",
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775284355/IMG_2275_kcmp4k.jpg",
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775284342/IMG_2219_rn9sb2.jpg"],
  },
  {
    id: "desebo-duku",
    name: "Desebo Duku",
    category: "Scarves",
    cats: ["scarf"],
    price: "$38",
    unit: "12 piece",
    meta: "Polyester · 1.2 yards",
    swatch: "sw-scarf",
    folder: "DeseboDuku",
    images: [
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775284096/IMG_2009_sxe7cw.jpg",
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775284093/IMG_2007_qsaspb.jpg",
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775284092/IMG_2006_tuzpjn.jpg",
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775284082/IMG_1998_mq26ab.jpg"
    ],
  },
  {
    id: "desebo-duku-stone",
    name: "Desebo Duku with Stone",
    category: "Scarves",
    cats: ["scarf"],
    price: "$60.00",
    unit: "12 piece",
    meta: "Polyester · 1.2 yards · Stone embellished",
    swatch: "sw-scarf",
    folder: "DeseboDukuWithStone",
    images: [
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775284049/IMG_2170_uyewea.jpg",
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775284048/IMG_2169_cl0s7z.jpg",
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775284045/IMG_2167_nyojbl.jpg",
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775284044/IMG_2166_kriowz.jpg"],
  },
  {
    id: "desebo-crossline",
    name: "Desebo Cross Line",
    category: "Scarves",
    cats: ["scarf"],
    price: "$44",
    unit: "12 piece",
    meta: "Polyester · 1.2 yards",
    swatch: "sw-scarf",
    folder: "DeseboCrossLine",
    images: [
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775284114/IMG_1538_l8h5hq.jpg",
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775284115/IMG_1539_bqpowh.jpg",
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775284111/IMG_1536_il6cls.jpg",
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775284112/IMG_1537_lsfx3w.jpg"],
  },
  {
    id: "desebo-shine",
    name: "Desebo Shine Sequence",
    category: "Scarves",
    cats: ["scarf"],
    price: "$38",
    unit: "12 piece",
    meta: "Polyester · 1.2 yards · Sequin finish",
    swatch: "sw-scarf",
    badge: { label: "New", type: "new" },
    folder: "DeseboShineSequence",
    images: [
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775283967/IMG_1551_jppjlh.jpg",
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775283966/IMG_1550_gllatg.jpg",
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775283964/IMG_1548_x4sugo.jpg",
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775283963/IMG_1547_z0yilt.jpg"
    ],
  },
  {
    id: "meba-duku",
    name: "Meba Duku",
    category: "Scarves",
    cats: ["scarf"],
    price: "$34",
    unit: "12 piece",
    meta: "Polyester · 1.2 yards",
    swatch: "sw-scarf",
    folder: "MebaDuku",
    images: [
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775283962/IMG_2318_wl1st2.jpg",
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775283961/IMG_2317_j0cg4m.jpg",
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775283954/IMG_2309_nkpak0.jpg",
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775283953/IMG_2257_zgu9pp.jpg"
    ],
  },
  {
    id: "3cup-stone-beads",
    name: "3 Cupstone with Beads Bell Duku",
    category: "Scarves",
    cats: ["scarf"],
    price: "$60",
    unit: "12 piece",
    meta: "Polyester · 1.2 yards · Beads & Bell",
    swatch: "sw-scarf",
    folder: "3CupstonewithbeadsBellDuku",
    images: [
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775284956/IMG_2165_cvh6rl.jpg",
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775284952/IMG_2164_mqi40c.jpg",
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775284949/IMG_2163_qevcek.jpg",
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775284938/IMG_2160_f1k1lk.jpg"
    ],
  },
  {
    id: "40cup-meba",
    name: "40 Cupstone Meba Duku",
    category: "Scarves",
    cats: ["scarf"],
    price: "$50",
    unit: "12 piece",
    meta: "Polyester · 1.2 yards",
    swatch: "sw-scarf",
    folder: "40CupStoneMebaDuku",
    images: [
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775284905/IMG_2102_lsyh3k.jpg",
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775284902/IMG_2104_guu2yy.jpg",
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775284898/IMG_2103_rgwt8x.jpg",
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775284896/IMG_2105_vvccuy.jpg"
    ],
      
  },
  {
    id: "aircondition-bell",
    name: "Air Condition Duku with Bell",
    category: "Scarves",
    cats: ["scarf"],
    price: "$60",
    unit: "12 piece",
    meta: "Polyester · 1.2 yards",
    swatch: "sw-president",
    folder: "AirConditioneWithTheBell",
    images: [
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775284301/IMG_2174_ltshxu.jpg",
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775284297/IMG_2171_aeje4o.jpg",
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775284297/IMG_2172_cfbism.jpg",
      "https://res.cloudinary.com/djx10ffrj/image/upload/v1775284288/IMG_2108_f8gnxl.jpg"
    ],
  },

  
];

export const CATEGORIES = [
  { id: "all",        label: "All"                 },
  { id: "kente",      label: "Kente"               },
  { id: "embroidery", label: "Embroidery / Brissi"  },
  { id: "scarf",      label: "Scarves (Duku)"       },
];
