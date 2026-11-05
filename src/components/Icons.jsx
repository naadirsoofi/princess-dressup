// Single stroke line icons, drawn in currentColor.
const PATHS = {
  heart: 'M12 20s-7.5-4.6-7.5-10.2A4.1 4.1 0 0 1 12 7.4a4.1 4.1 0 0 1 7.5 2.4C19.5 15.4 12 20 12 20z',
  castle: 'M3 21h18M5 21V10h3v2h2V7l2-3 2 3v5h2v-2h3v11M10 21v-4a2 2 0 0 1 4 0v4',
  dress: 'M9 3c0 2 1.3 3 3 3s3-1 3-3M9 3 7.6 8 10 10 5 20.5h14L14 10l2.4-2L15 3',
  drop: 'M12 3.5s6 6.4 6 10.8a6 6 0 0 1-12 0c0-4.4 6-10.8 6-10.8z',
  hair: 'M7 3c-2.5 3 2.5 6 0 9s2.5 6 0 9M12 3c-2.5 3 2.5 6 0 9s2.5 6 0 9M17 3c-2.5 3 2.5 6 0 9s2.5 6 0 9',
  crown: 'M4 18h16M4.5 18 3 8l5 4 4-7 4 7 5-4-1.5 10',
  lipstick: 'M8.5 21h7M9 21v-8h6v8M10 13V7.5L14 4v9',
  wand: 'M4 20 14 10M16.5 2.5l.9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9z',
  undo: 'M9 14 4 9l5-5M4 9h10a6 6 0 0 1 0 12h-3',
  restart: 'M3.5 12a8.5 8.5 0 1 0 2.8-6.3M3.5 4v5h5',
  soundOn: 'M4 9.5v5h4l5 4v-13l-5 4zM16.5 9a4.5 4.5 0 0 1 0 6M19 6.5a8 8 0 0 1 0 11',
  soundOff: 'M4 9.5v5h4l5 4v-13l-5 4zM17 9.5l5 5M22 9.5l-5 5',
  camera: 'M4 8h3l2-3h6l2 3h3v11H4zM12 16.5a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z',
  dice: 'M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z',
  download: 'M12 4v11M7 10l5 5 5-5M5 20h14',
  close: 'M6 6l12 12M18 6 6 18',
  arrowRight: 'M5 12h14M13 6l6 6-6 6',
  check: 'M5 12.5l4.5 4.5L19 7.5',
  sparkle: 'M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.2 2.2M15.5 15.5l2.2 2.2M6.3 17.7l2.2-2.2M15.5 8.5l2.2-2.2',
};

// Pips drawn as wide round dots on top of the outline.
const DOTS = { dice: 'M8.5 8.5h.01M15.5 8.5h.01M12 12h.01M8.5 15.5h.01M15.5 15.5h.01' };

export default function Icon({ name, size = 26 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={PATHS[name]} />
      {DOTS[name] && <path d={DOTS[name]} strokeWidth="3" />}
    </svg>
  );
}

export function LogoMark({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true" focusable="false">
      <circle cx="20" cy="20" r="19" fill="#FFE4EF" />
      <path d="M9 27 7.5 14l6.5 5 6-9.5 6 9.5 6.5-5L31 27Z" fill="#F2B33D" stroke="#B97D0E" strokeWidth="1.4" strokeLinejoin="round" />
      <rect x="9" y="26.5" width="22" height="4.5" rx="2.2" fill="#C42D6B" />
      <circle cx="20" cy="21" r="2.6" fill="#C42D6B" />
      <path d="M31 4.5Q31 9 35.5 9 31 9 31 13.5 31 9 26.5 9 31 9 31 4.5Z" fill="#6E4BC2" />
    </svg>
  );
}
