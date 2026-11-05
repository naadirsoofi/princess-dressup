import { forwardRef } from 'react';
import Backdrop from './Backdrop';
import Princess from './Princess';
import { sparklePath } from './shapes';

const BURST_COLORS = ['#FFD84D', '#FF8FB8', '#FFFFFF', '#B9A3F5', '#8CE0C0'];
const BURST = Array.from({ length: 10 }, (_, i) => {
  const angle = (Math.PI * 2 * i) / 10;
  return {
    dx: Math.round(Math.cos(angle) * 130),
    dy: Math.round(Math.sin(angle) * 160),
    color: BURST_COLORS[i % BURST_COLORS.length],
    r: i % 2 ? 10 : 7,
  };
});

const Scene = forwardRef(function Scene({ look, label, ambient = true, celebrateKey = 0 }, ref) {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMax slice"
      role="img"
      aria-label={label}
    >
      <Backdrop id={look.castle} ambient={ambient} />
      <ellipse cx="200" cy="468" rx="98" ry="13" fill="#2A1B3D" opacity="0.14" />
      <g key={celebrateKey} className={celebrateKey ? 'hop' : undefined}>
        <g transform="translate(65 70) scale(1.35)">
          <Princess look={look} />
        </g>
      </g>
      {celebrateKey > 0 && (
        <g key={`burst-${celebrateKey}`} className="burst" aria-hidden="true">
          {BURST.map((star) => (
            <path
              key={`${star.dx}-${star.dy}`}
              d={sparklePath(200, 260, star.r)}
              fill={star.color}
              className="burst-star"
              style={{ '--dx': `${star.dx}px`, '--dy': `${star.dy}px` }}
            />
          ))}
        </g>
      )}
    </svg>
  );
});

export default Scene;
