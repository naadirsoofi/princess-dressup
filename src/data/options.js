export const PRINCESSES = [
  {
    id: 'rose',
    name: 'Rose',
    tint: '#FFE4EF',
    skin: '#F8D7C4',
    shade: '#E9B9A0',
    hair: '#E2A23B',
    hairDark: '#B5761A',
    eyes: '#5A3A2A',
    blush: '#F59FB0',
    look: { dress: 'ballgown', color: 'rose', hair: 'curly', crown: 'flowers', lips: 'pink', extras: ['heart'] },
  },
  {
    id: 'luna',
    name: 'Luna',
    tint: '#E1F0FF',
    skin: '#E2B08A',
    shade: '#C98F66',
    hair: '#2F2C5E',
    hairDark: '#1B1940',
    eyes: '#3A2F66',
    blush: '#EA8E83',
    look: { dress: 'starry', color: 'sky', hair: 'long', crown: 'moon', lips: 'berry', extras: ['wand'] },
  },
  {
    id: 'violet',
    name: 'Violet',
    tint: '#EEE6FF',
    skin: '#8E5A3C',
    shade: '#71442B',
    hair: '#2A1712',
    hairDark: '#120806',
    eyes: '#24130D',
    blush: '#C2646A',
    look: { dress: 'ruffles', color: 'lilac', hair: 'bun', crown: 'tall', lips: 'coral', extras: ['wings'] },
  },
];

export const CASTLES = [
  { id: 'cloud', label: 'Clouds', name: 'Cloud Castle', sky: '#BFE4FF' },
  { id: 'forest', label: 'Forest', name: 'Forest Castle', sky: '#D2F0FF' },
  { id: 'snowy', label: 'Snowy', name: 'Snowy Hill Castle', sky: '#5B60B3' },
  { id: 'seaside', label: 'Seaside', name: 'Seaside Castle', sky: '#A8E2FA' },
];

export const DRESSES = [
  { id: 'ballgown', label: 'Ball gown', phrase: 'ball gown' },
  { id: 'ruffles', label: 'Ruffles', phrase: 'ruffle dress' },
  { id: 'puffy', label: 'Puffy', phrase: 'puffy dress' },
  { id: 'tutu', label: 'Tutu', phrase: 'tutu' },
  { id: 'starry', label: 'Starry', phrase: 'starry dress' },
  { id: 'petals', label: 'Petals', phrase: 'petal dress' },
];

export const COLORS = [
  { id: 'rose', label: 'Pink', base: '#F27BAA', light: '#FFC6DC', dark: '#C94A80' },
  { id: 'sky', label: 'Blue', base: '#5DB6EE', light: '#C2E6FF', dark: '#3283BF' },
  { id: 'lilac', label: 'Purple', base: '#A986E8', light: '#DECFFF', dark: '#7656BE' },
  { id: 'mint', label: 'Green', base: '#52CFA5', light: '#C4F2E1', dark: '#2A9873' },
  { id: 'sun', label: 'Yellow', base: '#FFC940', light: '#FFEBAA', dark: '#D3940C' },
  { id: 'coral', label: 'Orange', base: '#FF8266', light: '#FFD2C4', dark: '#D3543A' },
];

export const HAIRSTYLES = [
  { id: 'long', label: 'Long' },
  { id: 'curly', label: 'Curly' },
  { id: 'pigtails', label: 'Pigtails' },
  { id: 'bun', label: 'Bun' },
  { id: 'ponytail', label: 'Ponytail' },
  { id: 'bob', label: 'Short' },
];

export const CROWNS = [
  { id: 'tiara', label: 'Tiara' },
  { id: 'tall', label: 'Big crown' },
  { id: 'flowers', label: 'Flowers' },
  { id: 'star', label: 'Star' },
  { id: 'bow', label: 'Bow' },
  { id: 'moon', label: 'Moon' },
];

export const LIPS = [
  { id: 'pink', label: 'Pink', color: '#EC5C95' },
  { id: 'red', label: 'Red', color: '#D8354A' },
  { id: 'coral', label: 'Coral', color: '#FF7457' },
  { id: 'berry', label: 'Berry', color: '#A3246A' },
  { id: 'peach', label: 'Peach', color: '#EE9A78' },
  { id: 'purple', label: 'Purple', color: '#9450C2' },
];

// box is the thumbnail crop (SVG viewBox) in princess drawing units.
export const EXTRAS = [
  { id: 'pearls', label: 'Pearls', box: '64 102 72 72' },
  { id: 'heart', label: 'Heart', box: '64 102 72 72' },
  { id: 'wand', label: 'Wand', box: '98 42 88 88' },
  { id: 'flowers', label: 'Flowers', box: '54 124 92 92' },
  { id: 'wings', label: 'Wings', box: '-8 64 216 216' },
  { id: 'bunny', label: 'Bunny', box: '-14 222 80 80' },
];

export const byId = (list, id) => list.find((item) => item.id === id) || list[0];

const has = (list, id) => list.some((item) => item.id === id);

const ROSE = PRINCESSES[0];
export const DEFAULT_LOOK = { princess: ROSE.id, castle: 'cloud', ...ROSE.look };

export function signatureLook(princessId, castle) {
  const princess = byId(PRINCESSES, princessId);
  return { ...princess.look, extras: [...princess.look.extras], princess: princess.id, castle };
}

export function sanitizeLook(raw) {
  if (!raw || typeof raw !== 'object') return DEFAULT_LOOK;
  const pick = (list, key) => (has(list, raw[key]) ? raw[key] : DEFAULT_LOOK[key]);
  const extras = Array.isArray(raw.extras)
    ? [...new Set(raw.extras.filter((id) => has(EXTRAS, id)))]
    : DEFAULT_LOOK.extras;
  return {
    princess: pick(PRINCESSES, 'princess'),
    castle: pick(CASTLES, 'castle'),
    dress: pick(DRESSES, 'dress'),
    color: pick(COLORS, 'color'),
    hair: pick(HAIRSTYLES, 'hair'),
    crown: pick(CROWNS, 'crown'),
    lips: pick(LIPS, 'lips'),
    extras,
  };
}

const randomId = (list) => list[Math.floor(Math.random() * list.length)].id;

export function randomLook(princess) {
  const shuffled = [...EXTRAS].sort(() => Math.random() - 0.5);
  return {
    princess,
    castle: randomId(CASTLES),
    dress: randomId(DRESSES),
    color: randomId(COLORS),
    hair: randomId(HAIRSTYLES),
    crown: randomId(CROWNS),
    lips: randomId(LIPS),
    extras: shuffled.slice(0, 1 + Math.floor(Math.random() * 2)).map((extra) => extra.id),
  };
}

export function describeLook(look) {
  const princess = byId(PRINCESSES, look.princess);
  const color = byId(COLORS, look.color);
  const dress = byId(DRESSES, look.dress);
  const castle = byId(CASTLES, look.castle);
  return `Princess ${princess.name} in a ${color.label.toLowerCase()} ${dress.phrase} at the ${castle.name}`;
}
