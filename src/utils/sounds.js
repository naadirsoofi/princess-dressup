// Tiny synthesized chimes. Off until the player turns sound on.

let ctx = null;
let enabled = false;

export function setSoundEnabled(on) {
  enabled = on;
}

const NOTES = [659.25, 783.99, 880, 1046.5, 1174.66];

const SEQUENCES = {
  magic: [[659.25, 0, 0.16], [783.99, 0.08, 0.16], [987.77, 0.16, 0.16], [1318.51, 0.24, 0.32]],
  tada: [[523.25, 0, 0.2], [659.25, 0.14, 0.2], [783.99, 0.28, 0.2], [1046.5, 0.42, 0.55]],
  undo: [[659.25, 0, 0.14], [523.25, 0.09, 0.2]],
};

function tone(freq, start, duration) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'triangle';
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.linearRampToValueAtTime(0.12, start + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(start);
  osc.stop(start + duration + 0.05);
}

export function playSound(kind) {
  if (!enabled) return;
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;
  if (!ctx) ctx = new AudioCtx();
  if (ctx.state === 'suspended') ctx.resume();
  const now = ctx.currentTime + 0.01;
  let notes = SEQUENCES[kind];
  if (!notes) {
    const i = Math.floor(Math.random() * (NOTES.length - 1));
    notes = [[NOTES[i], 0, 0.18], [NOTES[i + 1], 0.07, 0.24]];
  }
  notes.forEach(([freq, offset, duration]) => tone(freq, now + offset, duration));
}
