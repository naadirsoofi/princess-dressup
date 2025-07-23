import React, { useState } from 'react';
import PrincessSelector from './components/PrincessSelector';
import CastleSelector from './components/CastleSelector';
import DressUpMirror from './components/DressUpMirror';
import LayeredPrincess from './components/LayeredPrincess';
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
    if (currentStep === 'castle') {
      setCurrentStep('princess');
      setSelectedCastle(null);
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
            <div className="w-full max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-6 text-white">
                👗 Dress Up {selectedPrincess?.name || 'Princess'}! 👗
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Princess Display */}
                <div className="bg-white bg-opacity-20 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-white text-center mb-4">
                    {selectedPrincess?.name || 'Princess'} at {selectedCastle?.name || 'Castle'}
                  </h3>
                  
                  {/* Princess Avatar */}
                  <div className="text-center mb-6">
                    {/* Simple Layered Princess Display */}
                    <div className="relative inline-block">
                      <LayeredPrincess
                        dressUpOptions={dressUpOptions}
                        selectedPrincess={selectedPrincess}
                        width={300}
                        height={400}
                      />
                      
                      {/* Quick Style Indicators */}
                      <div className="absolute top-2 right-2 space-y-1">
                        <div className="bg-white bg-opacity-90 px-2 py-1 rounded-full text-xs font-bold text-purple-600 animate-pulse">
                          💄 {dressUpOptions.lipstick}
                        </div>
                        <div className="bg-white bg-opacity-90 px-2 py-1 rounded-full text-xs font-bold text-blue-600 animate-bounce">
                          💇‍♀️ {dressUpOptions.hairstyle}
                        </div>
                        <div className="bg-white bg-opacity-90 px-2 py-1 rounded-full text-xs font-bold text-pink-600 animate-sparkle">
                          📿 {dressUpOptions.necklace}
                        </div>
                      </div>
                      
                      {/* Princess Name Badge */}
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                          ✨ {selectedPrincess?.name || 'Princess'} ✨
                        </div>
                      </div>
                    </div>
                    
                    {/* Castle Display */}
                    <div className="mt-8 text-center">
                      <div className="text-3xl mb-2 animate-bounce-gentle">
                        {selectedCastle?.emoji || '🏰'}
                      </div>
                      <div className="text-sm text-white bg-blue-500 bg-opacity-60 px-3 py-1 rounded-full inline-block">
                        At {selectedCastle?.name || 'Castle'}
                      </div>
                    </div>
                  </div>

                  {/* Current Look Display */}
                  <div className="bg-pink-100 bg-opacity-40 p-4 rounded-lg">
                    <h4 className="text-lg font-bold text-white mb-3 text-center">Current Look:</h4>
                    <div className="space-y-2 text-center">
                      <div className="text-white">
                        💄 Lipstick: <span className="font-bold capitalize">{dressUpOptions.lipstick}</span>
                      </div>
                      <div className="text-white">
                        💇‍♀️ Hair: <span className="font-bold capitalize">{dressUpOptions.hairstyle}</span>
                      </div>
                      <div className="text-white">
                        📿 Necklace: <span className="font-bold capitalize">{dressUpOptions.necklace}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dress Up Options */}
                <div className="bg-white bg-opacity-20 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-white text-center mb-4">
                    ✨ Dress Up Options ✨
                  </h3>

                  {/* Lipstick Options */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-white mb-3">💄 Lipstick Colors:</h4>
                    <div className="grid grid-cols-3 gap-3">
                      {['pink', 'red', 'coral', 'berry', 'nude', 'glossy'].map((color) => (
                        <button
                          key={color}
                          onClick={() => {
                            playSound('select');
                            setDressUpOptions(prev => ({ ...prev, lipstick: color }));
                          }}
                          className={`fairy-button p-3 rounded-lg text-sm font-bold transition-all hover:scale-105 ${
                            dressUpOptions.lipstick === color
                              ? 'bg-pink-500 text-white ring-4 ring-yellow-300'
                              : 'bg-white bg-opacity-70 text-pink-600 hover:bg-pink-100'
                          }`}
                        >
                          💋 {color}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Hairstyle Options */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-white mb-3">💇‍♀️ Hairstyles:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {['curly', 'straight', 'braided', 'updo', 'waves', 'ponytail'].map((style) => (
                        <button
                          key={style}
                          onClick={() => {
                            playSound('select');
                            setDressUpOptions(prev => ({ ...prev, hairstyle: style }));
                          }}
                          className={`fairy-button p-3 rounded-lg text-sm font-bold transition-all hover:scale-105 ${
                            dressUpOptions.hairstyle === style
                              ? 'bg-purple-500 text-white ring-4 ring-yellow-300'
                              : 'bg-white bg-opacity-70 text-purple-600 hover:bg-purple-100'
                          }`}
                        >
                          ✨ {style}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Necklace Options */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-white mb-3">📿 Accessories:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {['heart', 'star', 'diamond', 'pearl', 'crystal', 'crown'].map((accessory) => (
                        <button
                          key={accessory}
                          onClick={() => {
                            playSound('select');
                            setDressUpOptions(prev => ({ ...prev, necklace: accessory }));
                          }}
                          className={`fairy-button p-3 rounded-lg text-sm font-bold transition-all hover:scale-105 ${
                            dressUpOptions.necklace === accessory
                              ? 'bg-blue-500 text-white ring-4 ring-yellow-300'
                              : 'bg-white bg-opacity-70 text-blue-600 hover:bg-blue-100'
                          }`}
                        >
                          💎 {accessory}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="text-center space-y-3">
                    <button
                      onClick={() => {
                        playSound('magic');
                        // Random selection for fun
                        const lipsticks = ['pink', 'red', 'coral', 'berry', 'nude', 'glossy'];
                        const hairstyles = ['curly', 'straight', 'braided', 'updo', 'waves', 'ponytail'];
                        const necklaces = ['heart', 'star', 'diamond', 'pearl', 'crystal', 'crown'];
                        
                        setDressUpOptions({
                          lipstick: lipsticks[Math.floor(Math.random() * lipsticks.length)],
                          hairstyle: hairstyles[Math.floor(Math.random() * hairstyles.length)],
                          necklace: necklaces[Math.floor(Math.random() * necklaces.length)]
                        });
                      }}
                      className="fairy-button bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg hover:scale-105 transition-transform animate-sparkle"
                    >
                      🎲 Surprise Me!
                    </button>
                    
                    <div className="text-center">
                      <button
                        onClick={() => {
                          playSound('complete');
                          
                          // Create a temporary celebration overlay with photorealistic princess
                          const celebration = document.createElement('div');
                          celebration.innerHTML = `
                            <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(255, 192, 203, 0.95); z-index: 1000; display: flex; flex-direction: column; justify-content: center; align-items: center; font-family: Arial, sans-serif;">
                              <div style="background: white; padding: 40px; border-radius: 20px; text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.3); max-width: 600px; position: relative;">
                                <div style="font-size: 60px; margin-bottom: 20px;">🎉👸✨</div>
                                <h2 style="color: #e91e63; font-size: 28px; margin-bottom: 20px; font-weight: bold;">${selectedPrincess?.name || 'Princess'} looks absolutely beautiful!</h2>
                                
                                <!-- Princess Canvas Placeholder -->
                                <div id="celebration-princess" style="width: 250px; height: 300px; margin: 20px auto; background: linear-gradient(145deg, #ffeef5, #f8e4f0); border-radius: 15px; display: flex; align-items: center; justify-content: center; box-shadow: inset 0 4px 8px rgba(0,0,0,0.1);">
                                  <div style="text-align: center;">
                                    <div style="font-size: 80px; margin-bottom: 10px;">${selectedPrincess?.emoji || '👸'}</div>
                                    <div style="font-size: 14px; color: #666; font-weight: bold;">Photorealistic View</div>
                                    <div style="font-size: 12px; color: #999;">Loading enhanced graphics...</div>
                                  </div>
                                </div>
                                
                                <div style="color: #666; margin: 20px 0; background: #f8f9fa; padding: 15px; border-radius: 10px;">
                                  <div style="margin: 8px 0; font-weight: bold;">💄 <span style="color: #e91e63;">${dressUpOptions.lipstick}</span> lipstick</div>
                                  <div style="margin: 8px 0; font-weight: bold;">💇‍♀️ <span style="color: #9c27b0;">${dressUpOptions.hairstyle}</span> hair</div>
                                  <div style="margin: 8px 0; font-weight: bold;">📿 <span style="color: #2196f3;">${dressUpOptions.necklace}</span> necklace</div>
                                </div>
                                <div style="color: #e91e63; font-weight: bold; margin: 20px 0; font-size: 18px;">Perfect for ${selectedCastle?.name || 'the castle'}! ✨</div>
                                
                                <div style="display: flex; gap: 10px; justify-content: center; margin-top: 25px;">
                                  <button onclick="this.parentElement.parentElement.parentElement.remove()" style="background: linear-gradient(45deg, #e91e63, #9c27b0); color: white; border: none; padding: 15px 25px; border-radius: 25px; font-size: 16px; font-weight: bold; cursor: pointer;">
                                    🎊 Amazing! Close 🎊
                                  </button>
                                  <button onclick="window.location.reload()" style="background: linear-gradient(45deg, #4caf50, #2196f3); color: white; border: none; padding: 15px 25px; border-radius: 25px; font-size: 16px; font-weight: bold; cursor: pointer;">
                                    � Play Again
                                  </button>
                                </div>
                              </div>
                            </div>
                          `;
                          document.body.appendChild(celebration);
                          
                          // Try to render the photorealistic princess in the celebration
                          setTimeout(() => {
                            const celebrationContainer = document.getElementById('celebration-princess');
                            if (celebrationContainer) {
                              // Create a mini canvas for the celebration
                              const canvas = document.createElement('canvas');
                              canvas.width = 200;
                              canvas.height = 250;
                              canvas.style.borderRadius = '10px';
                              canvas.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                              celebrationContainer.innerHTML = '';
                              celebrationContainer.appendChild(canvas);
                              
                              // Use the photorealistic rendering (simplified for celebration)
                              const ctx = canvas.getContext('2d');
                              ctx.fillStyle = 'linear-gradient(145deg, #ffeef5, #f8e4f0)';
                              ctx.fillRect(0, 0, 200, 250);
                              
                              // Add princess silhouette/placeholder
                              ctx.fillStyle = '#e91e63';
                              ctx.font = 'bold 60px Arial';
                              ctx.textAlign = 'center';
                              ctx.fillText('👸', 100, 120);
                              
                              ctx.fillStyle = '#666';
                              ctx.font = 'bold 12px Arial';
                              ctx.fillText('Beautiful Princess!', 100, 200);
                            }
                          }, 100);
                        }}
                        className="fairy-button bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg hover:scale-105 transition-transform"
                      >
                        ✨ I'm Done! Show My Princess! ✨
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </SnowfallBackground>
  );
}

export default App;
