import { archWindow, sparklePath, starPath } from './shapes';

// Castle scenes drawn in a 400 x 500 box with solid fills only.

function Cloud({ x, y, s = 1, fill = '#FFFFFF' }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} fill={fill}>
      <circle cx="-26" cy="4" r="16" />
      <circle cx="0" cy="-6" r="22" />
      <circle cx="26" cy="2" r="18" />
      <rect x="-26" y="4" width="52" height="16" rx="8" />
    </g>
  );
}

function Crenels({ x, y, width, count, fill, size = 12 }) {
  const gap = (width - size) / (count - 1);
  return (
    <g fill={fill}>
      {Array.from({ length: count }, (_, i) => <rect key={i} x={x + i * gap} y={y - size + 2} width={size} height={size} rx="2" />)}
    </g>
  );
}

function Flag({ x, y, color, pole }) {
  return (
    <g>
      <path d={`M${x} ${y} V${y - 22}`} stroke={pole} strokeWidth="2.4" strokeLinecap="round" />
      <path d={`M${x} ${y - 22} L${x + 18} ${y - 16} L${x} ${y - 10} Z`} fill={color} />
    </g>
  );
}

function Twinkles({ points, fill, ambient }) {
  return points.map(([x, y, r], i) => (
    <path
      key={`${x}-${y}`}
      d={sparklePath(x, y, r)}
      fill={fill}
      className={ambient ? 'twinkle' : undefined}
      style={ambient ? { animationDelay: `${(i * 0.45).toFixed(2)}s` } : undefined}
    />
  ));
}

const RAINBOW = ['#FF8FA3', '#FFB86B', '#FFE07A', '#8FE3A8', '#8CCBFF', '#B9A3F5'];

function CloudCastle({ ambient }) {
  return (
    <g>
      <rect width="400" height="500" fill="#BFE4FF" />
      {RAINBOW.map((color, i) => {
        const r = 196 - i * 13;
        return <path key={color} d={`M${200 - r} 330 A${r} ${r} 0 0 1 ${200 + r} 330`} fill="none" stroke={color} strokeWidth="13" />;
      })}
      <Cloud x={62} y={96} />
      <Cloud x={344} y={70} s={0.8} />

      <rect x="96" y="170" width="46" height="150" fill="#FFC3DA" />
      <rect x="258" y="170" width="46" height="150" fill="#FFC3DA" />
      <path d="M90 172 L119 104 L148 172 Z M252 172 L281 104 L310 172 Z" fill="#A986E8" />
      <Flag x={119} y={104} color="#F6C343" pole="#7656BE" />
      <Flag x={281} y={104} color="#F6C343" pole="#7656BE" />
      <rect x="130" y="210" width="140" height="110" fill="#FFD6E6" />
      <Crenels x={130} y={210} width={140} count={6} fill="#FFD6E6" />
      <rect x="174" y="130" width="52" height="100" fill="#FFE1EC" />
      <path d="M166 132 L200 52 L234 132 Z" fill="#8E6BD8" />
      <Flag x={200} y={52} color="#F27BAA" pole="#7656BE" />
      <g fill="#8E6BD8">
        <path d={archWindow(112, 196, 14, 26)} />
        <path d={archWindow(274, 196, 14, 26)} />
        <path d={archWindow(112, 250, 14, 26)} />
        <path d={archWindow(274, 250, 14, 26)} />
        <path d={archWindow(146, 236, 16, 28)} />
        <path d={archWindow(238, 236, 16, 28)} />
      </g>
      <circle cx="200" cy="168" r="12" fill="#FFFFFF" stroke="#E58BB5" strokeWidth="3" />
      <path d={archWindow(180, 262, 40, 58)} fill="#C74A85" />

      <g fill="#F1F7FF">
        {[[60, 336, 34], [120, 326, 38], [200, 330, 40], [280, 326, 38], [340, 336, 34]].map(([x, y, r]) => <circle key={x} cx={x} cy={y} r={r} />)}
      </g>
      <path d="M0 372 Q50 340 100 366 Q150 336 200 362 Q250 336 300 364 Q350 340 400 368 L400 500 L0 500 Z" fill="#F1F7FF" />
      <path d="M0 404 Q40 376 80 396 Q120 370 170 392 Q220 368 260 392 Q310 370 350 394 Q380 380 400 390 L400 500 L0 500 Z" fill="#FFFFFF" />
      <Twinkles ambient={ambient} fill="#FFFFFF" points={[[40, 210, 8], [362, 226, 7], [330, 150, 6], [70, 300, 6], [250, 92, 7], [150, 70, 5]]} />
    </g>
  );
}

function Tree({ x, y, s = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <rect x="-7" y="0" width="14" height="60" rx="4" fill="#8B5A3C" />
      <circle cx="-21" cy="12" r="22" fill="#45A15A" />
      <circle cx="21" cy="12" r="22" fill="#45A15A" />
      <circle cx="0" cy="-12" r="34" fill="#4FAF63" />
    </g>
  );
}

function Mushroom({ x, y, s = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <rect x="-6" y="-4" width="12" height="18" rx="4" fill="#FFF4E0" />
      <path d="M-17 0 Q0 -26 17 0 Z" fill="#E5534B" />
      <circle cx="-6" cy="-8" r="2.6" fill="#FFFFFF" />
      <circle cx="6" cy="-11" r="2.2" fill="#FFFFFF" />
      <circle cx="10" cy="-3" r="1.8" fill="#FFFFFF" />
    </g>
  );
}

function MeadowFlower({ x, y, color }) {
  return (
    <g>
      {[0, 1, 2, 3, 4].map((i) => {
        const a = (Math.PI * 2 * i) / 5;
        return <circle key={i} cx={x + Math.cos(a) * 4} cy={y + Math.sin(a) * 4} r="3.6" fill={color} />;
      })}
      <circle cx={x} cy={y} r="2.6" fill="#FFD84D" />
    </g>
  );
}

function Butterfly({ x, y, colors, delay, ambient }) {
  return (
    <g className={ambient ? 'flutter' : undefined} style={ambient ? { animationDelay: delay } : undefined}>
      <g transform={`translate(${x} ${y})`}>
        <ellipse cx="-6" cy="-3" rx="6" ry="8" fill={colors[0]} transform="rotate(-20 -6 -3)" />
        <ellipse cx="6" cy="-3" rx="6" ry="8" fill={colors[0]} transform="rotate(20 6 -3)" />
        <ellipse cx="-5" cy="7" rx="4" ry="5" fill={colors[1]} />
        <ellipse cx="5" cy="7" rx="4" ry="5" fill={colors[1]} />
        <path d="M0 -8 V12" stroke="#5B3B2E" strokeWidth="2.2" strokeLinecap="round" />
      </g>
    </g>
  );
}

function ForestCastle({ ambient }) {
  return (
    <g>
      <rect width="400" height="500" fill="#D2F0FF" />
      <circle cx="336" cy="80" r="26" fill="#FFE27A" />
      <Cloud x={72} y={84} s={0.8} />
      <path d="M0 300 Q90 236 190 276 Q290 230 400 284 L400 500 L0 500 Z" fill="#A9DFA1" />

      <rect x="104" y="176" width="40" height="140" fill="#DDD0B8" />
      <rect x="256" y="176" width="40" height="140" fill="#DDD0B8" />
      <path d="M98 178 L124 112 L150 178 Z M250 178 L276 112 L302 178 Z" fill="#E0714F" />
      <rect x="136" y="214" width="128" height="100" fill="#EDE3D1" />
      <Crenels x={136} y={214} width={128} count={6} fill="#EDE3D1" />
      <rect x="176" y="150" width="48" height="80" fill="#E6DAC4" />
      <path d="M170 152 L200 90 L230 152 Z" fill="#C95A3B" />
      <Flag x={200} y={90} color="#F6C343" pole="#7A4B2E" />
      <g fill="#3F6E52">
        <path d={archWindow(117, 200, 14, 24)} />
        <path d={archWindow(269, 200, 14, 24)} />
        <path d={archWindow(192, 172, 16, 26)} />
        <path d={archWindow(152, 236, 14, 24)} />
        <path d={archWindow(234, 236, 14, 24)} />
      </g>
      <path d={archWindow(184, 262, 32, 52)} fill="#9B6A43" />
      <g fill="#5DBB63">
        {[[140, 300], [147, 291], [138, 284], [151, 307], [258, 300], [252, 291], [262, 285], [250, 308]].map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="5" />)}
      </g>

      <path d="M0 352 Q110 316 210 344 Q320 372 400 336 L400 500 L0 500 Z" fill="#84CF74" />
      <Tree x={44} y={300} />
      <Tree x={360} y={306} s={0.9} />
      <path d="M0 410 Q200 384 400 410 L400 500 L0 500 Z" fill="#6CC05F" />
      <MeadowFlower x={30} y={444} color="#FF9EC4" />
      <MeadowFlower x={92} y={474} color="#FFFFFF" />
      <MeadowFlower x={312} y={478} color="#C3A6F2" />
      <MeadowFlower x={374} y={448} color="#FF9EC4" />
      <Mushroom x={340} y={452} />
      <Mushroom x={58} y={472} s={0.75} />
      <Butterfly x={86} y={206} colors={['#FF9EC4', '#FFD86B']} delay="0s" ambient={ambient} />
      <Butterfly x={324} y={232} colors={['#B9A3F5', '#8CCBFF']} delay="1.3s" ambient={ambient} />
    </g>
  );
}

function SnowRoof({ cx, base, half, top, color }) {
  const capY = top + (base - top) * 0.38;
  const capHalf = half * 0.38;
  const x0 = cx - capHalf;
  const step = (capHalf * 2) / 3;
  return (
    <g>
      <path d={`M${cx - half} ${base} L${cx} ${top} L${cx + half} ${base} Z`} fill={color} />
      <path
        d={`M${x0} ${capY} L${cx} ${top} L${cx + capHalf} ${capY} Q${cx + capHalf - step / 2} ${capY + 6} ${cx + capHalf - step} ${capY} Q${cx} ${capY + 7} ${x0 + step} ${capY} Q${x0 + step / 2} ${capY + 6} ${x0} ${capY} Z`}
        fill="#FFFFFF"
      />
    </g>
  );
}

function Pine({ x, base, h }) {
  const layer = (top, bottom, half) => `M${x - half} ${bottom} L${x} ${top} L${x + half} ${bottom} Z`;
  return (
    <g>
      <rect x={x - 5} y={base - 12} width="10" height="14" fill="#7A4B2E" />
      <path d={layer(base - h * 0.55, base - 8, h * 0.4)} fill="#2F8566" />
      <path d={layer(base - h * 0.8, base - h * 0.35, h * 0.32)} fill="#2F8566" />
      <path d={layer(base - h, base - h * 0.62, h * 0.24)} fill="#2F8566" />
      <path d={layer(base - h, base - h * 0.82, h * 0.11)} fill="#FFFFFF" />
    </g>
  );
}

const SNOWFLAKES = Array.from({ length: 28 }, (_, i) => ({
  x: (i * 53 + 17) % 400,
  y: (i * 97 + 31) % 500,
  r: 1.6 + (i % 3) * 0.9,
  duration: 8 + (i % 5) * 1.6,
  delay: -(i * 0.7),
}));

function SnowyCastle({ ambient }) {
  return (
    <g>
      <rect width="400" height="500" fill="#5B60B3" />
      <path d="M318 56 A26 26 0 0 0 318 108 A32 32 0 0 1 318 56 Z" fill="#FFF1BF" />
      <Twinkles ambient={ambient} fill="#FFFFFF" points={[[60, 60, 6], [140, 40, 4], [226, 72, 5], [380, 150, 4], [30, 170, 4], [262, 30, 4]]} />
      <path d="M0 296 Q100 244 200 284 Q300 240 400 286 L400 500 L0 500 Z" fill="#DCE4FA" />

      <rect x="104" y="176" width="40" height="140" fill="#F1DEC1" />
      <rect x="256" y="176" width="40" height="140" fill="#F1DEC1" />
      <SnowRoof cx={124} base={178} half={26} top={108} color="#C8405F" />
      <SnowRoof cx={276} base={178} half={26} top={108} color="#C8405F" />
      <rect x="136" y="214" width="128" height="100" fill="#F6E8D3" />
      <Crenels x={136} y={214} width={128} count={6} fill="#F6E8D3" />
      <rect x="176" y="150" width="48" height="80" fill="#F3E3CA" />
      <SnowRoof cx={200} base={152} half={30} top={86} color="#B23552" />
      <g fill="#FFD066">
        <path d={archWindow(117, 200, 14, 24)} />
        <path d={archWindow(269, 200, 14, 24)} />
        <path d={archWindow(192, 172, 16, 26)} />
        <path d={archWindow(152, 236, 14, 24)} />
        <path d={archWindow(234, 236, 14, 24)} />
      </g>
      <path d={archWindow(184, 262, 32, 52)} fill="#8C4A3B" />
      <circle cx="200" cy="282" r="7" fill="none" stroke="#2F8566" strokeWidth="4" />
      <circle cx="200" cy="276" r="2.4" fill="#D8354A" />

      <path d="M0 372 Q120 344 220 366 Q320 384 400 360 L400 500 L0 500 Z" fill="#E9EEFC" />
      <Pine x={42} base={360} h={112} />
      <Pine x={86} base={378} h={78} />
      <Pine x={358} base={362} h={102} />
      <Pine x={318} base={380} h={70} />
      <path d="M0 400 Q200 368 400 400 L400 500 L0 500 Z" fill="#FFFFFF" />
      <g fill="#FFFFFF">
        {SNOWFLAKES.map((flake) => (
          <circle
            key={flake.x}
            cx={flake.x}
            cy={flake.y}
            r={flake.r}
            className={ambient ? 'snowflake' : undefined}
            style={ambient ? { animationDuration: `${flake.duration}s`, animationDelay: `${flake.delay}s` } : undefined}
          />
        ))}
      </g>
    </g>
  );
}

function SandTower({ x, y, w, h, fill }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill={fill} />
      <Crenels x={x} y={y} width={w} count={3} fill={fill} size={11} />
    </g>
  );
}

const WAVE = (y) => {
  let d = `M-40 ${y}`;
  for (let i = 0; i < 12; i += 1) d += ' q20 -8 40 0';
  return d;
};

function SeasideCastle({ ambient }) {
  return (
    <g>
      <rect width="400" height="500" fill="#A8E2FA" />
      <g stroke="#FFC93C" strokeWidth="5" strokeLinecap="round">
        {Array.from({ length: 8 }, (_, i) => {
          const a = (Math.PI * 2 * i) / 8;
          return <path key={i} d={`M${72 + Math.cos(a) * 40} ${84 + Math.sin(a) * 40} L${72 + Math.cos(a) * 52} ${84 + Math.sin(a) * 52}`} />;
        })}
      </g>
      <circle cx="72" cy="84" r="30" fill="#FFD84D" />
      <Cloud x={306} y={72} s={0.75} />
      <path d="M232 128 q8 -8 16 0 q8 -8 16 0 M176 96 q6 -6 12 0 q6 -6 12 0" stroke="#3E4B73" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      <rect y="250" width="400" height="140" fill="#3DB5DA" />
      <rect y="250" width="400" height="10" fill="#2C9CC4" />
      <g className={ambient ? 'waves' : undefined} stroke="#FFFFFF" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7">
        <path d={WAVE(282)} />
        <path d={WAVE(318)} transform="translate(20 0)" />
      </g>

      <path d="M0 368 Q200 340 400 368 L400 500 L0 500 Z" fill="#F7DB9C" />
      <path d="M0 368 Q200 340 400 368" stroke="#FFFFFF" strokeWidth="6" fill="none" />

      <SandTower x={106} y={240} w={44} h={124} fill="#EBBE73" />
      <SandTower x={250} y={240} w={44} h={124} fill="#EBBE73" />
      <rect x="140" y="282" width="120" height="84" fill="#F2CD88" />
      <Crenels x={140} y={282} width={120} count={5} fill="#F2CD88" size={12} />
      <SandTower x={176} y={206} w={48} h={90} fill="#EFC57D" />
      <Flag x={128} y={229} color="#FF7F66" pole="#B98443" />
      <Flag x={272} y={229} color="#FF9EC4" pole="#B98443" />
      <Flag x={200} y={195} color="#FF7F66" pole="#B98443" />
      <g fill="#C08A48">
        <path d={archWindow(121, 262, 14, 22)} />
        <path d={archWindow(265, 262, 14, 22)} />
        <path d={archWindow(192, 230, 16, 24)} />
        <path d={archWindow(184, 316, 32, 50)} />
      </g>
      <g fill="#FFB3C1">
        <circle cx="160" cy="330" r="6" />
        <circle cx="240" cy="330" r="6" />
      </g>
      <g fill="#E5C27E">
        {[[40, 420], [110, 452], [300, 430], [372, 470], [210, 486], [150, 404]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="3" />)}
      </g>
      <path d={starPath(346, 452, 16, 0.45)} fill="#FF8E6E" stroke="#E2694A" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M44 470 Q54 446 64 470 Z" fill="#FFB3C1" stroke="#E58BA0" strokeWidth="1.4" strokeLinejoin="round" />
    </g>
  );
}

const SCENES = { cloud: CloudCastle, forest: ForestCastle, snowy: SnowyCastle, seaside: SeasideCastle };

export default function Backdrop({ id, ambient = true }) {
  const Scene = SCENES[id] || CloudCastle;
  return <Scene ambient={ambient} />;
}
