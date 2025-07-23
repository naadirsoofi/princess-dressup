// Simple sound effects using Web Audio API
// These are basic synthesized sounds since we don't have audio files

const audioContext = typeof window !== 'undefined' ? new (window.AudioContext || window.webkitAudioContext)() : null;

const createTone = (frequency, duration, type = 'sine') => {
  if (!audioContext) return;
  
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  oscillator.frequency.value = frequency;
  oscillator.type = type;
  
  gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
  
  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + duration);
};

const createSparkleSound = () => {
  if (!audioContext) return;
  
  // Create a magical sparkle sound with multiple frequencies
  const frequencies = [523.25, 659.25, 783.99]; // C, E, G
  frequencies.forEach((freq, index) => {
    setTimeout(() => {
      createTone(freq, 0.2, 'triangle');
    }, index * 50);
  });
};

const createCompleteSound = () => {
  if (!audioContext) return;
  
  // Create a celebratory melody
  const melody = [
    { freq: 523.25, duration: 0.2 }, // C
    { freq: 659.25, duration: 0.2 }, // E
    { freq: 783.99, duration: 0.2 }, // G
    { freq: 1046.50, duration: 0.4 } // C (higher)
  ];
  
  melody.forEach((note, index) => {
    setTimeout(() => {
      createTone(note.freq, note.duration, 'triangle');
    }, index * 200);
  });
};

export const playSound = (soundType) => {
  // Only play sounds if audio is enabled and we're in a browser
  if (!audioContext) return;
  
  // Resume audio context if it's suspended (browser requirement)
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }
  
  try {
    switch (soundType) {
      case 'select':
        createTone(659.25, 0.2, 'triangle'); // E note
        break;
      case 'makeup':
        createSparkleSound();
        break;
      case 'complete':
        createCompleteSound();
        break;
      case 'back':
        createTone(523.25, 0.3, 'sine'); // C note
        break;
      case 'restart':
        createTone(392.00, 0.4, 'triangle'); // G note
        break;
      default:
        createTone(440, 0.2); // A note
    }
  } catch (error) {
    // Silently fail if audio doesn't work
    console.log('Audio not available');
  }
};
