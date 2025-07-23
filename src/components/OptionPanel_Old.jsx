import React from 'react';
import { playSound } from '../utils/sounds';

// Hair silhouette components
const HairSilhouettes = {
  bun: () => (
    <div className="w-8 h-8 mx-auto relative">
      <div className="w-8 h-6 bg-gray-600 rounded-full" />
      <div className="w-4 h-4 bg-gray-600 rounded-full absolute top-1 left-1/2 transform -translate-x-1/2" />
    </div>
  ),
  braids: () => (
    <div className="w-8 h-8 mx-auto relative">
      <div className="w-8 h-4 bg-gray-600 rounded-t-full" />
      <div className="w-2 h-6 bg-gray-600 rounded-full absolute top-3 left-0 transform rotate-12" />
      <div className="w-2 h-6 bg-gray-600 rounded-full absolute top-3 right-0 transform -rotate-12" />
    </div>
  ),
  curly: () => (
    <div className="w-8 h-8 mx-auto relative">
      <div className="w-8 h-6 bg-gray-600 rounded-t-full" />
      <div className="w-3 h-3 bg-gray-600 rounded-full absolute top-1 -left-1" />
      <div className="w-3 h-3 bg-gray-600 rounded-full absolute top-1 -right-1" />
      <div className="w-2 h-2 bg-gray-600 rounded-full absolute top-4 -left-1" />
      <div className="w-2 h-2 bg-gray-600 rounded-full absolute top-4 -right-1" />
    </div>
  )
};

// Necklace shape components
const NecklaceShapes = {
  heart: ({ color }) => (
    <div className="w-8 h-8 mx-auto relative flex items-center justify-center">
      <div 
        className="w-4 h-4 transform rotate-45 relative"
        style={{ backgroundColor: color }}
      >
        <div 
          className="absolute -top-2 left-0 w-4 h-4 rounded-full"
          style={{ backgroundColor: color }}
        />
        <div 
          className="absolute -top-2 -left-2 w-4 h-4 rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  ),
  star: ({ color }) => (
    <div className="w-8 h-8 mx-auto flex items-center justify-center">
      <div 
        className="w-6 h-6"
        style={{ 
          backgroundColor: color,
          clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
        }}
      />
    </div>
  ),
  pearl: ({ color }) => (
    <div className="w-8 h-8 mx-auto flex items-center justify-center">
      <div className="flex space-x-1">
        {[...Array(3)].map((_, i) => (
          <div 
            key={i}
            className="w-2 h-2 rounded-full border border-gray-300"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  )
};

const dressUpCategories = {
  lipstick: {
    title: 'Lipstick 💋',
    options: [
      { id: 'red', name: 'Ruby Red', color: '#DC2626', bgColor: 'bg-red-500' },
      { id: 'pink', name: 'Pretty Pink', color: '#EC4899', bgColor: 'bg-pink-500' },
      { id: 'purple', name: 'Purple Pop', color: '#9333EA', bgColor: 'bg-purple-500' }
    ]
  },
  hairstyle: {
    title: 'Hairstyle 💇‍♀️',
    options: [
      { id: 'bun', name: 'Royal Bun' },
      { id: 'braids', name: 'Pretty Braids' },
      { id: 'curly', name: 'Curly Hair' }
    ]
  },
  necklace: {
    title: 'Necklace 📿',
    options: [
      { id: 'heart', name: 'Heart Pendant', color: '#EC4899', bgColor: 'bg-pink-400' },
      { id: 'star', name: 'Star Choker', color: '#EAB308', bgColor: 'bg-yellow-400' },
      { id: 'pearl', name: 'Pearl Strand', color: '#F8FAFC', bgColor: 'bg-blue-400' }
    ]
  }
};

function OptionPanel({ dressUpOptions, onOptionChange }) {
  const handleOptionClick = (category, optionId) => {
    playSound('makeup');
    onOptionChange(category, optionId);
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-2xl border-4 border-pink-200">
      <h3 className="text-3xl font-bold text-pink-600 mb-6 text-center font-['Fredoka_One']">
        ✨ Makeover Time! ✨
      </h3>

      {Object.entries(dressUpCategories).map(([category, data]) => (
        <div key={category} className="mb-8">
          <h4 className="text-2xl font-bold text-purple-600 mb-4 font-['Fredoka_One']">
            {data.title}
          </h4>
          
          <div className="grid grid-cols-3 gap-3">
            {data.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionClick(category, option.id)}
                className={`option-item p-4 rounded-2xl border-4 transition-all duration-200 ${
                  dressUpOptions[category] === option.id
                    ? 'border-pink-500 bg-pink-100 scale-105 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-pink-300'
                }`}
              >
                {/* Lipstick - show realistic lips with color */}
                {category === 'lipstick' && (
                  <div className="mb-3">
                    {/* Upper lip */}
                    <div 
                      className="w-6 h-1.5 rounded-t-full mx-auto border border-opacity-30 shadow-sm"
                      style={{ 
                        backgroundColor: option.color,
                        borderColor: option.color
                      }}
                    />
                    {/* Lower lip */}
                    <div 
                      className="w-6 h-2 rounded-b-full mx-auto border border-opacity-30 shadow-sm -mt-0.5"
                      style={{ 
                        backgroundColor: option.color,
                        borderColor: option.color
                      }}
                    />
                    {/* Gloss effect */}
                    <div className="w-4 h-0.5 bg-white opacity-40 rounded-full mx-auto -mt-2" />
                  </div>
                )}

                {/* Hairstyle - show hair silhouette */}
                {category === 'hairstyle' && (
                  <div className="mb-3">
                    {HairSilhouettes[option.id]()}
                  </div>
                )}

                {/* Necklace - show necklace shape */}
                {category === 'necklace' && (
                  <div className="mb-3">
                    {NecklaceShapes[option.id]({ color: option.color })}
                  </div>
                )}

                {/* Option name */}
                <p className="text-sm font-bold text-gray-700">
                  {option.name}
                </p>

                {/* Selection indicator */}
                {dressUpOptions[category] === option.id && (
                  <div className="mt-2">
                    <span className="text-lg">✅</span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      ))}

      {/* Fun encouragement */}
      <div className="text-center mt-6 bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-4">
        <p className="text-lg font-bold text-purple-600">
          🌟 Make your princess beautiful! 🌟
        </p>
        <div className="flex justify-center space-x-2 mt-2">
          {['💄', '💅', '✨'].map((emoji, i) => (
            <span 
              key={i}
              className="text-2xl animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OptionPanel;
