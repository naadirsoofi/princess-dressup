import React, { useState } from 'react';
import PrincessSelector from './components/PrincessSelector';
impor        {currentStep === 'dressup' && (
          <div className="w-full max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-6 text-white">
              👗 Dress Up Time! 👗
            </h2>
            
            {/* Debug information */}
            <div className="text-center mb-4 text-white text-sm bg-black bg-opacity-30 p-2 rounded">
              Debug: Princess={selectedPrincess?.name || 'None'}, Castle={selectedCastle?.name || 'None'}
            </div>

            {/* Simplified test content */}
            <div className="bg-white bg-opacity-20 p-8 rounded-lg text-center">
              <h3 className="text-2xl text-white mb-4">🎉 Success! 🎉</h3>
              <p className="text-white mb-4">
                Welcome to {selectedPrincess?.name || 'Princess'}'s dress-up session at {selectedCastle?.name || 'the castle'}!
              </p>
              <div className="text-6xl mb-4">
                {selectedPrincess?.emoji || '👸'} {selectedCastle?.emoji || '🏰'}
              </div>
              <p className="text-white text-sm">
                If you can see this, the navigation is working! We can now add back the dress-up features.
              </p>
              <button 
                onClick={() => console.log('Test button clicked!', { selectedPrincess, selectedCastle })}
                className="mt-4 bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors"
              >
                🎨 Test Button
              </button>
            </div>
          </div>
        )}om './components/CastleSelector';
import DressUpMirror from './components/DressUpMirror';
import PhotoRealisticCanvas from './components/PhotoRealisticCanvas';
import SnowfallBackground from './components/SnowfallBackground';
import { playSound } from './utils/sounds';

function App() {
  const [currentStep, setCurrentStep] = useState('princess'); // 'princess', 'castle', 'dressup'
  const [selectedPrincess, setSelectedPrincess] = useState(null);
  const [selectedCastle, setSelectedCastle] = useState(null);
  const [renderMode, setRenderMode] = useState('css'); // Start with CSS mode to avoid canvas issues
  const [dressUpOptions, setDressUpOptions] = useState({
    lipstick: 'pink',
    hairstyle: 'curly',
    necklace: 'heart'
  });

  const handlePrincessSelect = (princess) => {
    playSound('select');
    console.log('Selected princess:', princess); // Debug log
    setSelectedPrincess(princess);
    setCurrentStep('castle');
  };

  const handleCastleSelect = (castle) => {
    playSound('select');
    console.log('Selected castle:', castle); // Debug log
    setSelectedCastle(castle);
    setCurrentStep('dressup');
  };

  const handleRestart = () => {
    playSound('restart');
    setCurrentStep('princess');
    setSelectedPrincess(null);
    setSelectedCastle(null);
    setDressUpOptions({
      lipstick: 'pink',
      hairstyle: 'curly',
      necklace: 'heart'
    });
  };

  const handleBack = () => {
    playSound('back');
    if (currentStep === 'castle') {
      setCurrentStep('princess');
      setSelectedPrincess(null);
    } else if (currentStep === 'dressup') {
      setCurrentStep('castle');
      setSelectedCastle(null);
    }
  };

  return (
    <SnowfallBackground>
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {/* Progress Indicators */}
          <div className="text-center mb-8">
            <h1 className="text-6xl font-bold text-white mb-4 font-['Fredoka_One'] drop-shadow-lg animate-bounce-gentle">
              👑 Princess Dress-Up 👑
            </h1>
            <div className="flex justify-center space-x-4">
              {['princess', 'castle', 'dressup'].map((step, index) => (
                <div
                  key={step}
                  className={`w-4 h-4 rounded-full ${
                    currentStep === step
                      ? 'bg-yellow-300 animate-pulse'
                      : index < ['princess', 'castle', 'dressup'].indexOf(currentStep)
                      ? 'bg-green-400'
                      : 'bg-white opacity-50'
                  }`}
                />
              ))}
            </div>
          </div>

        {/* Back Button */}
        {(currentStep === 'castle' || currentStep === 'dressup') && (
          <button
            onClick={handleBack}
            className="mb-6 fairy-button bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-xl font-bold shadow-lg hover:scale-105 transition-transform"
          >
            ← Back
          </button>
        )}

        {/* Restart Button - Always Available in Dress-Up Mode */}
        {currentStep === 'dressup' && (
          <button
            onClick={handleRestart}
            className="absolute top-4 right-4 fairy-button bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-lg font-bold shadow-lg hover:scale-105 transition-transform"
          >
            🔄 Start Over
          </button>
        )}

        {/* Game Steps */}
        {currentStep === 'princess' && (
          <PrincessSelector onSelect={handlePrincessSelect} />
        )}

        {currentStep === 'castle' && (
          <CastleSelector onSelect={handleCastleSelect} />
        )}

        {currentStep === 'dressup' && (
          <div className="w-full max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-6 text-white">
              � Dress Up Time! 👗
            </h2>
            
            {/* Debug information */}
            <div className="text-center mb-4 text-white text-sm bg-black bg-opacity-30 p-2 rounded">
              Debug: Princess={selectedPrincess?.name || 'None'}, Castle={selectedCastle?.name || 'None'}
            </div>

            <DressUpMirror
              princess={selectedPrincess}
              castle={selectedCastle}
              dressUpOptions={dressUpOptions}
              setDressUpOptions={setDressUpOptions}
            />
          </div>
        )}
        </div>
      </div>
    </SnowfallBackground>
  );
}

export default App;
