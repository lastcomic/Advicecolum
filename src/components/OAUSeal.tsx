export default function OAUSeal({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" className="seal-glow">
      {/* Outer ring */}
      <circle cx="100" cy="100" r="96" fill="#1B2A4A" stroke="#C9A84C" strokeWidth="3" />
      <circle cx="100" cy="100" r="88" fill="none" stroke="#C9A84C" strokeWidth="1" />

      {/* Inner gold disc */}
      <circle cx="100" cy="100" r="70" fill="url(#goldGradient)" />
      <circle cx="100" cy="100" r="70" fill="none" stroke="#B89A3E" strokeWidth="1.5" />

      {/* Text on outer ring */}
      <defs>
        <radialGradient id="goldGradient" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#E8D494" />
          <stop offset="50%" stopColor="#C9A84C" />
          <stop offset="100%" stopColor="#B89A3E" />
        </radialGradient>
        <path id="topArc" d="M 30,100 a 70,70 0 0,1 140,0" fill="none" />
        <path id="bottomArc" d="M 170,100 a 70,70 0 0,1 -140,0" fill="none" />
      </defs>

      <text fill="#C9A84C" fontSize="11" fontFamily="Georgia, serif" fontWeight="bold" letterSpacing="3">
        <textPath href="#topArc" startOffset="50%" textAnchor="middle">OLD AGE UNIVERSITY</textPath>
      </text>

      {/* Bottom text - dots and motto */}
      <text fill="#C9A84C" fontSize="8" fontFamily="Georgia, serif" letterSpacing="2">
        <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">VERITAS &middot; WISDOM &middot; KNOWLEDGE</textPath>
      </text>

      {/* Center text */}
      <text x="100" y="90" textAnchor="middle" fill="#1B2A4A" fontSize="11" fontFamily="Georgia, serif" fontWeight="bold">OAU</text>
      <text x="100" y="108" textAnchor="middle" fill="#1B2A4A" fontSize="8" fontFamily="Georgia, serif">EST. 2026</text>

      {/* Decorative dots */}
      <circle cx="32" cy="100" r="2" fill="#C9A84C" />
      <circle cx="168" cy="100" r="2" fill="#C9A84C" />
    </svg>
  );
}
