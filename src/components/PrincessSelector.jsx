import React from 'react';

const princesses = [
  {
    id: 'pink',
    name: 'Princess Rose',
    color: 'pink',
    emoji: '👸',
    dress: '👗',
    description: 'Sweet and kind',
    bgColor: 'from-pink-300 to-rose-400'
  },
  {
    id: 'blue',
    name: 'Princess Luna',
    color: 'blue',
    emoji: '👸🏻',
    dress: '👗',
    description: 'Wise and magical',
    bgColor: 'from-blue-300 to-purple-400'
  },
  {
    id: 'purple',
    name: 'Princess Violet',
    color: 'purple',
    emoji: '👸🏽',
    dress: '👗',
    description: 'Brave and strong',
    bgColor: 'from-purple-300 to-indigo-400'
  }
];

function PrincessSelector({ onSelect }) {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold text-white mb-8 font-['Fredoka_One'] drop-shadow-md">
        Choose Your Princess! ✨
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {princesses.map((princess) => (
          <div
            key={princess.id}
            onClick={() => onSelect(princess)}
            className={`princess-card cursor-pointer bg-gradient-to-br ${princess.bgColor} rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-4 border-white`}
          >
            {/* Princess Avatar */}
            <div className="text-8xl mb-4 animate-bounce-gentle">
              {princess.emoji}
            </div>
            
            {/* Princess Dress */}
            <div className="text-6xl mb-4">
              {princess.dress}
            </div>
            
            {/* Princess Name */}
            <h3 className="text-3xl font-bold text-white mb-2 font-['Fredoka_One'] drop-shadow-md">
              {princess.name}
            </h3>
            
            {/* Description */}
            <p className="text-xl text-white font-bold opacity-90">
              {princess.description}
            </p>
            
            {/* Magical sparkles */}
            <div className="flex justify-center mt-4 space-x-2">
              {[...Array(3)].map((_, i) => (
                <span 
                  key={i} 
                  className="text-2xl animate-sparkle"
                  style={{ animationDelay: `${i * 0.3}s` }}
                >
                  ✨
                </span>
              ))}
            </div>
            
            {/* Click hint */}
            <div className="mt-4 bg-white bg-opacity-20 rounded-full px-4 py-2">
              <span className="text-white font-bold text-lg">
                👆 Click me!
              </span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Instruction */}
      <div className="mt-8 bg-white bg-opacity-20 rounded-2xl p-6 max-w-2xl mx-auto">
        <p className="text-2xl text-white font-bold">
          🌟 Pick your favorite princess to start the magical adventure! 🌟
        </p>
      </div>
    </div>
  );
}

export default PrincessSelector;
