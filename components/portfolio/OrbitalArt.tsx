import { OrbitalControl } from "./Interactions";

function projectPoint(u: number, v: number) {
  const radius = 123 + 47 * Math.cos(v);
  const x = radius * Math.cos(u);
  const y = radius * Math.sin(u);
  const z = 47 * Math.sin(v);
  const tilt = 0.84;
  const py = y * Math.cos(tilt) - z * Math.sin(tilt);
  const pz = y * Math.sin(tilt) + z * Math.cos(tilt);
  const angle = -0.56;
  const scale = 700 / (700 - pz);
  return `${(250 + (x * Math.cos(angle) - py * Math.sin(angle)) * scale).toFixed(2)},${(245 + (x * Math.sin(angle) + py * Math.cos(angle)) * scale).toFixed(2)}`;
}

export function OrbitalArt() {
  const rings = Array.from({ length: 30 }, (_, i) =>
    Array.from({ length: 101 }, (_, j) =>
      projectPoint((i / 30) * Math.PI * 2, (j / 100) * Math.PI * 2),
    ).join(" "),
  );
  const contours = Array.from({ length: 16 }, (_, i) =>
    Array.from({ length: 141 }, (_, j) =>
      projectPoint((j / 140) * Math.PI * 2, (i / 16) * Math.PI * 2),
    ).join(" "),
  );
  return (
    <OrbitalControl>
      <div className="art-coordinate coordinate-top">
        <span>FIG. 01 — THE POSSIBILITY SPACE</span>
        <span>↗</span>
      </div>
      <svg
        className="orbital-svg"
        viewBox="0 0 500 490"
        fill="none"
        role="img"
        aria-labelledby="orbital-title"
      >
        <title id="orbital-title">
          An orange core inside an intricate orbital wireframe, representing
          ideas becoming connected systems
        </title>
        <defs>
          <radialGradient id="core-color" cx="32%" cy="25%" r="80%">
            <stop offset="0%" stopColor="#ffac62" />
            <stop offset="50%" stopColor="#fa6435" />
            <stop offset="100%" stopColor="#cc391d" />
          </radialGradient>
          <radialGradient id="orbital-glow">
            <stop stopColor="#eb713c" stopOpacity=".11" />
            <stop offset="100%" stopColor="#eb713c" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="250" cy="245" r="228" fill="url(#orbital-glow)" />
        <g stroke="#d6d2c8" strokeWidth=".7">
          <path d="M250 22V468M25 245H475" strokeDasharray="3 6" />
          <circle cx="250" cy="245" r="214" strokeDasharray="2 7" />
          <path d="M32 32h12m-6-6v12M456 32h12m-6-6v12M32 458h12m-6-6v12M456 458h12m-6-6v12" />
        </g>
        <g
          className="orbital-wireframe"
          stroke="#6c7065"
          strokeWidth=".64"
          opacity=".8"
        >
          {rings.map((points, i) => (
            <polyline points={points} key={`r${i}`} />
          ))}
          {contours.map((points, i) => (
            <polyline points={points} key={`c${i}`} />
          ))}
        </g>
        <circle
          className="orbital-core"
          cx="250"
          cy="245"
          r="37"
          fill="url(#core-color)"
        />
        <g stroke="#ea5a2a" strokeWidth="1">
          <path d="M287 242h61l28-29h56" />
          <circle cx="287" cy="242" r="3" fill="#ea5a2a" />
          <path d="M95 337h48l26-27" />
        </g>
        <g
          fill="#5d6157"
          fontSize="8.5"
          fontFamily="monospace"
          letterSpacing="1"
        >
          <text x="357" y="204">
            THE NEXT IDEA
          </text>
          <text x="47" y="352">
            ALWAYS EXPLORING
          </text>
        </g>
        <circle cx="123" cy="73" r="5" fill="#ed6336" />
        <circle cx="417" cy="379" r="3" fill="#747a68" />
      </svg>
      <div className="orbital-sticker">
        <span>THINK. BUILD.</span>
        <strong>Make it matter.</strong>
        <svg
          width="56"
          height="20"
          viewBox="0 0 56 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M1 9C18 18 31 0 51 8M45 2l8 6-9 5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      <div className="art-coordinate coordinate-bottom">
        <span>HUMAN CURIOSITY × MACHINE INTELLIGENCE</span>
      </div>
    </OrbitalControl>
  );
}
