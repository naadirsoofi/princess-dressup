import { forwardRef } from 'react';
import Backdrop from './Backdrop';
import Icon from './Icons';
import Princess from './Princess';
import { byId, CASTLES, COLORS, CROWNS, DRESSES, EXTRAS, HAIRSTYLES, LIPS, PRINCESSES } from '../data/options';

export const CATEGORIES = [
  { id: 'princess', label: 'Princess', title: 'Pick a princess', icon: 'heart', color: '#C42D6B', soft: '#FFE4EF' },
  { id: 'castle', label: 'Castle', title: 'Pick a castle', icon: 'castle', color: '#6E4BC2', soft: '#EEE7FF' },
  { id: 'dress', label: 'Dress', title: 'Pick a dress', icon: 'dress', color: '#2878B8', soft: '#E1F0FF' },
  { id: 'color', label: 'Colors', title: 'Pick a dress color', icon: 'drop', color: '#1F8A66', soft: '#DDF6EC' },
  { id: 'hair', label: 'Hair', title: 'Pick her hair', icon: 'hair', color: '#A86A08', soft: '#FFF1D2' },
  { id: 'crown', label: 'Crown', title: 'Pick a crown', icon: 'crown', color: '#B07A0C', soft: '#FFF4D6' },
  { id: 'lips', label: 'Lips', title: 'Pick a lip color', icon: 'lipstick', color: '#C2452D', soft: '#FFE6DE' },
  { id: 'extras', label: 'Extras', title: 'Add sparkly extras', hint: 'Tap as many as you like.', icon: 'wand', color: '#7E45C9', soft: '#F1E7FF', multi: true },
];

function Thumb({ box, children }) {
  return (
    <svg className="thumb-svg" viewBox={box} aria-hidden="true" focusable="false">
      {children}
    </svg>
  );
}

function ColorSwatch({ color }) {
  return (
    <svg className="thumb-svg" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <circle cx="32" cy="32" r="27" fill={color.base} />
      <path d="M27 17c0 2.5 2 4 5 4s5-1.5 5-4l2 9-2 2 8 17H19l8-17-2-2z" fill={color.light} />
    </svg>
  );
}

function LipSwatch({ color, skin }) {
  return (
    <svg className="thumb-svg" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <circle cx="32" cy="32" r="27" fill={skin} />
      <path d="M14 31 Q23 22 32 27.5 Q41 22 50 31 Q32 51 14 31 Z" fill={color} />
      <path d="M17 31.5 Q32 37 47 31.5" stroke="#000000" strokeOpacity="0.2" strokeWidth="1.6" fill="none" />
    </svg>
  );
}

function optionsFor(tab, look) {
  const plain = { ...look, extras: [] };
  switch (tab) {
    case 'princess':
      return PRINCESSES.map((p) => ({
        id: p.id,
        label: p.name,
        selected: look.princess === p.id,
        tint: p.tint,
        art: <Thumb box="40 0 120 120"><Princess look={{ ...p.look, princess: p.id }} /></Thumb>,
      }));
    case 'castle':
      return CASTLES.map((c) => ({
        id: c.id,
        label: c.label,
        selected: look.castle === c.id,
        art: <Thumb box="0 50 400 400"><Backdrop id={c.id} ambient={false} /></Thumb>,
      }));
    case 'dress':
      return DRESSES.map((d) => ({
        id: d.id,
        label: d.label,
        selected: look.dress === d.id,
        art: <Thumb box="10 112 180 180"><Princess look={{ ...plain, dress: d.id }} /></Thumb>,
      }));
    case 'color':
      return COLORS.map((c) => ({ id: c.id, label: c.label, selected: look.color === c.id, art: <ColorSwatch color={c} /> }));
    case 'hair':
      return HAIRSTYLES.map((h) => ({
        id: h.id,
        label: h.label,
        selected: look.hair === h.id,
        art: <Thumb box="28 8 144 144"><Princess look={{ ...plain, hair: h.id, crown: 'none' }} /></Thumb>,
      }));
    case 'crown':
      return CROWNS.map((c) => ({
        id: c.id,
        label: c.label,
        selected: look.crown === c.id,
        art: <Thumb box="52 2 96 96"><Princess look={{ ...plain, crown: c.id }} /></Thumb>,
      }));
    case 'lips': {
      const skin = byId(PRINCESSES, look.princess).skin;
      return LIPS.map((l) => ({ id: l.id, label: l.label, selected: look.lips === l.id, art: <LipSwatch color={l.color} skin={skin} /> }));
    }
    case 'extras':
      return EXTRAS.map((e) => ({
        id: e.id,
        label: e.label,
        selected: look.extras.includes(e.id),
        art: <Thumb box={e.box}><Princess look={{ ...look, extras: [e.id] }} /></Thumb>,
      }));
    default:
      return [];
  }
}

const Picker = forwardRef(function Picker({ look, tab, pickCount, onTab, onPick, onNext }, ref) {
  const index = CATEGORIES.findIndex((c) => c.id === tab);
  const category = CATEGORIES[index];
  const last = index === CATEGORIES.length - 1;
  const items = optionsFor(tab, look);

  return (
    <section className="panel" ref={ref} aria-label="Dress-up choices">
      <nav className="tabs" aria-label="What to change">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            type="button"
            className={`tab${c.id === tab ? ' is-on' : ''}`}
            style={{ '--tab-color': c.color, '--tab-soft': c.soft }}
            aria-pressed={c.id === tab}
            onClick={() => onTab(c.id)}
          >
            <Icon name={c.icon} size={30} />
            <span>{c.label}</span>
          </button>
        ))}
      </nav>

      <div className="panel-head">
        <h2 id="picker-title">{category.title}</h2>
        {category.hint && <p>{category.hint}</p>}
      </div>

      <div className={`options options-${tab}`} role="group" aria-labelledby="picker-title">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`option${item.selected ? ' is-on' : ''}`}
            aria-pressed={item.selected}
            onClick={() => onPick(tab, item.id)}
          >
            <span
              className="option-art"
              key={item.selected ? `on-${pickCount}` : 'off'}
              style={item.tint ? { backgroundColor: item.tint } : undefined}
            >
              {item.art}
            </span>
            <span className="option-label">{item.label}</span>
            {item.selected && (
              <span className="badge" aria-hidden="true">
                <Icon name="check" size={18} />
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="panel-foot">
        <ol className="steps" aria-label={`Step ${index + 1} of ${CATEGORIES.length}`}>
          {CATEGORIES.map((c, i) => (
            <li key={c.id} className={i === index ? 'is-on' : i < index ? 'is-done' : undefined} />
          ))}
        </ol>
        <button type="button" className="btn btn-ghost" onClick={onNext}>
          {last ? 'All done' : 'Next'}
          <Icon name="arrowRight" size={24} />
        </button>
      </div>
    </section>
  );
});

export default Picker;
