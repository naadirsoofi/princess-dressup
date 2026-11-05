import { useEffect, useRef, useState } from 'react';
import Icon from './Icons';
import Scene from './Scene';
import { byId, describeLook, PRINCESSES } from '../data/options';
import { savePicture } from '../utils/savePicture';

const CONFETTI_COLORS = ['#F27BAA', '#F2B33D', '#5DB6EE', '#52CFA5', '#A986E8', '#FF8266'];
const CONFETTI = Array.from({ length: 26 }, (_, i) => ({
  left: (i * 37 + 5) % 100,
  delay: ((i * 7) % 10) / 10,
  duration: 2.2 + (i % 4) * 0.4,
  color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
  round: i % 3 === 0,
}));

const MESSAGES = {
  idle: '',
  saving: 'Making your picture...',
  saved: 'Your picture is in your downloads.',
  error: 'Sorry, the picture could not be saved. Please try again.',
};

export default function ShowOff({ look, onClose }) {
  const dialogRef = useRef(null);
  const sceneRef = useRef(null);
  const saveRef = useRef(null);
  const [status, setStatus] = useState('idle');
  const princess = byId(PRINCESSES, look.princess);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog.open) dialog.showModal();
    saveRef.current?.focus();
    return () => {
      if (dialog.open) dialog.close();
    };
  }, []);

  // Close the modal first so focus can return to the page before unmounting.
  const close = () => {
    dialogRef.current?.close();
    onClose();
  };

  const save = async () => {
    setStatus('saving');
    try {
      await savePicture(sceneRef.current, {
        fileName: `princess-${princess.id}.png`,
        caption: `Princess ${princess.name}`,
      });
      setStatus('saved');
    } catch {
      setStatus('error');
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className="showoff"
      aria-labelledby="showoff-title"
      onCancel={(event) => {
        event.preventDefault();
        close();
      }}
      onClick={(event) => {
        if (event.target === dialogRef.current) close();
      }}
    >
      <div className="showoff-card">
        <div className="confetti" aria-hidden="true">
          {CONFETTI.map((piece) => (
            <i
              key={piece.left}
              className={piece.round ? 'round' : undefined}
              style={{
                left: `${piece.left}%`,
                backgroundColor: piece.color,
                animationDelay: `${piece.delay}s`,
                animationDuration: `${piece.duration}s`,
              }}
            />
          ))}
        </div>
        <button type="button" className="close" aria-label="Close" onClick={close}>
          <Icon name="close" size={24} />
        </button>
        <h2 id="showoff-title">Ta-da! Princess {princess.name} looks wonderful!</h2>
        <div className="frame">
          <Scene ref={sceneRef} look={look} label={describeLook(look)} />
        </div>
        <div className="showoff-actions">
          <button ref={saveRef} type="button" className="btn btn-primary" onClick={save} disabled={status === 'saving'}>
            <Icon name="download" />
            Save picture
          </button>
          <button type="button" className="btn btn-soft" onClick={close}>
            <Icon name="sparkle" />
            Keep playing
          </button>
        </div>
        <p className={`status status-${status}`} role="status">{MESSAGES[status]}</p>
      </div>
    </dialog>
  );
}
