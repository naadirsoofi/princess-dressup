import { useEffect, useRef, useState } from 'react';
import Icon, { LogoMark } from './components/Icons';
import Picker, { CATEGORIES } from './components/Picker';
import Scene from './components/Scene';
import ShowOff from './components/ShowOff';
import { byId, describeLook, DEFAULT_LOOK, EXTRAS, randomLook, sanitizeLook, signatureLook } from './data/options';
import { playSound, setSoundEnabled } from './utils/sounds';

const LOOK_KEY = 'princess-dressup.look';
const SOUND_KEY = 'princess-dressup.sound';
const ADVANCE_MS = 800;
const HISTORY_LIMIT = 40;

function readStore(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStore(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Storage can be blocked (private mode); the game still works without it.
  }
}

function loadLook() {
  const raw = readStore(LOOK_KEY);
  if (!raw) return DEFAULT_LOOK;
  try {
    return sanitizeLook(JSON.parse(raw));
  } catch {
    return DEFAULT_LOOK;
  }
}

const sameLook = (a, b) => JSON.stringify(a) === JSON.stringify(b);

const FLAKES = Array.from({ length: 14 }, (_, i) => ({
  left: (i * 29 + 3) % 100,
  size: 6 + (i % 3) * 3,
  duration: 14 + (i % 5) * 3,
  delay: -(i * 2.3),
}));

export default function App() {
  const [look, setLook] = useState(loadLook);
  const [history, setHistory] = useState([]);
  const [tab, setTab] = useState('princess');
  const [showOff, setShowOff] = useState(false);
  const [sound, setSound] = useState(() => readStore(SOUND_KEY) === 'on');
  const [celebrate, setCelebrate] = useState(0);
  const [pickCount, setPickCount] = useState(0);
  const [nudge, setNudge] = useState(false);
  const [message, setMessage] = useState('');
  const timer = useRef(null);
  const focusOption = useRef(false);
  const panelRef = useRef(null);
  const showOffRef = useRef(null);

  useEffect(() => writeStore(LOOK_KEY, JSON.stringify(look)), [look]);

  useEffect(() => {
    setSoundEnabled(sound);
    writeStore(SOUND_KEY, sound ? 'on' : 'off');
  }, [sound]);

  useEffect(() => () => clearTimeout(timer.current), []);

  useEffect(() => {
    if (!focusOption.current) return;
    focusOption.current = false;
    const panel = panelRef.current;
    const target = panel?.querySelector('.options [aria-pressed="true"]') || panel?.querySelector('.options button');
    target?.focus({ preventScroll: true });
  }, [tab]);

  const commit = (next) => {
    if (sameLook(next, look)) return;
    setHistory((h) => [...h.slice(1 - HISTORY_LIMIT), look]);
    setLook(next);
  };

  const goToTab = (id) => {
    clearTimeout(timer.current);
    setTab(id);
  };

  const openShowOff = () => {
    clearTimeout(timer.current);
    setNudge(false);
    playSound('tada');
    setShowOff(true);
  };

  const closeShowOff = () => {
    setShowOff(false);
    showOffRef.current?.focus();
  };

  const pick = (category, id) => {
    clearTimeout(timer.current);
    let next;
    if (category === 'princess') {
      next = signatureLook(id, look.castle);
    } else if (category === 'extras') {
      const on = look.extras.includes(id);
      next = { ...look, extras: on ? look.extras.filter((e) => e !== id) : [...look.extras, id] };
      setMessage(`${byId(EXTRAS, id).label} ${on ? 'off' : 'on'}`);
    } else {
      next = { ...look, [category]: id };
    }
    if (category !== 'extras') setMessage(describeLook(next));
    commit(next);
    setCelebrate((n) => n + 1);
    setPickCount((n) => n + 1);
    playSound('pick');

    const index = CATEGORIES.findIndex((c) => c.id === category);
    if (CATEGORIES[index].multi) {
      setNudge(true);
      return;
    }
    timer.current = setTimeout(() => {
      focusOption.current = Boolean(panelRef.current?.contains(document.activeElement));
      setTab(CATEGORIES[index + 1].id);
    }, ADVANCE_MS);
  };

  const next = () => {
    const index = CATEGORIES.findIndex((c) => c.id === tab);
    if (index === CATEGORIES.length - 1) openShowOff();
    else goToTab(CATEGORIES[index + 1].id);
  };

  const undo = () => {
    if (!history.length) return;
    clearTimeout(timer.current);
    const previous = history[history.length - 1];
    setHistory((h) => h.slice(0, -1));
    setLook(previous);
    setCelebrate((n) => n + 1);
    setMessage(`Undo. ${describeLook(previous)}`);
    playSound('undo');
  };

  const startOver = () => {
    commit(DEFAULT_LOOK);
    goToTab('princess');
    setNudge(false);
    setCelebrate((n) => n + 1);
    setMessage(`Starting over. ${describeLook(DEFAULT_LOOK)}`);
    playSound('undo');
  };

  const surprise = () => {
    clearTimeout(timer.current);
    const next = randomLook(look.princess);
    commit(next);
    setCelebrate((n) => n + 1);
    setPickCount((n) => n + 1);
    setNudge(true);
    setMessage(`Surprise! ${describeLook(next)}`);
    playSound('magic');
  };

  return (
    <div className="page">
      <div className="flakes" aria-hidden="true">
        {FLAKES.map((flake) => (
          <i
            key={flake.left}
            style={{
              left: `${flake.left}%`,
              width: flake.size,
              height: flake.size,
              animationDuration: `${flake.duration}s`,
              animationDelay: `${flake.delay}s`,
            }}
          />
        ))}
      </div>

      <header className="topbar">
        <div className="brand">
          <LogoMark />
          <h1>Princess Dress-Up</h1>
        </div>
        <div className="tools">
          <button type="button" className="tool" onClick={undo} disabled={!history.length} aria-label="Undo" title="Undo">
            <Icon name="undo" />
            <span>Undo</span>
          </button>
          <button type="button" className="tool" onClick={startOver} aria-label="Start over" title="Start over">
            <Icon name="restart" />
            <span>Start over</span>
          </button>
          <button
            type="button"
            className="tool"
            onClick={() => setSound((on) => !on)}
            aria-pressed={sound}
            aria-label="Sound"
            title={sound ? 'Sound is on' : 'Sound is off'}
          >
            <Icon name={sound ? 'soundOn' : 'soundOff'} />
            <span>{sound ? 'Sound on' : 'Sound off'}</span>
          </button>
        </div>
      </header>

      <main className="layout">
        <div className="stage-col">
          <div className="stage">
            <Scene look={look} label={describeLook(look)} celebrateKey={celebrate} />
          </div>
          <div className="stage-actions">
            <button type="button" className="btn btn-soft" onClick={surprise}>
              <Icon name="dice" />
              Surprise me
            </button>
            <button
              ref={showOffRef}
              type="button"
              className={`btn btn-primary${nudge ? ' nudge' : ''}`}
              onClick={openShowOff}
            >
              <Icon name="camera" />
              Show off
            </button>
          </div>
        </div>

        <Picker ref={panelRef} look={look} tab={tab} pickCount={pickCount} onTab={goToTab} onPick={pick} onNext={next} />
      </main>

      <p className="sr-only" aria-live="polite">{message}</p>
      {showOff && <ShowOff look={look} onClose={closeShowOff} />}
    </div>
  );
}
