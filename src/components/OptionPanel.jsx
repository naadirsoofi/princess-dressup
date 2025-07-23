import React from 'react';
import { playSound } from '../utils/sounds';

// Enhanced Hair silhouette components with realistic textures
const HairSilhouettes = {
  bun: () => (
    <div className="w-10 h-10 mx-auto relative">
      {/* Hair base with gradient */}
      <div 
        className="w-10 h-7 rounded-t-full shadow-lg"
        style={{ 
          background: 'linear-gradient(135deg, #8B4513 0%, #6B3410 50%, #4A240B 100%)',
          boxShadow: '0 2px 6px rgba(0,0,0,0.3), inset -1px -1px 2px rgba(0,0,0,0.2)'
        }}
      />
      {/* Elegant bun */}
      <div 
        className="w-5 h-5 rounded-full absolute top-1 left-1/2 transform -translate-x-1/2 shadow-lg"
        style={{ 
          background: 'radial-gradient(circle at 30% 30%, #8B4513 0%, #6B3410 50%, #4A240B 100%)',
          boxShadow: '0 3px 8px rgba(0,0,0,0.4), inset -1px -1px 2px rgba(0,0,0,0.2)'
        }}
      />
      {/* Hair texture lines */}
      <div className="absolute top-2 left-2 w-6 h-0.5 bg-black opacity-15 rounded-full" />
      <div className="absolute top-3 left-1.5 w-7 h-0.5 bg-black opacity-10 rounded-full" />
      {/* Decorative ornament */}
      <div className="absolute top-0.5 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-br from-pink-300 to-pink-500 rounded-full shadow-sm" />
    </div>
  ),
  braids: () => (
    <div className="w-10 h-10 mx-auto relative">
      {/* Hair base */}
      <div 
        className="w-10 h-5 rounded-t-full shadow-lg"
        style={{ 
          background: 'linear-gradient(135deg, #8B4513 0%, #6B3410 50%, #4A240B 100%)',
          boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
        }}
      />
      {/* Left braid with braiding pattern */}
      <div 
        className="w-2.5 h-7 rounded-full absolute top-3 left-0 transform rotate-12 shadow-lg"
        style={{ 
          background: 'linear-gradient(45deg, #8B4513 0%, #6B3410 50%, #4A240B 100%)',
          boxShadow: '0 3px 8px rgba(0,0,0,0.4)'
        }}
      >
        {/* Braid segments */}
        <div className="absolute top-1 left-0.5 w-1.5 h-1 bg-black opacity-20 rounded-full" />
        <div className="absolute top-3 left-0.5 w-1.5 h-1 bg-black opacity-20 rounded-full" />
        <div className="absolute top-5 left-0.5 w-1.5 h-1 bg-black opacity-20 rounded-full" />
      </div>
      {/* Right braid */}
      <div 
        className="w-2.5 h-7 rounded-full absolute top-3 right-0 transform -rotate-12 shadow-lg"
        style={{ 
          background: 'linear-gradient(-45deg, #8B4513 0%, #6B3410 50%, #4A240B 100%)',
          boxShadow: '0 3px 8px rgba(0,0,0,0.4)'
        }}
      >
        <div className="absolute top-1 right-0.5 w-1.5 h-1 bg-black opacity-20 rounded-full" />
        <div className="absolute top-3 right-0.5 w-1.5 h-1 bg-black opacity-20 rounded-full" />
        <div className="absolute top-5 right-0.5 w-1.5 h-1 bg-black opacity-20 rounded-full" />
      </div>
      {/* Hair part */}
      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-0.5 h-3 bg-black opacity-20 rounded-full" />
      {/* Decorative flowers */}
      <div className="absolute top-5 left-0.5 text-xs">🌸</div>
      <div className="absolute top-5 right-0.5 text-xs">🌸</div>
    </div>
  ),
  curly: () => (
    <div className="w-10 h-10 mx-auto relative">
      {/* Main voluminous hair */}
      <div 
        className="w-10 h-6 rounded-t-full shadow-lg"
        style={{ 
          background: 'radial-gradient(ellipse at 30% 30%, #8B4513 0%, #6B3410 40%, #4A240B 80%)',
          boxShadow: '0 3px 10px rgba(0,0,0,0.4)'
        }}
      />
      {/* Large bouncy curls */}
      <div 
        className="w-4 h-4 rounded-full absolute top-1 -left-1 shadow-lg"
        style={{ 
          background: 'radial-gradient(circle at 40% 30%, #8B4513 0%, #6B3410 60%)',
          boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
        }}
      />
      <div 
        className="w-4 h-4 rounded-full absolute top-1 -right-1 shadow-lg"
        style={{ 
          background: 'radial-gradient(circle at 60% 30%, #8B4513 0%, #6B3410 60%)',
          boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
        }}
      />
      {/* Smaller curls for volume */}
      <div 
        className="w-3 h-3 rounded-full absolute top-3 -left-1.5 shadow-md"
        style={{ 
          background: 'radial-gradient(circle, #6B3410 0%, #4A240B 70%)',
          boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
        }}
      />
      <div 
        className="w-3 h-3 rounded-full absolute top-3 -right-1.5 shadow-md"
        style={{ 
          background: 'radial-gradient(circle, #6B3410 0%, #4A240B 70%)',
          boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
        }}
      />
      {/* Tiny curls */}
      <div 
        className="w-2 h-2 rounded-full absolute top-5 -left-1 shadow-sm"
        style={{ background: 'radial-gradient(circle, #6B3410 0%, #4A240B 70%)' }}
      />
      <div 
        className="w-2 h-2 rounded-full absolute top-5 -right-1 shadow-sm"
        style={{ background: 'radial-gradient(circle, #6B3410 0%, #4A240B 70%)' }}
      />
      {/* Magical sparkles */}
      <div className="absolute top-0 left-2 text-xs opacity-80">✨</div>
      <div className="absolute top-0 right-2 text-xs opacity-80">✨</div>
    </div>
  )
};

// Enhanced Necklace shape components with realistic jewelry appearance
const NecklaceShapes = {
  heart: ({ color }) => (
    <div className="w-10 h-10 mx-auto relative flex items-center justify-center">
      {/* Realistic chain links */}
      <div className="absolute top-1 flex justify-center space-x-0.5">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="w-1.5 h-2 border-2 rounded-full shadow-sm"
            style={{ 
              borderColor: '#FFD700',
              background: 'linear-gradient(45deg, #FFD700 0%, #FFA500 50%, #FFD700 100%)',
              boxShadow: '0 1px 3px rgba(255,165,0,0.4)'
            }}
          />
        ))}
      </div>
      {/* Heart pendant with realistic gem appearance */}
      <div 
        className="w-5 h-5 transform rotate-45 relative mt-4 shadow-xl"
        style={{ 
          background: `radial-gradient(circle at 30% 30%, ${color} 0%, ${color}CC 40%, ${color}88 80%)`,
          boxShadow: `0 4px 12px ${color}60, inset 0 1px 3px rgba(255,255,255,0.4)`
        }}
      >
        <div 
          className="absolute -top-2.5 left-0 w-5 h-5 rounded-full"
          style={{ 
            background: `radial-gradient(circle at 30% 30%, ${color} 0%, ${color}CC 50%)`,
            boxShadow: `0 2px 6px ${color}40`
          }}
        />
        <div 
          className="absolute -top-2.5 -left-2.5 w-5 h-5 rounded-full"
          style={{ 
            background: `radial-gradient(circle at 30% 30%, ${color} 0%, ${color}CC 50%)`,
            boxShadow: `0 2px 6px ${color}40`
          }}
        />
        {/* Gem facets */}
        <div 
          className="absolute top-0 left-0 w-4 h-4 rounded-full opacity-60"
          style={{ background: 'conic-gradient(from 0deg, transparent, rgba(255,255,255,0.6), transparent, rgba(255,255,255,0.6), transparent)' }}
        />
        {/* Highlight */}
        <div className="absolute top-0.5 left-0.5 w-2 h-2 rounded-full bg-white opacity-70" />
      </div>
    </div>
  ),
  star: ({ color }) => (
    <div className="w-10 h-10 mx-auto flex flex-col items-center justify-center">
      {/* Chain */}
      <div className="flex justify-center space-x-0.5 mb-1">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="w-1.5 h-2 border-2 rounded-full shadow-sm"
            style={{ 
              borderColor: '#FFD700',
              background: 'linear-gradient(45deg, #FFD700 0%, #FFA500 50%, #FFD700 100%)',
              boxShadow: '0 1px 3px rgba(255,165,0,0.4)'
            }}
          />
        ))}
      </div>
      {/* Star pendant */}
      <div className="relative w-5 h-5">
        <div 
          className="absolute inset-0 shadow-xl"
          style={{ 
            background: `linear-gradient(135deg, ${color} 0%, ${color}DD 30%, ${color}99 70%, ${color}DD 100%)`,
            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
            boxShadow: `0 3px 8px ${color}60, inset 0 1px 2px rgba(255,255,255,0.4)`
          }}
        />
        {/* Star sparkle effect */}
        <div className="absolute top-1 left-2 w-1 h-1 bg-white rounded-full opacity-80" />
        <div className="absolute top-2 left-1.5 w-0.5 h-0.5 bg-white rounded-full opacity-60" />
      </div>
    </div>
  ),
  pearl: ({ color }) => (
    <div className="w-10 h-10 mx-auto flex items-center justify-center">
      {/* Elegant pearl strand with realistic pearls */}
      <div className="flex justify-center space-x-1">
        {[...Array(4)].map((_, i) => (
          <div 
            key={i}
            className="w-2.5 h-2.5 rounded-full border border-gray-200 shadow-lg"
            style={{ 
              background: `radial-gradient(circle at 30% 30%, #FFFFFF 0%, ${color} 30%, #E2E8F0 70%, #CBD5E1 100%)`,
              boxShadow: '0 2px 6px rgba(0,0,0,0.2), inset 0 1px 2px rgba(255,255,255,0.8), inset 0 -1px 1px rgba(0,0,0,0.1)'
            }}
          >
            {/* Pearl luster */}
            <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full opacity-80" />
            <div className="absolute bottom-0.5 right-0.5 w-0.5 h-0.5 bg-gray-300 rounded-full opacity-50" />
          </div>
        ))}
      </div>
    </div>
  )
};

// Realistic lipstick preview component
const LipstickPreview = ({ color, name }) => (
  <div className="w-10 h-10 mx-auto flex items-center justify-center">
    <div 
      className="w-7 h-4 rounded-full shadow-xl border border-opacity-50 relative"
      style={{ 
        background: `linear-gradient(180deg, ${color} 0%, ${color}E6 30%, ${color}CC 70%, ${color}B3 100%)`,
        borderColor: color,
        boxShadow: `0 3px 8px ${color}60, inset 0 1px 3px rgba(255,255,255,0.4), inset 0 -1px 2px rgba(0,0,0,0.2)`
      }}
    >
      {/* Upper lip curve with cupid's bow */}
      <div 
        className="absolute top-0 left-1 w-5 h-1.5"
        style={{ 
          background: `linear-gradient(180deg, ${color} 0%, transparent 100%)`,
          borderRadius: '50% 50% 40% 40%'
        }}
      />
      {/* Lip highlight for glossy effect */}
      <div 
        className="absolute top-0.5 left-1.5 w-4 h-1 rounded-full opacity-60"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%)' }}
      />
      {/* Lower lip fullness */}
      <div 
        className="absolute bottom-0 left-1 w-5 h-2"
        style={{ 
          background: `linear-gradient(180deg, ${color}80 0%, ${color} 100%)`,
          borderRadius: '40% 40% 60% 60%'
        }}
      />
      {/* Glossy shine animation */}
      <div 
        className="absolute top-1 left-2 w-3 h-1.5 rounded-full opacity-70 animate-pulse"
        style={{ 
          background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
          animationDuration: '3s'
        }}
      />
    </div>
  </div>
);

const dressUpCategories = {
  lipstick: {
    title: 'Lipstick 💋',
    options: [
      { 
        id: 'red', 
        name: 'Ruby Red', 
        color: '#DC2626', 
        bgColor: 'bg-red-500',
        preview: <LipstickPreview color="#DC2626" name="Ruby Red" />
      },
      { 
        id: 'pink', 
        name: 'Pretty Pink', 
        color: '#EC4899', 
        bgColor: 'bg-pink-500',
        preview: <LipstickPreview color="#EC4899" name="Pretty Pink" />
      },
      { 
        id: 'purple', 
        name: 'Purple Pop', 
        color: '#9333EA', 
        bgColor: 'bg-purple-500',
        preview: <LipstickPreview color="#9333EA" name="Purple Pop" />
      }
    ]
  },
  hairstyle: {
    title: 'Hairstyle 💇‍♀️',
    options: [
      { 
        id: 'bun', 
        name: 'Royal Bun',
        preview: <HairSilhouettes.bun />
      },
      { 
        id: 'braids', 
        name: 'Pretty Braids',
        preview: <HairSilhouettes.braids />
      },
      { 
        id: 'curly', 
        name: 'Curly Hair',
        preview: <HairSilhouettes.curly />
      }
    ]
  },
  necklace: {
    title: 'Necklace 📿',
    options: [
      { 
        id: 'heart', 
        name: 'Heart Pendant', 
        color: '#EC4899', 
        bgColor: 'bg-pink-400',
        preview: <NecklaceShapes.heart color="#EC4899" />
      },
      { 
        id: 'star', 
        name: 'Star Choker', 
        color: '#EAB308', 
        bgColor: 'bg-yellow-400',
        preview: <NecklaceShapes.star color="#EAB308" />
      },
      { 
        id: 'pearl', 
        name: 'Pearl Strand', 
        color: '#F8FAFC', 
        bgColor: 'bg-blue-400',
        preview: <NecklaceShapes.pearl color="#F8FAFC" />
      }
    ]
  }
};

const OptionPanel = ({ selectedCategory, onCategoryChange, onOptionSelect, selectedOptions }) => {
  const currentCategory = dressUpCategories[selectedCategory];

  const handleOptionClick = (option) => {
    playSound('click');
    onOptionSelect(selectedCategory, option.id);
  };

  const handleCategoryClick = (categoryId) => {
    playSound('click');
    onCategoryChange(categoryId);
  };

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-purple-200">
      {/* Category Selector */}
      <div className="flex justify-center space-x-3 mb-6">
        {Object.entries(dressUpCategories).map(([categoryId, category]) => (
          <button
            key={categoryId}
            onClick={() => handleCategoryClick(categoryId)}
            className={`px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg ${
              selectedCategory === categoryId
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-purple-300'
                : 'bg-white text-purple-600 hover:bg-purple-50 border-2 border-purple-200'
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Options Grid */}
      <div className="grid grid-cols-3 gap-4">
        {currentCategory.options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleOptionClick(option)}
            className={`p-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg border-3 ${
              selectedOptions[selectedCategory] === option.id
                ? 'bg-gradient-to-br from-purple-100 to-pink-100 border-purple-400 shadow-purple-300'
                : 'bg-white hover:bg-purple-50 border-purple-200 hover:border-purple-300'
            }`}
          >
            {/* Enhanced Preview */}
            <div className="mb-3 flex justify-center">
              {option.preview || (
                selectedCategory === 'hairstyle' && HairSilhouettes[option.id] ? 
                  React.createElement(HairSilhouettes[option.id]) :
                selectedCategory === 'necklace' && NecklaceShapes[option.id] ? 
                  React.createElement(NecklaceShapes[option.id], { color: option.color }) :
                null
              )}
            </div>
            
            {/* Option Name */}
            <div className="text-sm font-medium text-purple-800 text-center">
              {option.name}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default OptionPanel;
