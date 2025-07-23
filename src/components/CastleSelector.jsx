import React from 'react';

const castles = [
  {
    id: 'fairytale',
    name: 'Fairytale Castle',
    emoji: '🏰',
    description: 'A magical kingdom in the clouds',
    bgColor: 'from-pink-200 to-purple-300',
    elements: ['☁️', '🌈', '✨']
  },
  {
    id: 'forest',
    name: 'Forest Castle',
    emoji: '🌲🏰',
    description: 'Hidden deep in the enchanted forest',
    bgColor: 'from-green-200 to-emerald-300',
    elements: ['🌳', '🦋', '🌸']
  },
  {
    id: 'snowy',
    name: 'Ice Castle',
    emoji: '❄️🏰',
    description: 'A sparkling palace of ice and snow',
    bgColor: 'from-blue-200 to-cyan-300',
    elements: ['❄️', '⭐', '💎']
  }
];

function CastleSelector({ onSelect }) {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold text-white mb-8 font-['Fredoka_One'] drop-shadow-md">
        Choose Your Castle! 🏰
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {castles.map((castle) => (
          <div
            key={castle.id}
            onClick={() => onSelect(castle)}
            className={`castle-card cursor-pointer bg-gradient-to-br ${castle.bgColor} rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-4 border-white`}
          >
            {/* Castle Image */}
            <div className="text-8xl mb-4 animate-bounce-gentle">
              {castle.emoji}
            </div>
            
            {/* Castle Name */}
            <h3 className="text-3xl font-bold text-gray-800 mb-4 font-['Fredoka_One']">
              {castle.name}
            </h3>
            
            {/* Description */}
            <p className="text-xl text-gray-700 font-bold mb-4">
              {castle.description}
            </p>
            
            {/* Decorative elements */}
            <div className="flex justify-center space-x-4 mb-4">
              {castle.elements.map((element, i) => (
                <span 
                  key={i}
                  className="text-3xl animate-sparkle"
                  style={{ animationDelay: `${i * 0.4}s` }}
                >
                  {element}
                </span>
              ))}
            </div>
            
            {/* Click hint */}
            <div className="bg-white bg-opacity-60 rounded-full px-4 py-2">
              <span className="text-gray-800 font-bold text-lg">
                👆 Choose this castle!
              </span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Instruction */}
      <div className="mt-8 bg-white bg-opacity-20 rounded-2xl p-6 max-w-2xl mx-auto">
        <p className="text-2xl text-white font-bold">
          🌟 Where would your princess like to live? 🌟
        </p>
      </div>
    </div>
  );
}

export default CastleSelector;
