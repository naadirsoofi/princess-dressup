import { byId, COLORS, LIPS, PRINCESSES } from '../data/options';
import { heartPath, petalPath, scallopTier, sparklePath, starPath, zigzagTier } from './shapes';

// The princess is drawn in a 200 x 300 box. Layers go back to front.

const GOLD = '#F6C343';
const GOLD_DARK = '#C08712';
const PINK_GEM = '#EE4F8C';
const BLUE_GEM = '#3FA6EA';
const MINT_GEM = '#33BE90';
const LEAF = '#5DBB63';
const STAR_YELLOW = '#FFD84D';

const CAP = 'M63 66 Q60 26 100 26 Q140 26 137 66 Q139 80 134 92 L66 92 Q61 80 63 66 Z';
const BANGS = 'M65 72 Q61 28 100 28 Q139 28 135 72 Q131 56 121 50 Q114 58 105 51 Q96 59 86 51 Q77 58 70 54 Q66 61 65 72 Z';
const SWOOP = 'M64 76 Q58 26 102 26 Q142 28 136 76 Q128 50 106 46 Q84 52 72 64 Q66 68 64 76 Z';

const CURLS = [
  [66, 58, 16], [134, 58, 16], [61, 82, 16], [139, 82, 16], [60, 106, 15], [140, 106, 15],
  [64, 128, 14], [136, 128, 14], [71, 148, 12], [129, 148, 12], [80, 38, 18], [120, 38, 18], [100, 30, 20],
];
const FRONT_CURLS = [[72, 48, 9], [86, 40, 10], [100, 37, 10], [114, 40, 10], [128, 48, 9]];

const strand = (d, color) => (
  <path d={d} stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5" />
);

function bowShape(x, y, color, size = 9) {
  return (
    <g>
      <path
        d={`M${x} ${y} L${x - size} ${y - size * 0.7} Q${x - size * 1.25} ${y} ${x - size} ${y + size * 0.7} Z M${x} ${y} L${x + size} ${y - size * 0.7} Q${x + size * 1.25} ${y} ${x + size} ${y + size * 0.7} Z`}
        fill={color.base}
        stroke={color.dark}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <circle cx={x} cy={y} r={size * 0.3} fill={color.dark} />
    </g>
  );
}

function HairBack({ style, p, c }) {
  const h = p.hair;
  const d = p.hairDark;
  switch (style) {
    case 'long':
      return (
        <g>
          <path d="M64 66 Q60 24 100 24 Q140 24 136 66 Q146 120 150 182 Q138 192 125 186 Q112 194 100 188 Q88 194 75 186 Q62 192 50 182 Q54 120 64 66 Z" fill={h} />
          {strand('M72 104 Q66 142 62 176 M128 104 Q134 142 138 176', d)}
        </g>
      );
    case 'curly':
      return (
        <g>
          {CURLS.map(([x, y, r]) => <circle key={`${x}-${y}`} cx={x} cy={y} r={r} fill={h} />)}
          {CURLS.map(([x, y]) => (
            <path key={`c${x}-${y}`} d={`M${x - 5} ${y + 3} Q${x} ${y - 4} ${x + 5} ${y + 3}`} stroke={d} strokeWidth="1.6" fill="none" strokeLinecap="round" opacity="0.55" />
          ))}
        </g>
      );
    case 'pigtails':
      return (
        <g>
          <path d={CAP} fill={h} />
          {[-1, 1].map((side) => (
            <g key={side}>
              {[0, 1, 2, 3, 4].map((i) => (
                <ellipse key={i} cx={100 + side * (38 + i * 1.8)} cy={98 + i * 15} rx={9 - i * 0.5} ry="9" fill={h} stroke={d} strokeWidth="1.3" />
              ))}
              <path d={`M${100 + side * 45.2 - 6} 165 Q${100 + side * 45.2} 184 ${100 + side * 45.2 + 6} 165 Z`} fill={h} />
            </g>
          ))}
        </g>
      );
    case 'bun':
      return (
        <g>
          <path d={CAP} fill={h} />
          <circle cx="100" cy="24" r="18" fill={h} />
          <path d="M91 22 Q100 11 109 22 Q101 31 95 24" stroke={d} strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.6" />
          <rect x="88" y="38" width="24" height="5" rx="2.5" fill={c.base} />
        </g>
      );
    case 'ponytail':
      return (
        <g>
          <path d={CAP} fill={h} />
          <path d="M120 40 Q172 36 165 100 Q160 142 143 170 Q152 126 142 96 Q134 66 114 52 Z" fill={h} />
          {strand('M136 56 Q156 70 152 112', d)}
          <circle cx="122" cy="42" r="5.5" fill={c.base} stroke={c.dark} strokeWidth="1.2" />
        </g>
      );
    case 'bob':
      return <path d="M60 72 Q58 26 100 26 Q142 26 140 72 L143 106 Q137 114 124 110 L76 110 Q63 114 57 106 Z" fill={h} />;
    default:
      return null;
  }
}

function HairFront({ style, p, c }) {
  const h = p.hair;
  const d = p.hairDark;
  switch (style) {
    case 'long':
      return (
        <g>
          <path d={SWOOP} fill={h} />
          <path d="M66 64 Q57 112 70 154 Q77 118 74 74 Z M134 64 Q143 112 130 154 Q123 118 126 74 Z" fill={h} />
          {strand('M68 84 Q64 116 69 142 M132 84 Q136 116 131 142', d)}
        </g>
      );
    case 'bob':
      return (
        <g>
          <path d={SWOOP} fill={h} />
          <path d="M65 66 Q59 92 66 110 Q73 96 72 72 Z M135 66 Q141 92 134 110 Q127 96 128 72 Z" fill={h} />
        </g>
      );
    case 'curly':
      return (
        <g fill={h}>
          <path d={BANGS} />
          {FRONT_CURLS.map(([x, y, r]) => <circle key={x} cx={x} cy={y} r={r} />)}
        </g>
      );
    case 'pigtails':
      return (
        <g>
          <path d={BANGS} fill={h} />
          {bowShape(62, 90, c)}
          {bowShape(138, 90, c)}
        </g>
      );
    default:
      return <path d={BANGS} fill={h} />;
  }
}

function Flower({ x, y, color, r = 3.6 }) {
  return (
    <g>
      {[0, 1, 2, 3, 4].map((i) => {
        const a = (Math.PI * 2 * i) / 5 - Math.PI / 2;
        return <circle key={i} cx={x + Math.cos(a) * r} cy={y + Math.sin(a) * r} r={r} fill={color} />;
      })}
      <circle cx={x} cy={y} r={r * 0.7} fill={STAR_YELLOW} />
    </g>
  );
}

const CROWN_FLOWERS = [[67, 56], [74, 42], [86, 32], [100, 28], [114, 32], [126, 42], [133, 56]];
const FLOWER_COLORS = ['#F58AB5', '#FFFFFF', '#C3A6F2'];

function Crown({ style, c }) {
  const metal = { fill: GOLD, stroke: GOLD_DARK, strokeWidth: 1.2, strokeLinejoin: 'round' };
  switch (style) {
    case 'tiara':
      return (
        <g>
          <path d="M80 47 L85 35 L91 42 L100 24 L109 42 L115 35 L120 47 Q100 38 80 47 Z" {...metal} />
          <path d="M74 48 Q100 37 126 48" stroke={GOLD} strokeWidth="3.4" fill="none" strokeLinecap="round" />
          <circle cx="100" cy="36" r="3.4" fill={PINK_GEM} />
          <circle cx="85" cy="42" r="1.8" fill={BLUE_GEM} />
          <circle cx="115" cy="42" r="1.8" fill={BLUE_GEM} />
        </g>
      );
    case 'tall':
      return (
        <g>
          <path d="M76 46 L72 16 L87 30 L100 10 L113 30 L128 16 L124 46 Q100 39 76 46 Z" {...metal} />
          <path d="M75 42 Q100 35 125 42" stroke={GOLD_DARK} strokeWidth="1.6" fill="none" />
          <circle cx="72" cy="16" r="2.8" fill={PINK_GEM} />
          <circle cx="100" cy="10" r="3.2" fill={BLUE_GEM} />
          <circle cx="128" cy="16" r="2.8" fill={PINK_GEM} />
          <circle cx="88" cy="40.5" r="2.6" fill={MINT_GEM} />
          <circle cx="100" cy="38.5" r="3" fill={PINK_GEM} />
          <circle cx="112" cy="40.5" r="2.6" fill={MINT_GEM} />
        </g>
      );
    case 'flowers':
      return (
        <g>
          {CROWN_FLOWERS.slice(0, -1).map(([x, y], i) => {
            const [nx, ny] = CROWN_FLOWERS[i + 1];
            const angle = (Math.atan2(ny - y, nx - x) * 180) / Math.PI;
            return <ellipse key={x} cx={(x + nx) / 2} cy={(y + ny) / 2} rx="6" ry="2.8" fill={LEAF} transform={`rotate(${angle} ${(x + nx) / 2} ${(y + ny) / 2})`} />;
          })}
          {CROWN_FLOWERS.map(([x, y], i) => <Flower key={x} x={x} y={y} color={FLOWER_COLORS[i % 3]} />)}
        </g>
      );
    case 'star':
      return (
        <g>
          <path d="M66 62 Q100 18 134 62" stroke={GOLD} strokeWidth="3.6" fill="none" strokeLinecap="round" />
          <path d={starPath(119, 38, 12)} fill={STAR_YELLOW} stroke={GOLD_DARK} strokeWidth="1.2" strokeLinejoin="round" />
          <path d={starPath(86, 40, 5.5)} fill={PINK_GEM} />
        </g>
      );
    case 'bow':
      return (
        <g fill={c.base} stroke={c.dark} strokeWidth="1.4" strokeLinejoin="round">
          <path d="M98 36 L90 54 L96 51 L99 56 Z M102 36 L110 54 L104 51 L101 56 Z" />
          <path d="M100 32 C88 14 68 18 73 34 C76 45 90 42 100 34 Z M100 32 C112 14 132 18 127 34 C124 45 110 42 100 34 Z" />
          <ellipse cx="100" cy="33" rx="5.5" ry="5" fill={c.dark} />
        </g>
      );
    case 'moon':
      return (
        <g>
          <path d="M66 60 Q100 30 134 60" stroke={GOLD} strokeWidth="2.8" fill="none" strokeLinecap="round" />
          <path d="M100 33 A10 10 0 0 0 100 53 A12 12 0 0 1 100 33 Z" fill="#FFE58A" stroke={GOLD_DARK} strokeWidth="1" />
          <circle cx="81" cy="51" r="2.2" fill={BLUE_GEM} />
          <circle cx="119" cy="51" r="2.2" fill={BLUE_GEM} />
          <path d={sparklePath(108, 40, 3.5)} fill={GOLD} />
        </g>
      );
    default:
      return null;
  }
}

function Skirt({ style, c }) {
  switch (style) {
    case 'ballgown':
      return (
        <g>
          <path d="M80 160 Q100 166 120 160 C140 190 166 236 182 284 Q100 300 18 284 C34 236 60 190 80 160 Z" fill={c.base} />
          <path d="M54 230 Q78 248 100 234 Q122 248 146 230" stroke={c.dark} strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.45" />
          <path d="M26 281 Q100 297 174 281" stroke={c.light} strokeWidth="5" fill="none" strokeDasharray="0 10" strokeLinecap="round" />
          {[[64, 260, 5], [136, 262, 5], [100, 270, 4], [82, 206, 3.5], [118, 210, 3.5]].map(([x, y, r]) => (
            <path key={x} d={sparklePath(x, y, r)} fill={c.light} />
          ))}
        </g>
      );
    case 'ruffles':
      return (
        <g stroke={c.dark} strokeWidth="1.2" strokeOpacity="0.35">
          <path d={scallopTier(56, 144, 28, 172, 240, 282, 7)} fill={c.base} />
          <path d={scallopTier(70, 130, 44, 156, 198, 242, 6)} fill={c.light} />
          <path d={scallopTier(80, 120, 62, 138, 158, 202, 5)} fill={c.base} />
        </g>
      );
    case 'puffy':
      return (
        <g>
          <path d="M80 160 Q100 165 120 160 C138 200 150 240 156 286 Q100 296 44 286 C50 240 62 200 80 160 Z" fill={c.base} />
          <path d="M95 162 L105 162 L118 290 Q100 294 82 290 Z" fill={c.light} />
          <path d="M100 172 L100 284" stroke={c.base} strokeWidth="3.4" strokeDasharray="0 12" strokeLinecap="round" />
          <path d="M46 284 Q100 294 154 284" stroke={c.dark} strokeWidth="2" fill="none" opacity="0.5" />
        </g>
      );
    case 'tutu':
      return (
        <g>
          <path d={zigzagTier(72, 128, 40, 160, 156, 212, 9)} fill={c.light} />
          <path d={zigzagTier(76, 124, 50, 150, 156, 204, 8)} fill={c.base} />
          {[[70, 192], [100, 186], [130, 192]].map(([x, y]) => <path key={x} d={sparklePath(x, y, 4)} fill={c.light} />)}
        </g>
      );
    case 'starry':
      return (
        <g>
          <path d="M80 160 Q100 165 120 160 L160 286 Q100 298 40 286 Z" fill={c.base} />
          {[[70, 230, 6], [100, 206, 5], [130, 236, 6], [84, 262, 5], [118, 268, 6], [56, 274, 4.5], [146, 274, 4.5], [100, 244, 4]].map(([x, y, r]) => (
            <path key={`${x}-${y}`} d={starPath(x, y, r)} fill={c.light} />
          ))}
          <path d="M44 284 Q100 295 156 284" stroke={c.light} strokeWidth="4" fill="none" strokeDasharray="0 9" strokeLinecap="round" />
        </g>
      );
    case 'petals':
      return (
        <g>
          {[40, 78, 122, 160].map((x) => <path key={x} d={petalPath(x, 278, 26)} fill={c.dark} />)}
          {[58, 100, 142].map((x) => <path key={x} d={petalPath(x, 290, 26)} fill={c.base} />)}
          {[80, 100, 120].map((x) => <path key={x} d={petalPath(x, 210, 13)} fill={c.light} />)}
        </g>
      );
    default:
      return null;
  }
}

const ARMS = {
  leftDown: { d: 'M79 126 Q68 150 67 176', hand: [67, 178] },
  leftFront: { d: 'M79 126 Q70 154 92 170', hand: [93, 170] },
  rightDown: { d: 'M121 126 Q132 150 133 176', hand: [133, 178] },
  rightFront: { d: 'M121 126 Q130 154 108 170', hand: [107, 170] },
  rightUp: { d: 'M121 126 Q140 136 146 116', hand: [146, 114] },
};

function Wings({ c }) {
  const half = (
    <g fill={c.light} stroke={c.base} strokeWidth="1.6" strokeLinejoin="round" opacity="0.92">
      <path d="M96 140 C64 84 18 92 24 128 C28 156 70 162 96 150 Z" />
      <path d="M96 150 C70 168 46 196 60 212 C74 222 92 192 98 160 Z" />
      <path d="M94 144 Q60 118 34 122 M95 156 Q74 180 62 204" fill="none" opacity="0.7" />
    </g>
  );
  return (
    <g>
      {half}
      <g transform="translate(200 0) scale(-1 1)">{half}</g>
    </g>
  );
}

function Bouquet({ x, y, c }) {
  return (
    <g>
      <ellipse cx={x - 10} cy={y + 2} rx="7" ry="3.2" fill={LEAF} transform={`rotate(-30 ${x - 10} ${y + 2})`} />
      <ellipse cx={x + 10} cy={y + 2} rx="7" ry="3.2" fill={LEAF} transform={`rotate(30 ${x + 10} ${y + 2})`} />
      <path d={`M${x - 9} ${y + 4} L${x + 9} ${y + 4} L${x} ${y + 24} Z`} fill={c.light} stroke={c.dark} strokeWidth="1.2" strokeLinejoin="round" />
      <Flower x={x - 6} y={y - 1} color="#F58AB5" r={3.2} />
      <Flower x={x + 6} y={y - 1} color="#FFFFFF" r={3.2} />
      <Flower x={x} y={y - 9} color="#C3A6F2" r={3.4} />
    </g>
  );
}

function Bunny() {
  return (
    <g>
      <ellipse cx="21" cy="236" rx="3.8" ry="11" fill="#FFFFFF" stroke="#D9CCE8" strokeWidth="1.2" transform="rotate(-10 21 236)" />
      <ellipse cx="32" cy="236" rx="3.8" ry="11" fill="#FFFFFF" stroke="#D9CCE8" strokeWidth="1.2" transform="rotate(10 32 236)" />
      <ellipse cx="21" cy="237" rx="1.6" ry="7" fill="#FFB3C8" transform="rotate(-10 21 237)" />
      <ellipse cx="32" cy="237" rx="1.6" ry="7" fill="#FFB3C8" transform="rotate(10 32 237)" />
      <ellipse cx="26" cy="272" rx="16" ry="13" fill="#FFFFFF" stroke="#D9CCE8" strokeWidth="1.2" />
      <circle cx="26" cy="253" r="11" fill="#FFFFFF" stroke="#D9CCE8" strokeWidth="1.2" />
      <circle cx="22" cy="252" r="1.5" fill="#35214F" />
      <circle cx="30" cy="252" r="1.5" fill="#35214F" />
      <circle cx="26" cy="256" r="1.3" fill="#F07AA0" />
      <circle cx="19" cy="257" r="2.2" fill="#FFC6D6" />
      <circle cx="33" cy="257" r="2.2" fill="#FFC6D6" />
      <ellipse cx="18" cy="284" rx="5.5" ry="3" fill="#FFFFFF" stroke="#D9CCE8" strokeWidth="1.2" />
      <ellipse cx="34" cy="284" rx="5.5" ry="3" fill="#FFFFFF" stroke="#D9CCE8" strokeWidth="1.2" />
    </g>
  );
}

export default function Princess({ look }) {
  const p = byId(PRINCESSES, look.princess);
  const c = byId(COLORS, look.color);
  const lip = byId(LIPS, look.lips).color;
  const extras = new Set(look.extras);
  const wand = extras.has('wand');
  const flowers = extras.has('flowers');

  const left = flowers ? ARMS.leftFront : ARMS.leftDown;
  let right = ARMS.rightDown;
  if (wand) right = ARMS.rightUp;
  else if (flowers) right = ARMS.rightFront;

  const shoes = look.dress === 'tutu'
    ? [[89, 278], [111, 278]]
    : [[90, 293], [110, 293]];

  return (
    <g>
      {extras.has('wings') && <Wings c={c} />}
      <HairBack style={look.hair} p={p} c={c} />

      {look.dress === 'tutu' && (
        <path d="M92 200 L91 274 M108 200 L109 274" stroke={p.skin} strokeWidth="9" strokeLinecap="round" />
      )}
      {shoes.map(([x, y]) => <ellipse key={x} cx={x} cy={y} rx="8.5" ry="4.8" fill={c.dark} />)}

      <rect x="92" y="98" width="16" height="22" rx="4" fill={p.skin} />
      <path d="M80 112 L120 112 L122 118 Q100 132 78 118 Z" fill={p.skin} />
      <path d="M92 104 Q100 111 108 104 L108 108 Q100 114 92 108 Z" fill={p.shade} opacity="0.6" />

      <Skirt style={look.dress} c={c} />

      <path d="M78 117 Q100 131 122 117 L126 128 L120 158 Q100 163 80 158 L74 128 Z" fill={c.base} />
      <path d="M100 130 L100 152" stroke={c.light} strokeWidth="3" strokeDasharray="0 7" strokeLinecap="round" />
      <path d="M80 154 Q100 159 120 154 L121 162 Q100 167 79 162 Z" fill={c.dark} />
      {bowShape(100, 159, { base: c.light, dark: c.dark }, 6)}

      {wand && (
        <g>
          <path d="M146 116 L160 72" stroke={GOLD_DARK} strokeWidth="3.2" strokeLinecap="round" />
          <path d={starPath(162, 64, 12)} fill={STAR_YELLOW} stroke={GOLD_DARK} strokeWidth="1.2" strokeLinejoin="round" />
          <path d={sparklePath(178, 50, 4.5)} fill="#FFF3B8" />
          <path d={sparklePath(146, 50, 3.2)} fill="#FFF3B8" />
        </g>
      )}

      {[left, right].map((arm) => (
        <g key={arm.d}>
          <path d={arm.d} stroke={p.skin} strokeWidth="9" fill="none" strokeLinecap="round" />
          <circle cx={arm.hand[0]} cy={arm.hand[1]} r="5.8" fill={p.skin} />
        </g>
      ))}

      {look.dress === 'puffy' ? (
        <g fill={c.light} stroke={c.base} strokeWidth="1.6">
          <circle cx="75" cy="124" r="12" />
          <circle cx="125" cy="124" r="12" />
          <path d="M69 120 Q75 128 81 120 M119 120 Q125 128 131 120" fill="none" />
        </g>
      ) : (
        <g fill={c.light}>
          <ellipse cx="78" cy="123" rx="9" ry="7" />
          <ellipse cx="122" cy="123" rx="9" ry="7" />
        </g>
      )}

      {flowers && <Bouquet x={wand ? 93 : 100} y={166} c={c} />}

      {extras.has('pearls') && (
        <g>
          <path d="M84 120.8 Q100 134.8 116 120.8" stroke="#D9C7AE" strokeWidth="4.6" fill="none" strokeDasharray="0 5.4" strokeLinecap="round" />
          <path d="M84 120 Q100 134 116 120" stroke="#FFF8EE" strokeWidth="4.4" fill="none" strokeDasharray="0 5.4" strokeLinecap="round" />
        </g>
      )}
      {extras.has('heart') && (
        <g>
          <path d="M86 119 Q100 136 114 119" stroke={GOLD} strokeWidth="1.4" fill="none" />
          <path d={heartPath(100, 132, 6)} fill="#E9437A" stroke={GOLD_DARK} strokeWidth="0.9" />
        </g>
      )}

      <ellipse cx="66" cy="78" rx="5" ry="7" fill={p.skin} />
      <ellipse cx="134" cy="78" rx="5" ry="7" fill={p.skin} />
      <ellipse cx="100" cy="70" rx="34" ry="36" fill={p.skin} />

      <path d="M82 63 Q87 60.5 92 62.5 M108 62.5 Q113 60.5 118 63" stroke={p.hairDark} strokeWidth="1.6" fill="none" strokeLinecap="round" />
      {[87, 113].map((x) => (
        <g key={x}>
          <ellipse cx={x} cy="74" rx="4.6" ry="5.6" fill={p.eyes} />
          <circle cx={x + 1.6} cy="72" r="1.7" fill="#FFFFFF" />
          <circle cx={x - 1.2} cy="76.4" r="0.8" fill="#FFFFFF" />
        </g>
      ))}
      <path d="M81.5 70.5 Q87 66.5 92.5 70.5 M81.8 70.8 L79.4 68.8 M107.5 70.5 Q113 66.5 118.5 70.5 M118.2 70.8 L120.6 68.8" stroke="#2B1A2F" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <circle cx="79" cy="86" r="6" fill={p.blush} opacity="0.55" />
      <circle cx="121" cy="86" r="6" fill={p.blush} opacity="0.55" />
      <path d="M98.5 84 Q100 86 101.5 84" stroke={p.shade} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M92 93 Q96 90.5 100 92.5 Q104 90.5 108 93 Q100 101.5 92 93 Z" fill={lip} />
      <path d="M93.5 93.4 Q100 95.4 106.5 93.4" stroke="#000000" strokeOpacity="0.18" strokeWidth="1" fill="none" />

      <HairFront style={look.hair} p={p} c={c} />
      <Crown style={look.crown} c={c} />

      {extras.has('bunny') && <Bunny />}
    </g>
  );
}
