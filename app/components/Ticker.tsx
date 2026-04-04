const ITEMS = [
  "Obama Kente","Bead Brissi","Desebo Duku","Meba Duku",
  "Brissi Embroidery","Obama Kente with Stone","Desebo with Stone",
  "Air Condition Brissi","Brissi Stone & Flag","Desebo Shine Sequence",
  "40 Cupstone Meba","3 Cupstone Bell","Desebo Cross Line",
  "Air Condition Bell","Brissi Beads Embroidery","Air Condition Brissi Stone",
];

export default function Ticker() {
  const items = [...ITEMS, ...ITEMS];
  return (
    <div style={{ background: "var(--gold)", padding: "13px 0", overflow: "hidden", position: "relative" }}>
      <div className="ticker" style={{ display: "flex", width: "max-content" }}>
        {items.map((label, i) => (
          <span key={i} style={{
            display: "inline-flex", alignItems: "center", gap: 20,
            padding: "0 28px",
            fontSize: 10, fontWeight: 600, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "rgba(10,10,10,0.75)",
            whiteSpace: "nowrap",
          }}>
            {label}
            <span style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(10,10,10,0.35)", display: "block" }} />
          </span>
        ))}
      </div>
    </div>
  );
}
