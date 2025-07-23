import React from 'react';

const SnowfallBackground = ({ children }) => {
  // Generate snowflakes with random properties
  const snowflakes = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    animationDelay: Math.random() * 10,
    animationDuration: 3 + Math.random() * 7,
    opacity: 0.4 + Math.random() * 0.6,
    size: 2 + Math.random() * 4
  }));

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Beautiful light blue gradient background */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: `
            linear-gradient(135deg, 
              #E6F3FF 0%, 
              #CCE7FF 25%, 
              #B3DAFF 50%, 
              #99CCFF 75%, 
              #80BFFF 100%
            )
          `
        }}
      />
      
      {/* Animated snowflakes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-5">
        {snowflakes.map(flake => (
          <div
            key={flake.id}
            className={`absolute ${flake.id % 8 === 0 ? 'snowfall-sparkle' : 'snowfall-animation'}`}
            style={{
              left: `${flake.left}%`,
              animationDuration: `${flake.animationDuration}s`,
              animationDelay: `${flake.animationDelay}s`,
              opacity: flake.opacity
            }}
          >
            <div
              className="bg-white rounded-full shadow-sm"
              style={{
                width: `${flake.size}px`,
                height: `${flake.size}px`,
                filter: 'blur(0.5px)'
              }}
            />
          </div>
        ))}
      </div>

      {/* Subtle aurora effect */}
      <div 
        className="absolute inset-0 pointer-events-none -z-8 opacity-20"
        style={{
          background: `
            radial-gradient(ellipse at 20% 20%, 
              rgba(147, 112, 219, 0.3) 0%, 
              transparent 50%
            ),
            radial-gradient(ellipse at 80% 80%, 
              rgba(255, 182, 193, 0.2) 0%, 
              transparent 50%
            ),
            radial-gradient(ellipse at 50% 10%, 
              rgba(173, 216, 230, 0.4) 0%, 
              transparent 70%
            )
          `
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default SnowfallBackground;
