import React from 'react';

const LayeredPrincess = ({ dressUpOptions, selectedPrincess, width = 300, height = 400 }) => {
  // Base princess figure - we'll start with a simple CSS-drawn princess
  const basePrincessStyle = {
    width: `${width}px`,
    height: `${height}px`,
    position: 'relative',
    margin: '0 auto',
    background: 'linear-gradient(145deg, #ffeef5, #f8e4f0)',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
  };

  // Princess face and body
  const renderBasePrincess = () => (
    <div style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* Head */}
      <div style={{
        width: '120px',
        height: '140px',
        backgroundColor: '#fdbcb4', // Skin tone
        borderRadius: '60px 60px 50px 50px',
        position: 'relative',
        marginBottom: '10px',
        border: '2px solid #f4a4a4'
      }}>
        {/* Eyes */}
        <div style={{
          position: 'absolute',
          top: '50px',
          left: '25px',
          width: '15px',
          height: '15px',
          backgroundColor: '#333',
          borderRadius: '50%'
        }} />
        <div style={{
          position: 'absolute',
          top: '50px',
          right: '25px',
          width: '15px',
          height: '15px',
          backgroundColor: '#333',
          borderRadius: '50%'
        }} />
        
        {/* Nose */}
        <div style={{
          position: 'absolute',
          top: '70px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '8px',
          height: '6px',
          backgroundColor: '#f4a4a4',
          borderRadius: '50%'
        }} />
        
        {/* Mouth */}
        <div style={{
          position: 'absolute',
          top: '90px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '20px',
          height: '10px',
          border: '2px solid #ff6b9d',
          borderTop: 'none',
          borderRadius: '0 0 20px 20px'
        }} />
      </div>
      
      {/* Body/Dress Base */}
      <div style={{
        width: '160px',
        height: '200px',
        backgroundColor: '#ff9ec7', // Base dress color
        borderRadius: '80px 80px 20px 20px',
        position: 'relative',
        border: '3px solid #ff6b9d'
      }}>
        {/* Arms */}
        <div style={{
          position: 'absolute',
          left: '-30px',
          top: '20px',
          width: '25px',
          height: '80px',
          backgroundColor: '#fdbcb4',
          borderRadius: '15px',
          border: '2px solid #f4a4a4'
        }} />
        <div style={{
          position: 'absolute',
          right: '-30px',
          top: '20px',
          width: '25px',
          height: '80px',
          backgroundColor: '#fdbcb4',
          borderRadius: '15px',
          border: '2px solid #f4a4a4'
        }} />
      </div>
    </div>
  );

  // Hair layers
  const renderHair = () => {
    const hairStyles = {
      curly: {
        background: '#8B4513',
        clipPath: 'ellipse(80px 60px at 50% 30%)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '20px',
          left: '20px',
          width: '20px',
          height: '20px',
          backgroundColor: '#8B4513',
          borderRadius: '50%'
        }
      },
      straight: {
        background: 'linear-gradient(180deg, #8B4513 0%, #A0522D 100%)',
        clipPath: 'polygon(20% 0%, 80% 0%, 90% 100%, 10% 100%)'
      },
      braided: {
        background: '#8B4513',
        clipPath: 'polygon(25% 0%, 75% 0%, 85% 100%, 15% 100%)',
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)'
      },
      updo: {
        background: 'radial-gradient(circle, #8B4513 30%, #A0522D 70%)',
        clipPath: 'ellipse(90px 40px at 50% 20%)'
      },
      waves: {
        background: 'linear-gradient(180deg, #8B4513 0%, #A0522D 100%)',
        clipPath: 'polygon(15% 0%, 85% 0%, 90% 50%, 85% 100%, 15% 100%, 10% 50%)'
      },
      ponytail: {
        background: '#8B4513',
        clipPath: 'polygon(30% 0%, 70% 0%, 80% 80%, 60% 100%, 40% 100%, 20% 80%)'
      }
    };

    const currentHairStyle = hairStyles[dressUpOptions.hairstyle] || hairStyles.curly;

    return (
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '140px',
        height: '100px',
        zIndex: 1,
        ...currentHairStyle
      }} />
    );
  };

  // Lipstick layer
  const renderLipstick = () => {
    const lipstickColors = {
      pink: '#ff6b9d',
      red: '#dc143c',
      coral: '#ff7f50',
      berry: '#8b008b',
      nude: '#ddbea9',
      glossy: '#ff1493'
    };

    const lipColor = lipstickColors[dressUpOptions.lipstick] || lipstickColors.pink;

    return (
      <div style={{
        position: 'absolute',
        top: '160px', // Position over the mouth area
        left: '50%',
        transform: 'translateX(-50%)',
        width: '24px',
        height: '12px',
        backgroundColor: lipColor,
        borderRadius: '0 0 24px 24px',
        border: `2px solid ${lipColor}`,
        boxShadow: dressUpOptions.lipstick === 'glossy' ? '0 2px 8px rgba(255,20,147,0.6)' : 'none',
        zIndex: 3
      }} />
    );
  };

  // Accessories layer
  const renderAccessories = () => {
    const accessories = {
      heart: {
        content: '💖',
        fontSize: '24px',
        top: '280px'
      },
      star: {
        content: '⭐',
        fontSize: '24px',
        top: '280px'
      },
      diamond: {
        content: '💎',
        fontSize: '24px',
        top: '280px'
      },
      pearl: {
        content: '🦪',
        fontSize: '20px',
        top: '280px'
      },
      crystal: {
        content: '💠',
        fontSize: '24px',
        top: '280px'
      },
      crown: {
        content: '👑',
        fontSize: '28px',
        top: '40px' // Crown goes on head
      }
    };

    const currentAccessory = accessories[dressUpOptions.necklace] || accessories.heart;

    return (
      <div style={{
        position: 'absolute',
        top: currentAccessory.top,
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: currentAccessory.fontSize,
        zIndex: 4,
        textShadow: '0 2px 4px rgba(0,0,0,0.3)',
        animation: 'sparkle 2s ease-in-out infinite'
      }}>
        {currentAccessory.content}
      </div>
    );
  };

  // Princess name and selection indicator
  const renderPrincessIndicator = () => {
    if (!selectedPrincess) return null;

    return (
      <div style={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        fontSize: '20px',
        zIndex: 5,
        animation: 'bounce 2s ease-in-out infinite'
      }}>
        {selectedPrincess.emoji}
      </div>
    );
  };

  return (
    <div style={basePrincessStyle}>
      {renderBasePrincess()}
      {renderHair()}
      {renderLipstick()}
      {renderAccessories()}
      {renderPrincessIndicator()}
      
      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes sparkle {
          0%, 100% { transform: translateX(-50%) scale(1); }
          50% { transform: translateX(-50%) scale(1.1); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </div>
  );
};

export default LayeredPrincess;
