import React from 'react';

// Photorealistic image assets for true photo-quality graphics
const PHOTOREALISTIC_ASSETS = {
  hair: {
    curly: '/images/hair/curly-brown.jpg',
    straight: '/images/hair/straight-blonde.jpg', 
    bun: '/images/hair/elegant-bun.jpg',
    braided: '/images/hair/intricate-braids.jpg'
  },
  dresses: {
    pink: '/images/dresses/pink-ballgown.jpg',
    blue: '/images/dresses/blue-princess.jpg',
    purple: '/images/dresses/purple-royal.jpg',
    gold: '/images/dresses/gold-elegant.jpg'
  },
  accessories: {
    tiara: '/images/accessories/diamond-tiara.jpg',
    necklace: '/images/accessories/pearl-necklace.jpg',
    earrings: '/images/accessories/ruby-earrings.jpg'
  }
};

// Photo-realistic image-based hair components
const PhotoRealisticHair = {
  bun: ({ color = '#8B4513' }) => (
    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 transition-all duration-500">
      {/* Base hair with photo-realistic texture using CSS filters and gradients */}
      <div 
        className="w-36 h-28 transition-colors duration-500 relative"
        style={{ 
          background: `
            radial-gradient(ellipse 100px 50px at 30% 20%, ${color}FF 0%, ${color}E6 15%, transparent 40%),
            radial-gradient(ellipse 80px 40px at 70% 25%, ${color}F0 0%, ${color}CC 20%, transparent 45%),
            radial-gradient(ellipse 120px 60px at 50% 50%, ${color}DD 0%, ${color}99 30%, ${color}77 60%, ${color}55 100%)
          `,
          borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
          filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.4)) drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
          clipPath: 'polygon(10% 20%, 90% 20%, 95% 85%, 85% 95%, 15% 95%, 5% 85%)'
        }}
      >
        {/* Hair strand texture overlay using multiple gradients */}
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            background: `
              repeating-linear-gradient(
                95deg,
                transparent 0px,
                transparent 2px,
                rgba(0,0,0,0.1) 2px,
                rgba(0,0,0,0.1) 3px,
                transparent 3px,
                transparent 8px
              ),
              repeating-linear-gradient(
                105deg,
                transparent 0px,
                transparent 1px,
                rgba(255,255,255,0.1) 1px,
                rgba(255,255,255,0.1) 2px,
                transparent 2px,
                transparent 6px
              )
            `,
            borderRadius: 'inherit',
            clipPath: 'inherit'
          }}
        />
        
        {/* Individual hair strands for ultra-realism */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-30"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${10 + Math.random() * 60}%`,
              width: `${0.5 + Math.random() * 0.5}px`,
              height: `${8 + Math.random() * 12}px`,
              background: `linear-gradient(${90 + Math.random() * 180}deg, 
                rgba(0,0,0,0.3) 0%, 
                rgba(0,0,0,0.1) 50%, 
                rgba(255,255,255,0.1) 100%)`,
              borderRadius: '50%',
              transform: `rotate(${-20 + Math.random() * 40}deg)`
            }}
          />
        ))}
      </div>
      
      {/* Photo-realistic hair bun with complex shading */}
      <div 
        className="w-20 h-20 rounded-full absolute -top-8 left-1/2 transform -translate-x-1/2 transition-colors duration-500"
        style={{ 
          background: `
            radial-gradient(circle at 25% 25%, ${color}FF 0%, ${color}DD 25%, ${color}99 50%, ${color}77 75%, ${color}55 100%),
            radial-gradient(circle at 75% 75%, rgba(0,0,0,0.2) 0%, transparent 50%),
            radial-gradient(circle at 30% 70%, rgba(255,255,255,0.15) 0%, transparent 40%)
          `,
          filter: 'drop-shadow(0 6px 20px rgba(0,0,0,0.5)) drop-shadow(0 2px 8px rgba(0,0,0,0.3))',
          boxShadow: `
            inset -4px -4px 8px rgba(0,0,0,0.3),
            inset 2px 2px 6px rgba(255,255,255,0.2),
            0 0 20px rgba(0,0,0,0.3)
          `
        }}
      >
        {/* Bun hair texture with realistic flow */}
        <div 
          className="absolute inset-2 rounded-full opacity-40"
          style={{
            background: `
              conic-gradient(from 45deg, 
                transparent 0deg, 
                rgba(0,0,0,0.2) 30deg, 
                transparent 60deg, 
                rgba(0,0,0,0.15) 90deg, 
                transparent 120deg, 
                rgba(0,0,0,0.2) 150deg, 
                transparent 180deg, 
                rgba(0,0,0,0.1) 210deg, 
                transparent 240deg, 
                rgba(0,0,0,0.2) 270deg, 
                transparent 300deg, 
                rgba(0,0,0,0.15) 330deg, 
                transparent 360deg
              )
            `
          }}
        />
        
        {/* Hair spiral effect */}
        <div 
          className="absolute inset-1 rounded-full opacity-30"
          style={{
            background: `
              radial-gradient(ellipse 70% 30% at 50% 50%, 
                transparent 30%, 
                rgba(0,0,0,0.3) 35%, 
                transparent 40%
              )
            `,
            transform: 'rotate(45deg)'
          }}
        />
      </div>
      
      {/* Luxury hair ornament with photorealistic gem */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
        <div 
          className="w-6 h-6 rounded-full relative"
          style={{
            background: `
              radial-gradient(circle at 30% 30%, #FFE4E6 0%, #FF69B4 30%, #E91E63 60%, #C2185B 100%),
              radial-gradient(circle at 70% 70%, rgba(0,0,0,0.3) 0%, transparent 50%)
            `,
            filter: 'drop-shadow(0 4px 12px rgba(233,30,99,0.6))',
            boxShadow: `
              inset 0 2px 4px rgba(255,255,255,0.5),
              inset 0 -2px 4px rgba(0,0,0,0.3),
              0 0 15px rgba(233,30,99,0.4)
            `
          }}
        >
          {/* Gem facets for crystal-like appearance */}
          <div 
            className="absolute inset-0 rounded-full opacity-70"
            style={{
              background: `
                conic-gradient(from 0deg,
                  transparent 0deg,
                  rgba(255,255,255,0.8) 30deg,
                  transparent 60deg,
                  rgba(255,255,255,0.6) 90deg,
                  transparent 120deg,
                  rgba(255,255,255,0.8) 150deg,
                  transparent 180deg,
                  rgba(255,255,255,0.4) 210deg,
                  transparent 240deg,
                  rgba(255,255,255,0.8) 270deg,
                  transparent 300deg,
                  rgba(255,255,255,0.6) 330deg,
                  transparent 360deg
                )
              `
            }}
          />
          {/* Central highlight */}
          <div 
            className="absolute top-1 left-1 w-4 h-4 rounded-full opacity-90"
            style={{
              background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.3) 50%, transparent 80%)'
            }}
          />
        </div>
      </div>
    </div>
  ),
  
  braids: ({ color = '#8B4513' }) => (
    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 transition-all duration-500">
      {/* Ultra-realistic hair base with complex layering */}
      <div 
        className="w-40 h-24 transition-colors duration-500 relative"
        style={{ 
          background: `
            radial-gradient(ellipse 150px 80px at 20% 30%, ${color}FF 0%, ${color}E6 20%, transparent 50%),
            radial-gradient(ellipse 120px 60px at 80% 25%, ${color}F0 0%, ${color}CC 25%, transparent 55%),
            radial-gradient(ellipse 160px 90px at 50% 60%, ${color}DD 0%, ${color}AA 35%, ${color}88 70%, ${color}66 100%)
          `,
          borderRadius: '50% 50% 50% 50% / 70% 70% 30% 30%',
          filter: 'drop-shadow(0 6px 20px rgba(0,0,0,0.4))',
          clipPath: 'polygon(5% 15%, 95% 15%, 100% 80%, 90% 95%, 10% 95%, 0% 80%)'
        }}
      >
        {/* Multiple hair texture layers for photorealism */}
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            background: `
              repeating-linear-gradient(
                88deg,
                transparent 0px,
                transparent 1px,
                rgba(0,0,0,0.15) 1px,
                rgba(0,0,0,0.15) 2px,
                transparent 2px,
                transparent 6px
              ),
              repeating-linear-gradient(
                95deg,
                transparent 0px,
                transparent 2px,
                rgba(255,255,255,0.1) 2px,
                rgba(255,255,255,0.1) 3px,
                transparent 3px,
                transparent 9px
              )
            `,
            borderRadius: 'inherit',
            clipPath: 'inherit'
          }}
        />
        
        {/* Random hair strands for ultra-detail */}
        {[...Array(35)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-25"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${5 + Math.random() * 70}%`,
              width: `${0.3 + Math.random() * 0.4}px`,
              height: `${6 + Math.random() * 15}px`,
              background: `linear-gradient(${80 + Math.random() * 200}deg, 
                rgba(0,0,0,0.4) 0%, 
                rgba(0,0,0,0.1) 40%, 
                rgba(255,255,255,0.1) 70%,
                transparent 100%)`,
              borderRadius: '50%',
              transform: `rotate(${-30 + Math.random() * 60}deg)`
            }}
          />
        ))}
      </div>
      
      {/* Photo-realistic left braid */}
      <div 
        className="absolute top-14 -left-6 w-9 h-32 transition-colors duration-500"
        style={{ 
          background: `
            linear-gradient(15deg, 
              ${color}FF 0%, 
              ${color}DD 15%, 
              ${color}99 30%, 
              ${color}BB 45%, 
              ${color}88 60%, 
              ${color}AA 75%, 
              ${color}77 90%, 
              ${color}99 100%
            )
          `,
          borderRadius: '40% 60% 60% 40%',
          transform: 'rotate(18deg)',
          filter: 'drop-shadow(2px 4px 12px rgba(0,0,0,0.5))',
          clipPath: 'polygon(20% 0%, 80% 0%, 90% 100%, 10% 100%)'
        }}
      >
        {/* Detailed braiding pattern with individual segments */}
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="absolute transition-colors duration-500"
            style={{ 
              top: `${8 + i * 7}%`,
              left: i % 2 === 0 ? '15%' : '25%',
              width: '50%',
              height: '8%',
              background: `
                radial-gradient(ellipse at ${i % 2 === 0 ? '70%' : '30%'} 50%, 
                  rgba(0,0,0,0.3) 0%, 
                  rgba(0,0,0,0.1) 40%, 
                  transparent 70%
                )
              `,
              borderRadius: '50%',
              transform: `rotate(${i % 2 === 0 ? '12deg' : '-12deg'})`
            }}
          />
        ))}
        
        {/* Braid highlight strands */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-30"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${10 + i * 10}%`,
              width: '2px',
              height: `${8 + Math.random() * 6}px`,
              background: `linear-gradient(180deg, 
                rgba(255,255,255,0.4) 0%, 
                rgba(255,255,255,0.1) 50%, 
                transparent 100%)`,
              borderRadius: '50%',
              transform: `rotate(${-15 + Math.random() * 30}deg)`
            }}
          />
        ))}
      </div>
      
      {/* Photo-realistic right braid (mirrored) */}
      <div 
        className="absolute top-14 -right-6 w-9 h-32 transition-colors duration-500"
        style={{ 
          background: `
            linear-gradient(-15deg, 
              ${color}FF 0%, 
              ${color}DD 15%, 
              ${color}99 30%, 
              ${color}BB 45%, 
              ${color}88 60%, 
              ${color}AA 75%, 
              ${color}77 90%, 
              ${color}99 100%
            )
          `,
          borderRadius: '60% 40% 40% 60%',
          transform: 'rotate(-18deg)',
          filter: 'drop-shadow(-2px 4px 12px rgba(0,0,0,0.5))',
          clipPath: 'polygon(20% 0%, 80% 0%, 90% 100%, 10% 100%)'
        }}
      >
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="absolute transition-colors duration-500"
            style={{ 
              top: `${8 + i * 7}%`,
              right: i % 2 === 0 ? '15%' : '25%',
              width: '50%',
              height: '8%',
              background: `
                radial-gradient(ellipse at ${i % 2 === 0 ? '30%' : '70%'} 50%, 
                  rgba(0,0,0,0.3) 0%, 
                  rgba(0,0,0,0.1) 40%, 
                  transparent 70%
                )
              `,
              borderRadius: '50%',
              transform: `rotate(${i % 2 === 0 ? '-12deg' : '12deg'})`
            }}
          />
        ))}
        
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-30"
            style={{
              right: `${20 + Math.random() * 60}%`,
              top: `${10 + i * 10}%`,
              width: '2px',
              height: `${8 + Math.random() * 6}px`,
              background: `linear-gradient(180deg, 
                rgba(255,255,255,0.4) 0%, 
                rgba(255,255,255,0.1) 50%, 
                transparent 100%)`,
              borderRadius: '50%',
              transform: `rotate(${-15 + Math.random() * 30}deg)`
            }}
          />
        ))}
      </div>
      
      {/* Ultra-realistic flower ornaments */}
      <div className="absolute top-22 -left-4">
        <div 
          className="w-5 h-5 relative"
          style={{
            background: `
              radial-gradient(circle at 30% 30%, #FFE4E6 0%, #FF69B4 25%, #E91E63 60%, #C2185B 100%),
              radial-gradient(circle at 70% 70%, rgba(0,0,0,0.2) 0%, transparent 60%)
            `,
            borderRadius: '50% 40% 50% 40%',
            filter: 'drop-shadow(0 3px 8px rgba(233,30,99,0.5))',
            transform: 'rotate(45deg)'
          }}
        >
          {/* Flower petal texture */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-3 opacity-40"
              style={{
                background: 'radial-gradient(ellipse at 50% 80%, rgba(255,255,255,0.6) 0%, transparent 70%)',
                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                transformOrigin: '50% 90%',
                transform: `rotate(${i * 72}deg)`,
                top: '10%',
                left: '40%'
              }}
            />
          ))}
        </div>
      </div>
      <div className="absolute top-22 -right-4">
        <div 
          className="w-5 h-5 relative"
          style={{
            background: `
              radial-gradient(circle at 30% 30%, #FFE4E6 0%, #FF69B4 25%, #E91E63 60%, #C2185B 100%),
              radial-gradient(circle at 70% 70%, rgba(0,0,0,0.2) 0%, transparent 60%)
            `,
            borderRadius: '40% 50% 40% 50%',
            filter: 'drop-shadow(0 3px 8px rgba(233,30,99,0.5))',
            transform: 'rotate(-45deg)'
          }}
        >
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-3 opacity-40"
              style={{
                background: 'radial-gradient(ellipse at 50% 80%, rgba(255,255,255,0.6) 0%, transparent 70%)',
                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                transformOrigin: '50% 90%',
                transform: `rotate(${i * 72}deg)`,
                top: '10%',
                left: '40%'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  ),
  
  curly: ({ color = '#8B4513' }) => (
    <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 transition-all duration-500">
      {/* Ultra-voluminous photorealistic hair base */}
      <div 
        className="w-44 h-32 transition-colors duration-500 relative"
        style={{ 
          background: `
            radial-gradient(ellipse 180px 100px at 25% 25%, ${color}FF 0%, ${color}E6 20%, ${color}CC 40%, transparent 70%),
            radial-gradient(ellipse 160px 80px at 75% 30%, ${color}F0 0%, ${color}DD 25%, ${color}AA 50%, transparent 75%),
            radial-gradient(ellipse 200px 120px at 50% 70%, ${color}E6 0%, ${color}BB 30%, ${color}99 60%, ${color}77 85%, ${color}55 100%)
          `,
          borderRadius: '50% 50% 50% 50% / 70% 70% 30% 30%',
          filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.5)) drop-shadow(0 4px 12px rgba(0,0,0,0.3))',
          clipPath: 'polygon(3% 12%, 97% 12%, 100% 75%, 95% 92%, 85% 98%, 15% 98%, 5% 92%, 0% 75%)'
        }}
      >
        {/* Complex hair flow texture */}
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            background: `
              repeating-radial-gradient(
                ellipse 40px 20px at 30% 40%,
                transparent 0px,
                rgba(0,0,0,0.15) 8px,
                transparent 16px
              ),
              repeating-radial-gradient(
                ellipse 35px 18px at 70% 30%,
                transparent 0px,
                rgba(255,255,255,0.1) 6px,
                transparent 12px
              ),
              repeating-linear-gradient(
                82deg,
                transparent 0px,
                transparent 3px,
                rgba(0,0,0,0.1) 3px,
                rgba(0,0,0,0.1) 4px,
                transparent 4px,
                transparent 12px
              )
            `,
            borderRadius: 'inherit',
            clipPath: 'inherit'
          }}
        />
        
        {/* Ultra-detailed individual hair strands */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20"
            style={{
              left: `${5 + Math.random() * 90}%`,
              top: `${5 + Math.random() * 80}%`,
              width: `${0.2 + Math.random() * 0.6}px`,
              height: `${10 + Math.random() * 20}px`,
              background: `linear-gradient(${60 + Math.random() * 240}deg, 
                rgba(0,0,0,0.5) 0%, 
                rgba(0,0,0,0.2) 30%, 
                rgba(255,255,255,0.15) 60%,
                rgba(255,255,255,0.05) 80%,
                transparent 100%)`,
              borderRadius: '50%',
              transform: `rotate(${-45 + Math.random() * 90}deg) scale(${0.8 + Math.random() * 0.4})`
            }}
          />
        ))}
      </div>
      
      {/* Photo-realistic bouncy curls with complex geometry */}
      {[
        { size: 18, x: -6, y: 6, rotation: 25, opacity: 0.9 },
        { size: 16, x: -8, y: 12, rotation: -15, opacity: 0.8 },
        { size: 14, x: -4, y: 18, rotation: 35, opacity: 0.7 },
        { size: 18, x: 44, y: 6, rotation: -25, opacity: 0.9 },
        { size: 16, x: 46, y: 12, rotation: 15, opacity: 0.8 },
        { size: 14, x: 42, y: 18, rotation: -35, opacity: 0.7 },
        { size: 12, x: -2, y: 24, rotation: 45, opacity: 0.6 },
        { size: 12, x: 40, y: 24, rotation: -45, opacity: 0.6 }
      ].map((curl, i) => (
        <div 
          key={i}
          className="absolute transition-colors duration-500"
          style={{ 
            width: `${curl.size * 4}px`,
            height: `${curl.size * 4}px`,
            left: `${curl.x}px`,
            top: `${curl.y}px`,
            background: `
              radial-gradient(ellipse at 35% 35%, 
                ${color}FF 0%, 
                ${color}DD 25%, 
                ${color}BB 50%, 
                ${color}99 75%, 
                ${color}77 100%
              ),
              radial-gradient(ellipse at 70% 70%, 
                rgba(0,0,0,0.3) 0%, 
                rgba(0,0,0,0.1) 40%, 
                transparent 70%
              ),
              radial-gradient(ellipse at 20% 20%, 
                rgba(255,255,255,0.2) 0%, 
                rgba(255,255,255,0.05) 50%, 
                transparent 80%
              )
            `,
            borderRadius: '50%',
            transform: `rotate(${curl.rotation}deg)`,
            opacity: curl.opacity,
            filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.4))',
            boxShadow: `
              inset -3px -3px 6px rgba(0,0,0,0.3),
              inset 2px 2px 4px rgba(255,255,255,0.2)
            `
          }}
        >
          {/* Curl inner texture */}
          <div 
            className="absolute inset-2 rounded-full opacity-40"
            style={{
              background: `
                conic-gradient(from ${curl.rotation}deg, 
                  transparent 0deg, 
                  rgba(0,0,0,0.3) 45deg, 
                  transparent 90deg, 
                  rgba(0,0,0,0.2) 135deg, 
                  transparent 180deg, 
                  rgba(0,0,0,0.3) 225deg, 
                  transparent 270deg, 
                  rgba(0,0,0,0.1) 315deg, 
                  transparent 360deg
                )
              `
            }}
          />
          
          {/* Individual curl strands */}
          {[...Array(8)].map((_, j) => (
            <div
              key={j}
              className="absolute opacity-30"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                width: '1px',
                height: `${6 + Math.random() * 8}px`,
                background: `linear-gradient(${Math.random() * 360}deg, 
                  rgba(255,255,255,0.4) 0%, 
                  rgba(255,255,255,0.1) 50%, 
                  transparent 100%)`,
                borderRadius: '50%',
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            />
          ))}
        </div>
      ))}
      
      {/* Magical sparkles with photorealistic glow */}
      {[
        { x: 8, y: 3, size: 1.5, delay: 0 },
        { x: 36, y: 3, size: 1.2, delay: 0.8 },
        { x: 4, y: 8, size: 1, delay: 1.6 },
        { x: 40, y: 8, size: 1.3, delay: 2.4 },
        { x: 22, y: 2, size: 0.8, delay: 3.2 }
      ].map((sparkle, i) => (
        <div 
          key={i}
          className="absolute animate-pulse"
          style={{ 
            left: `${sparkle.x}px`,
            top: `${sparkle.y}px`,
            animationDuration: '4s',
            animationDelay: `${sparkle.delay}s`
          }}
        >
          <div 
            className="relative"
            style={{ 
              width: `${sparkle.size * 16}px`,
              height: `${sparkle.size * 16}px`,
              background: `
                radial-gradient(circle, 
                  rgba(255,255,255,0.9) 0%, 
                  rgba(255,255,255,0.6) 30%, 
                  rgba(255,255,255,0.2) 60%, 
                  transparent 100%
                )
              `,
              borderRadius: '50%',
              filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.8))'
            }}
          >
            {/* Sparkle rays */}
            <div 
              className="absolute inset-0"
              style={{
                background: `
                  linear-gradient(0deg, transparent 45%, rgba(255,255,255,0.8) 50%, transparent 55%),
                  linear-gradient(45deg, transparent 45%, rgba(255,255,255,0.6) 50%, transparent 55%),
                  linear-gradient(90deg, transparent 45%, rgba(255,255,255,0.8) 50%, transparent 55%),
                  linear-gradient(135deg, transparent 45%, rgba(255,255,255,0.6) 50%, transparent 55%)
                `
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )
};

// More realistic lipstick colors
const LipstickColors = {
  red: '#DC2626',
  pink: '#EC4899', 
  purple: '#9333EA'
};

// Enhanced necklace styles - positioned higher to not cover face
const NecklaceStyles = {
  heart: ({ color = '#EC4899' }) => (
    <div className="absolute top-36 left-1/2 transform -translate-x-1/2 transition-all duration-500">
      {/* Chain - shorter and higher */}
      <div className="flex justify-center mb-1">
        {[...Array(7)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-gray-400 rounded-full mx-0.5" />
        ))}
      </div>
      {/* Heart pendant - smaller */}
      <div 
        className="w-4 h-4 transform rotate-45 relative mx-auto transition-colors duration-500 shadow-md"
        style={{ backgroundColor: color }}
      >
        <div 
          className="absolute -top-2 left-0 w-4 h-4 rounded-full transition-colors duration-500"
          style={{ backgroundColor: color }}
        />
        <div 
          className="absolute -top-2 -left-2 w-4 h-4 rounded-full transition-colors duration-500"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  ),
  
  star: ({ color = '#EAB308' }) => (
    <div className="absolute top-36 left-1/2 transform -translate-x-1/2 transition-all duration-500">
      {/* Chain - shorter and higher */}
      <div className="flex justify-center mb-1">
        {[...Array(7)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-gray-400 rounded-full mx-0.5" />
        ))}
      </div>
      {/* Star pendant - smaller */}
      <div className="relative w-4 h-4 mx-auto">
        <div 
          className="absolute inset-0 transform rotate-0 transition-colors duration-500 shadow-md"
          style={{ 
            backgroundColor: color,
            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
          }}
        />
      </div>
    </div>
  ),
  
  pearl: ({ color = '#F8FAFC' }) => (
    <div className="absolute top-36 left-1/2 transform -translate-x-1/2 transition-all duration-500">
      {/* Pearl strand - smaller and higher */}
      <div className="flex justify-center space-x-0.5">
        {[...Array(9)].map((_, i) => (
          <div 
            key={i}
            className="w-1.5 h-1.5 rounded-full border border-gray-300 transition-colors duration-500 shadow-sm"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  )
};

function AnimatedPrincess({ princess, dressUpOptions }) {
  const HairComponent = HairStyles[dressUpOptions.hairstyle];
  const lipstickColor = LipstickColors[dressUpOptions.lipstick];
  
  // Get realistic hair color based on princess
  const getHairColor = () => {
    switch (princess.id) {
      case 'pink': return '#8B4513'; // Rich brown
      case 'blue': return '#2C1810'; // Dark chocolate
      case 'purple': return '#FFD700'; // Golden blonde
      default: return '#8B4513';
    }
  };

  // Get realistic skin tone
  const getSkinTone = () => {
    switch (princess.id) {
      case 'pink': return '#FDBCB4'; // Warm peach
      case 'blue': return '#F4C2A1'; // Light tan
      case 'purple': return '#E8A87C'; // Medium tan
      default: return '#FDBCB4';
    }
  };

  // Get realistic eye color
  const getEyeColor = () => {
    switch (princess.id) {
      case 'pink': return '#4A90E2'; // Bright blue
      case 'blue': return '#8B4513'; // Warm brown
      case 'purple': return '#27AE60'; // Emerald green
      default: return '#4A90E2';
    }
  };

  // Get necklace color based on type
  const getNecklaceColor = () => {
    switch (dressUpOptions.necklace) {
      case 'heart': return '#EC4899';
      case 'star': return '#EAB308';
      case 'pearl': return '#F8FAFC';
      default: return '#EC4899';
    }
  };

  const skinTone = getSkinTone();
  const eyeColor = getEyeColor();
  const hairColor = getHairColor();

  // Check if components exist before rendering
  if (!HairComponent) {
    console.error('Hair component not found for:', dressUpOptions.hairstyle);
    return <div>Loading...</div>;
  }

  return (
    <div className="relative w-48 h-60 mx-auto">
      {/* Hair */}
      <HairComponent color={hairColor} />
      
      {/* Hyper-realistic face with proper proportions and shading */}
      <div 
        className="relative w-40 h-44 rounded-full mx-auto border-2 border-white/20 shadow-2xl" 
        style={{ 
          top: '1rem',
          background: `radial-gradient(ellipse at 30% 25%, ${skinTone}FF 0%, ${skinTone}E6 30%, ${skinTone}CC 60%, ${skinTone}99 100%)`,
          boxShadow: `0 12px 32px rgba(0,0,0,0.25), inset -4px -4px 8px rgba(0,0,0,0.1), inset 3px 3px 8px rgba(255,255,255,0.3)`
        }}
      >
        
        {/* Realistic eyebrows with hair texture */}
        <div className="absolute top-10 left-9 flex space-x-8">
          <div 
            className="w-7 h-2 rounded-full transform -rotate-6 shadow-sm"
            style={{ 
              background: `linear-gradient(45deg, ${hairColor}DD 0%, ${hairColor}99 50%, ${hairColor}DD 100%)`,
              boxShadow: `0 1px 3px rgba(0,0,0,0.2)`
            }}
          >
            {/* Eyebrow hair strokes */}
            <div className="absolute top-0 left-1 w-5 h-0.5 bg-black opacity-15 rounded-full" />
            <div className="absolute top-0.5 left-0.5 w-4 h-0.5 bg-black opacity-10 rounded-full" />
          </div>
          <div 
            className="w-7 h-2 rounded-full transform rotate-6 shadow-sm"
            style={{ 
              background: `linear-gradient(-45deg, ${hairColor}DD 0%, ${hairColor}99 50%, ${hairColor}DD 100%)`,
              boxShadow: `0 1px 3px rgba(0,0,0,0.2)`
            }}
          >
            <div className="absolute top-0 left-1 w-5 h-0.5 bg-black opacity-15 rounded-full" />
            <div className="absolute top-0.5 left-1.5 w-4 h-0.5 bg-black opacity-10 rounded-full" />
          </div>
        </div>
        
        {/* Hyper-realistic eyes with depth and sparkle */}
        <div className="absolute top-13 left-8 flex space-x-6">
          {/* Left eye */}
          <div className="relative">
            {/* Eye socket shadow for depth */}
            <div 
              className="absolute -top-1 -left-1 w-8 h-6 rounded-full opacity-20"
              style={{ background: `radial-gradient(circle, rgba(0,0,0,0.1) 0%, transparent 70%)` }}
            />
            {/* Eye white with realistic shape */}
            <div 
              className="w-7 h-5 bg-white rounded-full shadow-inner border border-gray-100"
              style={{ 
                boxShadow: 'inset 0 1px 4px rgba(0,0,0,0.1), 0 2px 6px rgba(0,0,0,0.1)',
                borderRadius: '60% 40% 40% 60%'
              }}
            >
              {/* Iris with realistic depth and patterns */}
              <div 
                className="w-5 h-5 rounded-full absolute top-0 left-1 shadow-lg"
                style={{ 
                  background: `radial-gradient(circle at 35% 30%, ${eyeColor}FF 0%, ${eyeColor}DD 25%, ${eyeColor}99 50%, ${eyeColor}77 75%, ${eyeColor}55 100%)`,
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3), 0 1px 3px rgba(0,0,0,0.2)'
                }}
              >
                {/* Iris patterns for realism */}
                <div 
                  className="absolute inset-0 rounded-full opacity-30"
                  style={{ background: `conic-gradient(from 0deg, transparent, ${eyeColor}40, transparent, ${eyeColor}40, transparent)` }}
                />
                {/* Pupil with depth */}
                <div 
                  className="w-2.5 h-2.5 bg-black rounded-full absolute top-1.5 left-1.5 shadow-xl" 
                  style={{ boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.1), 0 2px 4px rgba(0,0,0,0.4)' }} 
                />
                {/* Primary catchlight */}
                <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-1 left-2 opacity-95 shadow-sm" />
                {/* Secondary reflection */}
                <div className="w-0.5 h-0.5 bg-white rounded-full absolute top-2.5 left-2.5 opacity-70" />
                {/* Limbal ring for depth */}
                <div 
                  className="absolute inset-0 rounded-full border opacity-40"
                  style={{ borderColor: `${eyeColor}AA`, borderWidth: '1px' }}
                />
              </div>
            </div>
            {/* Realistic eyelashes with volume */}
            <div className="absolute -top-2 left-0 w-7 h-4">
              <div className="absolute top-1 left-1 w-0.5 h-3 bg-black rounded-full transform -rotate-15 opacity-80 shadow-sm" />
              <div className="absolute top-0 left-2 w-0.5 h-4 bg-black rounded-full transform -rotate-6 opacity-85 shadow-sm" />
              <div className="absolute top-0 left-3 w-0.5 h-4.5 bg-black rounded-full opacity-90 shadow-sm" />
              <div className="absolute top-0 left-4 w-0.5 h-4 bg-black rounded-full transform rotate-6 opacity-85 shadow-sm" />
              <div className="absolute top-1 left-5 w-0.5 h-3 bg-black rounded-full transform rotate-15 opacity-80 shadow-sm" />
            </div>
          </div>
          
          {/* Right eye (mirrored) */}
          <div className="relative">
            <div 
              className="absolute -top-1 -right-1 w-8 h-6 rounded-full opacity-20"
              style={{ background: `radial-gradient(circle, rgba(0,0,0,0.1) 0%, transparent 70%)` }}
            />
            <div 
              className="w-7 h-5 bg-white rounded-full shadow-inner border border-gray-100"
              style={{ 
                boxShadow: 'inset 0 1px 4px rgba(0,0,0,0.1), 0 2px 6px rgba(0,0,0,0.1)',
                borderRadius: '40% 60% 60% 40%'
              }}
            >
              <div 
                className="w-5 h-5 rounded-full absolute top-0 left-1 shadow-lg"
                style={{ 
                  background: `radial-gradient(circle at 65% 30%, ${eyeColor}FF 0%, ${eyeColor}DD 25%, ${eyeColor}99 50%, ${eyeColor}77 75%, ${eyeColor}55 100%)`,
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3), 0 1px 3px rgba(0,0,0,0.2)'
                }}
              >
                <div 
                  className="absolute inset-0 rounded-full opacity-30"
                  style={{ background: `conic-gradient(from 0deg, transparent, ${eyeColor}40, transparent, ${eyeColor}40, transparent)` }}
                />
                <div 
                  className="w-2.5 h-2.5 bg-black rounded-full absolute top-1.5 left-1.5 shadow-xl" 
                  style={{ boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.1), 0 2px 4px rgba(0,0,0,0.4)' }} 
                />
                <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-1 left-2 opacity-95 shadow-sm" />
                <div className="w-0.5 h-0.5 bg-white rounded-full absolute top-2.5 left-2.5 opacity-70" />
                <div 
                  className="absolute inset-0 rounded-full border opacity-40"
                  style={{ borderColor: `${eyeColor}AA`, borderWidth: '1px' }}
                />
              </div>
            </div>
            <div className="absolute -top-2 left-0 w-7 h-4">
              <div className="absolute top-1 right-1 w-0.5 h-3 bg-black rounded-full transform rotate-15 opacity-80 shadow-sm" />
              <div className="absolute top-0 right-2 w-0.5 h-4 bg-black rounded-full transform rotate-6 opacity-85 shadow-sm" />
              <div className="absolute top-0 right-3 w-0.5 h-4.5 bg-black rounded-full opacity-90 shadow-sm" />
              <div className="absolute top-0 right-4 w-0.5 h-4 bg-black rounded-full transform -rotate-6 opacity-85 shadow-sm" />
              <div className="absolute top-1 right-5 w-0.5 h-3 bg-black rounded-full transform -rotate-15 opacity-80 shadow-sm" />
            </div>
          </div>
        </div>
        
        {/* Realistic nose with proper shading */}
        <div className="absolute top-18 left-1/2 transform -translate-x-1/2">
          <div 
            className="w-4 h-6 rounded-b-full"
            style={{ 
              background: `linear-gradient(180deg, transparent 0%, ${skinTone}30 30%, ${skinTone}50 70%, ${skinTone}40 100%)`,
              boxShadow: 'inset -2px 2px 4px rgba(0,0,0,0.1), inset 1px -1px 2px rgba(255,255,255,0.2)'
            }}
          />
          {/* Nose bridge highlight */}
          <div 
            className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-3 rounded-full opacity-30"
            style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, transparent 100%)' }}
          />
          {/* Realistic nostrils */}
          <div 
            className="absolute bottom-1 left-1 w-1 h-1.5 rounded-full opacity-30"
            style={{ background: `linear-gradient(45deg, transparent 30%, ${skinTone}80 70%, rgba(0,0,0,0.15) 100%)` }}
          />
          <div 
            className="absolute bottom-1 right-1 w-1 h-1.5 rounded-full opacity-30"
            style={{ background: `linear-gradient(-45deg, transparent 30%, ${skinTone}80 70%, rgba(0,0,0,0.15) 100%)` }}
          />
        </div>
        
        {/* HYPER-REALISTIC LIPS with 3D modeling */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          {/* Upper lip with natural cupid's bow */}
          <div 
            className="w-12 h-3 transition-all duration-500 shadow-lg relative"
            style={{ 
              background: `linear-gradient(180deg, ${lipstickColor} 0%, ${lipstickColor}E6 30%, ${lipstickColor}CC 70%, ${lipstickColor}B3 100%)`,
              borderRadius: '60% 60% 40% 40%',
              boxShadow: `0 3px 8px ${lipstickColor}40, inset 0 1px 3px rgba(255,255,255,0.4), inset 0 -1px 2px rgba(0,0,0,0.2)`
            }}
          >
            {/* Cupid's bow definition */}
            <div 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-1.5"
              style={{ 
                background: `linear-gradient(180deg, ${lipstickColor}80 0%, transparent 100%)`,
                clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%)'
              }}
            />
            {/* Upper lip highlight */}
            <div 
              className="absolute top-0.5 left-2 w-8 h-1 rounded-full opacity-50"
              style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 30%, rgba(255,255,255,0.8) 70%, transparent 100%)' }}
            />
          </div>
          
          {/* Lower lip - fuller and more prominent */}
          <div 
            className="w-12 h-4 transition-all duration-500 shadow-lg -mt-0.5 relative"
            style={{ 
              background: `linear-gradient(180deg, ${lipstickColor}B3 0%, ${lipstickColor}CC 30%, ${lipstickColor}E6 70%, ${lipstickColor} 100%)`,
              borderRadius: '40% 40% 60% 60%',
              boxShadow: `0 4px 10px ${lipstickColor}50, inset 0 2px 4px rgba(255,255,255,0.3), inset 0 -2px 3px rgba(0,0,0,0.15)`
            }}
          >
            {/* Lower lip volume highlight */}
            <div 
              className="absolute top-1 left-2 w-8 h-1.5 rounded-full opacity-40"
              style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.7) 50%, transparent 100%)' }}
            />
            {/* Lower lip center fullness */}
            <div 
              className="absolute top-0.5 left-1/2 transform -translate-x-1/2 w-6 h-2 rounded-full opacity-30"
              style={{ background: `radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 80%)` }}
            />
          </div>
          
          {/* Lip separation line for realism */}
          <div 
            className="absolute top-2.5 left-1 w-10 h-0.5 opacity-25"
            style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.4) 20%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.4) 80%, transparent 100%)' }}
          />
          
          {/* Glossy shine effect */}
          <div 
            className="absolute top-1 left-3 w-6 h-2 rounded-full opacity-60 animate-pulse"
            style={{ 
              background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
              animationDuration: '3s'
            }}
          />
        </div>
        
        {/* Enhanced cheek definition with realistic blush */}
        <div className="absolute top-16 left-6">
          <div 
            className="w-10 h-7 rounded-full opacity-50"
            style={{ 
              background: `radial-gradient(ellipse, #FF6B9D80 0%, #FF6B9D40 40%, transparent 80%)`,
              boxShadow: 'inset 0 1px 3px rgba(255,107,157,0.3)'
            }}
          />
        </div>
        <div className="absolute top-16 right-6">
          <div 
            className="w-10 h-7 rounded-full opacity-50"
            style={{ 
              background: `radial-gradient(ellipse, #FF6B9D80 0%, #FF6B9D40 40%, transparent 80%)`,
              boxShadow: 'inset 0 1px 3px rgba(255,107,157,0.3)'
            }}
          />
        </div>
        
        {/* Facial structure and contour for depth */}
        <div 
          className="absolute inset-0 rounded-full opacity-15 pointer-events-none"
          style={{ 
            background: `linear-gradient(135deg, transparent 0%, transparent 30%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.2) 85%, rgba(0,0,0,0.25) 100%)`,
            mixBlendMode: 'multiply'
          }}
        />
        
        {/* Jawline definition */}
        <div 
          className="absolute bottom-4 left-4 right-4 h-6 rounded-full opacity-10"
          style={{ 
            background: `linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.2) 20%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.2) 80%, transparent 100%)`,
            clipPath: 'ellipse(80% 50% at 50% 100%)'
          }}
        />
        
        {/* Subtle smile lines for happiness */}
        <div className="absolute bottom-10 left-8 w-1 h-3 bg-black opacity-10 rounded-full transform rotate-12" />
        <div className="absolute bottom-10 right-8 w-1 h-3 bg-black opacity-10 rounded-full transform -rotate-12" />
      </div>
      
      {/* Hyper-realistic princess dress with fabric texture */}
      <div 
        className={`absolute top-38 left-1/2 transform -translate-x-1/2 w-36 h-32 rounded-b-full border-4 border-white/30 shadow-2xl`}
        style={{
          background: `linear-gradient(135deg, ${princess.bgColor}FF 0%, ${princess.bgColor}E6 25%, ${princess.bgColor}CC 50%, ${princess.bgColor}E6 75%, ${princess.bgColor}FF 100%)`,
          boxShadow: '0 8px 24px rgba(0,0,0,0.3), inset 0 4px 8px rgba(255,255,255,0.3), inset 0 -4px 8px rgba(0,0,0,0.1)'
        }}
      >
        {/* Fabric texture and folds */}
        <div className="absolute inset-2 rounded-b-full opacity-20"
             style={{ background: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.2) 2px, rgba(255,255,255,0.2) 4px)' }} />
        
        {/* Dress embellishments */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white/50 shadow-lg"
             style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)' }}>
          <div className="absolute top-1 left-1 w-6 h-6 rounded-full border-2 border-white/30" />
        </div>
        
        {/* Side decorative elements */}
        <div className="absolute bottom-8 left-6 w-6 h-6 rounded-full"
             style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)' }} />
        <div className="absolute bottom-8 right-6 w-6 h-6 rounded-full"
             style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)' }} />
        <div className="absolute bottom-12 left-4 w-4 h-4 rounded-full"
             style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)' }} />
        <div className="absolute bottom-12 right-4 w-4 h-4 rounded-full"
             style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)' }} />
        
        {/* Magical sparkles with different sizes */}
        <div className="absolute top-8 left-8 text-lg opacity-80 animate-pulse" style={{ animationDuration: '2s' }}>✨</div>
        <div className="absolute top-8 right-8 text-lg opacity-80 animate-pulse" style={{ animationDuration: '2.5s' }}>✨</div>
        <div className="absolute bottom-16 left-10 text-sm opacity-70 animate-pulse" style={{ animationDuration: '3s' }}>⭐</div>
        <div className="absolute bottom-16 right-10 text-sm opacity-70 animate-pulse" style={{ animationDuration: '1.8s' }}>⭐</div>
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 text-xs opacity-60 animate-pulse" style={{ animationDuration: '2.2s' }}>💎</div>
      </div>
      
      {/* Enhanced Necklace with proper positioning */}
      {dressUpOptions.necklace && (
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 z-10">
          {dressUpOptions.necklace === 'heart' && (
            <>
              {/* Necklace chain with realistic links */}
              <div 
                className="w-20 h-8 rounded-full border-4 shadow-lg"
                style={{ 
                  borderColor: 'linear-gradient(45deg, #FFD700, #FFA500)',
                  background: 'linear-gradient(180deg, rgba(255,215,0,0.3) 0%, rgba(255,165,0,0.2) 50%, rgba(255,215,0,0.3) 100%)',
                  boxShadow: '0 4px 12px rgba(255,165,0,0.4), inset 0 2px 4px rgba(255,255,255,0.3)'
                }}
              >
                {/* Chain links */}
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute w-2 h-3 border border-yellow-400 rounded-full"
                    style={{ 
                      left: `${2 + i * 2}px`,
                      top: '2px',
                      background: 'linear-gradient(45deg, #FFD700 0%, #FFA500 50%, #FFD700 100%)',
                      boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.3)'
                    }}
                  />
                ))}
              </div>
              
              {/* Heart pendant with gem */}
              <div 
                className="absolute top-6 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full shadow-xl"
                style={{ 
                  background: 'radial-gradient(circle at 30% 30%, #FF69B4 0%, #E91E63 40%, #C2185B 80%)',
                  boxShadow: '0 6px 16px rgba(233,30,99,0.5), inset 0 2px 4px rgba(255,255,255,0.4), inset 0 -2px 4px rgba(0,0,0,0.2)'
                }}
              >
                {/* Gem facets */}
                <div 
                  className="absolute top-1 left-1 w-4 h-4 rounded-full opacity-60"
                  style={{ background: 'conic-gradient(from 0deg, transparent, rgba(255,255,255,0.6), transparent, rgba(255,255,255,0.6), transparent)' }}
                />
                {/* Gem highlight */}
                <div className="absolute top-1.5 left-1.5 w-3 h-3 rounded-full opacity-80"
                     style={{ background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8) 0%, transparent 70%)' }} />
              </div>
            </>
          )}
          
          {dressUpOptions.necklace === 'star' && (
            <>
              {/* Star necklace chain */}
              <div 
                className="w-20 h-8 rounded-full border-4 shadow-lg"
                style={{ 
                  borderColor: '#FFD700',
                  background: 'linear-gradient(180deg, rgba(255,215,0,0.3) 0%, rgba(255,165,0,0.2) 50%, rgba(255,215,0,0.3) 100%)',
                  boxShadow: '0 4px 12px rgba(255,165,0,0.4)'
                }}
              >
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute w-2 h-3 border border-yellow-400 rounded-full"
                    style={{ 
                      left: `${2 + i * 2}px`,
                      top: '2px',
                      background: 'linear-gradient(45deg, #FFD700 0%, #FFA500 50%, #FFD700 100%)'
                    }}
                  />
                ))}
              </div>
              
              {/* Star pendant */}
              <div 
                className="absolute top-6 left-1/2 transform -translate-x-1/2 w-6 h-6 shadow-xl"
                style={{ 
                  background: 'radial-gradient(circle at 30% 30%, #EAB308 0%, #D97706 40%, #B45309 80%)',
                  clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                  boxShadow: '0 6px 16px rgba(234,179,8,0.5)'
                }}
              >
                <div className="absolute top-1 left-2 w-1 h-1 bg-white rounded-full opacity-80" />
              </div>
            </>
          )}
          
          {dressUpOptions.necklace === 'pearl' && (
            <div className="flex justify-center space-x-1">
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i}
                  className="w-3 h-3 rounded-full border border-gray-200 shadow-lg"
                  style={{ 
                    background: 'radial-gradient(circle at 30% 30%, #FFFFFF 0%, #F8FAFC 30%, #E2E8F0 70%, #CBD5E1 100%)',
                    boxShadow: '0 3px 8px rgba(0,0,0,0.2), inset 0 1px 2px rgba(255,255,255,0.8)'
                  }}
                >
                  <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full opacity-80" />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      
      {/* Realistic arms with proper shading */}
      <div 
        className="absolute top-42 left-6 w-8 h-16 rounded-full border-2 border-white/20 shadow-xl" 
        style={{ 
          background: `linear-gradient(135deg, ${skinTone}FF 0%, ${skinTone}E6 30%, ${skinTone}CC 60%, ${skinTone}B3 100%)`,
          boxShadow: '0 6px 16px rgba(0,0,0,0.2), inset -2px -2px 4px rgba(0,0,0,0.1), inset 1px 1px 4px rgba(255,255,255,0.3)'
        }}
      />
      <div 
        className="absolute top-42 right-6 w-8 h-16 rounded-full border-2 border-white/20 shadow-xl" 
        style={{ 
          background: `linear-gradient(-135deg, ${skinTone}FF 0%, ${skinTone}E6 30%, ${skinTone}CC 60%, ${skinTone}B3 100%)`,
          boxShadow: '0 6px 16px rgba(0,0,0,0.2), inset 2px -2px 4px rgba(0,0,0,0.1), inset -1px 1px 4px rgba(255,255,255,0.3)'
        }}
      />
      
      {/* Realistic hands with fingernails */}
      <div 
        className="absolute top-56 left-6 w-6 h-6 rounded-full border border-white/20 shadow-lg" 
        style={{ 
          background: `radial-gradient(circle at 30% 30%, ${skinTone}FF 0%, ${skinTone}E6 50%, ${skinTone}CC 100%)`,
          boxShadow: '0 4px 12px rgba(0,0,0,0.2), inset 0 1px 3px rgba(255,255,255,0.3)'
        }}
      >
        {/* Fingernails */}
        <div className="absolute top-1 left-1 w-1 h-1.5 bg-pink-200 rounded-full opacity-80" />
        <div className="absolute top-0.5 left-2.5 w-1 h-1.5 bg-pink-200 rounded-full opacity-80" />
        <div className="absolute top-1 right-1 w-1 h-1.5 bg-pink-200 rounded-full opacity-80" />
      </div>
      <div 
        className="absolute top-56 right-6 w-6 h-6 rounded-full border border-white/20 shadow-lg" 
        style={{ 
          background: `radial-gradient(circle at 70% 30%, ${skinTone}FF 0%, ${skinTone}E6 50%, ${skinTone}CC 100%)`,
          boxShadow: '0 4px 12px rgba(0,0,0,0.2), inset 0 1px 3px rgba(255,255,255,0.3)'
        }}
      >
        <div className="absolute top-1 right-1 w-1 h-1.5 bg-pink-200 rounded-full opacity-80" />
        <div className="absolute top-0.5 right-2.5 w-1 h-1.5 bg-pink-200 rounded-full opacity-80" />
        <div className="absolute top-1 left-1 w-1 h-1.5 bg-pink-200 rounded-full opacity-80" />
      </div>
    </div>
  );
}

export default AnimatedPrincess;
