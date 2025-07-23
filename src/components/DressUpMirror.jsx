import React, { useState } from 'react';
import OptionPanel from './OptionPanel';
import AnimatedPrincess from './AnimatedPrincess';
import { playSound } from '../utils/sounds';

function DressUpMirror({ princess, castle, dressUpOptions, setDressUpOptions, onComplete }) {
  const [selectedCategory, setSelectedCategory] = useState('lipstick');

  // Debug logs
  console.log('DressUpMirror render - props:', { 
    princess: princess?.name, 
    castle: castle?.name, 
    dressUpOptions 
  });

  // Safety check for props
  if (!princess || !castle) {
    console.log('Missing props - princess:', princess, 'castle:', castle);
    return (
      <div className="text-center p-8 bg-red-100 rounded-lg">
        <div className="text-red-800 text-lg font-bold">⚠️ Missing Data</div>
        <div className="text-red-600 text-sm mt-2">
          Princess: {princess ? '✅ loaded' : '❌ missing'}<br/>
          Castle: {castle ? '✅ loaded' : '❌ missing'}
        </div>
        <div className="text-xs mt-4 text-gray-600">
          This debug message will help us fix the issue.
        </div>
      </div>
    );
  }

  console.log('DressUpMirror: All props available, rendering component');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleOptionSelect = (category, optionId) => {
    // Play different sounds for different categories
    if (category === 'lipstick') {
      playSound('makeup');
    } else {
      playSound('select');
    }
    
    setDressUpOptions(prev => ({
      ...prev,
      [category]: optionId
    }));
  };

  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold text-white mb-8 font-['Fredoka_One'] drop-shadow-md">
        Dress Up Your Princess! 💄
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Castle Background with Princess */}
        <div className="lg:col-span-2">
          <div className={`relative bg-gradient-to-br ${castle?.bgColor || 'from-purple-200 to-pink-300'} rounded-3xl p-8 min-h-[700px] border-4 border-white shadow-2xl overflow-hidden`}>
            
            {/* Castle Background - Large and Prominent */}
            <div className="absolute inset-0 flex items-center justify-center opacity-40">
              <div className="text-[20rem] leading-none">
                {castle?.emoji || '🏰'}
              </div>
            </div>

            {/* Castle Elements Scattered Around */}
            {castle?.elements && castle.elements.map((element, i) => (
              <div
                key={i}
                className="absolute text-4xl animate-sparkle"
                style={{
                  left: `${15 + i * 25}%`,
                  top: `${20 + (i % 2) * 40}%`,
                  animationDelay: `${i * 0.8}s`
                }}
              >
                {element}
              </div>
            ))}

            {/* Princess in the Castle Scene */}
            <div className="relative z-10 flex items-center justify-center min-h-[600px]">
              <div className="bg-white bg-opacity-20 rounded-3xl p-8 backdrop-blur-sm border-2 border-white border-opacity-30">
                <AnimatedPrincess 
                  princess={princess} 
                  dressUpOptions={dressUpOptions} 
                />
                
                {/* Princess name and location */}
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-white font-['Fredoka_One'] drop-shadow-md">
                    {princess?.name || 'Princess'}
                  </h3>
                  <p className="text-lg text-white font-bold opacity-90">
                    at {castle?.name || 'Magical Castle'}
                  </p>
                </div>
              </div>
            </div>

            {/* Additional magical effects around the scene */}
            <div className="absolute top-4 left-4 text-2xl animate-sparkle">✨</div>
            <div className="absolute top-4 right-4 text-2xl animate-sparkle" style={{ animationDelay: '0.5s' }}>✨</div>
            <div className="absolute bottom-4 left-4 text-2xl animate-sparkle" style={{ animationDelay: '1s' }}>✨</div>
            <div className="absolute bottom-4 right-4 text-2xl animate-sparkle" style={{ animationDelay: '1.5s' }}>✨</div>
          </div>
        </div>

        {/* Options Panel */}
        <div className="lg:col-span-1">
          <OptionPanel
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            onOptionSelect={handleOptionSelect}
            selectedOptions={dressUpOptions}
          />

          {/* Instructions */}
          <div className="mt-6 bg-white rounded-2xl p-4 shadow-lg">
            <p className="text-lg font-bold text-purple-600 text-center">
              ✨ Click to change your princess's look! ✨
            </p>
            <div className="flex justify-center space-x-2 mt-2">
              {['💄', '💇‍♀️', '📿'].map((emoji, i) => (
                <span 
                  key={i}
                  className="text-2xl animate-bounce"
                  style={{ animationDelay: `${i * 0.3}s` }}
                >
                  {emoji}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating magical elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-xl animate-sparkle"
            style={{
              left: `${5 + i * 8}%`,
              top: `${15 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.4}s`
            }}
          >
            {['✨', '⭐', '💫', '🌟'][i % 4]}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DressUpMirror;
