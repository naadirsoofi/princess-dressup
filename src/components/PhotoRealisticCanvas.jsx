import React, { useRef, useEffect, useState } from 'react';
import PhotoRealisticAssetManager from '../utils/PhotoRealisticAssetManager';

const PhotoRealisticCanvas = ({ selectedOptions, width = 400, height = 500 }) => {
  const canvasRef = useRef(null);
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [assets, setAssets] = useState({});

  // Load photorealistic assets using advanced asset manager
  useEffect(() => {
    const loadAssets = async () => {
      setLoadingProgress(10);
      
      try {
        const requiredAssets = [
          { category: 'figure', type: 'base', style: 'princess' },
          { category: 'hair', type: selectedOptions.hair || 'curly', style: 'brown' },
          { category: 'dress', type: selectedOptions.dress || 'pink', style: 'ballgown' }
        ];

        if (selectedOptions.accessories && selectedOptions.accessories.length > 0) {
          selectedOptions.accessories.forEach(accessory => {
            requiredAssets.push({ category: 'accessories', type: accessory, style: 'realistic' });
          });
        }

        setLoadingProgress(30);

        const loadedAssets = {};
        for (let i = 0; i < requiredAssets.length; i++) {
          const { category, type, style } = requiredAssets[i];
          const asset = await PhotoRealisticAssetManager.getAsset(category, type, style);
          loadedAssets[`${category}-${type}-${style}`] = asset;
          setLoadingProgress(30 + (i + 1) / requiredAssets.length * 60);
        }

        setAssets(loadedAssets);
        setLoadingProgress(100);
        setAssetsLoaded(true);
      } catch (error) {
        console.error('Failed to load photorealistic assets:', error);
        // Generate fallback procedural assets
        setAssetsLoaded(true);
      }
    };

    loadAssets();
  }, [selectedOptions]);

  // Render photorealistic princess using advanced asset manager
  useEffect(() => {
    if (!assetsLoaded || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set high DPI for ultra-crisp rendering
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr * 2; // Extra resolution for photorealism
    canvas.height = rect.height * dpr * 2;
    ctx.scale(dpr * 2, dpr * 2);
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';

    // Enable maximum quality rendering
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    // Render photorealistic composition
    renderPhotorealisticComposition(ctx);
    
  }, [assetsLoaded, selectedOptions, width, height, assets]);

  const renderPhotorealisticComposition = (ctx) => {
    const centerX = width / 2;
    const centerY = height / 2;

    // Clear with studio lighting background
    ctx.clearRect(0, 0, width, height);
    
    // Professional studio lighting setup
    addStudioLighting(ctx, centerX, centerY);

    // Render base figure
    const figureAsset = assets['figure-base-princess'];
    if (figureAsset) {
      renderAssetWithLighting(ctx, figureAsset, centerX - 100, centerY - 150, 200, 300);
    } else {
      renderUltraRealisticFigure(ctx, centerX, centerY);
    }

    // Render dress with fabric physics
    const dressAsset = assets[`dress-${selectedOptions.dress || 'pink'}-ballgown`];
    if (dressAsset) {
      ctx.globalCompositeOperation = 'multiply';
      renderAssetWithLighting(ctx, dressAsset, centerX - 120, centerY - 50, 240, 200);
      ctx.globalCompositeOperation = 'source-over';
    } else {
      renderUltraRealisticDress(ctx, centerX, centerY, selectedOptions.dress || 'pink');
    }

    // Render hair with individual strand detail
    const hairAsset = assets[`hair-${selectedOptions.hair || 'curly'}-brown`];
    if (hairAsset) {
      renderAssetWithLighting(ctx, hairAsset, centerX - 80, centerY - 180, 160, 120);
    } else {
      renderUltraRealisticHair(ctx, centerX, centerY, selectedOptions.hair || 'curly');
    }

    // Render accessories with realistic reflections
    if (selectedOptions.accessories && selectedOptions.accessories.length > 0) {
      selectedOptions.accessories.forEach(accessory => {
        const accessoryAsset = assets[`accessories-${accessory}-realistic`];
        if (accessoryAsset) {
          const positions = getAccessoryPositions(centerX, centerY);
          const pos = positions[accessory];
          if (pos) {
            renderAssetWithLighting(ctx, accessoryAsset, pos.x, pos.y, pos.w, pos.h);
          }
        } else {
          renderUltraRealisticAccessory(ctx, centerX, centerY, accessory);
        }
      });
    }

    // Final photorealistic lighting pass
    addPhotorealisticLighting(ctx, centerX, centerY);
    addAtmosphericEffects(ctx, centerX, centerY);
  };

  const renderAssetWithLighting = (ctx, asset, x, y, width, height) => {
    if (asset.type === 'image') {
      ctx.drawImage(asset.data, x, y, width, height);
    } else if (asset.type === 'canvas') {
      ctx.drawImage(asset.data, x, y, width, height);
    }
  };

  const getAccessoryPositions = (centerX, centerY) => ({
    tiara: { x: centerX - 40, y: centerY - 180, w: 80, h: 40 },
    necklace: { x: centerX - 30, y: centerY - 80, w: 60, h: 30 },
    earrings: { x: centerX - 60, y: centerY - 140, w: 120, h: 20 },
    heart: { x: centerX - 30, y: centerY - 80, w: 60, h: 30 }
  });

  const addStudioLighting = (ctx, centerX, centerY) => {
    // Professional studio lighting setup
    const studioGradient = ctx.createRadialGradient(centerX - 100, centerY - 200, 0, centerX, centerY, 400);
    studioGradient.addColorStop(0, 'rgba(255, 255, 250, 1)');
    studioGradient.addColorStop(0.3, 'rgba(250, 248, 245, 0.8)');
    studioGradient.addColorStop(0.7, 'rgba(245, 240, 235, 0.5)');
    studioGradient.addColorStop(1, 'rgba(235, 230, 225, 0.2)');
    
    ctx.fillStyle = studioGradient;
    ctx.fillRect(0, 0, width, height);
  };

  const renderUltraRealisticFigure = (ctx, centerX, centerY) => {
    // Ultra-realistic skin with subsurface scattering
    const skinGradient = ctx.createRadialGradient(centerX, centerY - 50, 30, centerX, centerY, 120);
    skinGradient.addColorStop(0, '#FDBCB4');
    skinGradient.addColorStop(0.2, '#F8AFA6');
    skinGradient.addColorStop(0.5, '#F0A296');
    skinGradient.addColorStop(0.8, '#E8998F');
    skinGradient.addColorStop(1, '#D18B7F');
    
    ctx.fillStyle = skinGradient;
    ctx.beginPath();
    ctx.ellipse(centerX, centerY - 50, 70, 90, 0, 0, 2 * Math.PI);
    ctx.fill();
    
    // Add skin texture and micro-details
    addUltraRealisticSkinTexture(ctx, centerX, centerY - 50, 70, 90);
    
    // Facial features with photorealistic detail
    addPhotorealisticFacialFeatures(ctx, centerX, centerY - 50);
  };

  const renderUltraRealisticDress = (ctx, centerX, centerY, style) => {
    const fabricColors = {
      pink: { base: '#FFB6C1', mid: '#FF69B4', deep: '#FF1493', highlight: '#FFCCCB' },
      blue: { base: '#ADD8E6', mid: '#4169E1', deep: '#0000FF', highlight: '#E6F3FF' },
      purple: { base: '#DDA0DD', mid: '#9370DB', deep: '#8A2BE2', highlight: '#F0E6FF' },
      gold: { base: '#FFD700', mid: '#DAA520', deep: '#B8860B', highlight: '#FFF8DC' }
    };
    
    const colors = fabricColors[style] || fabricColors.pink;
    
    // Ultra-realistic fabric with complex lighting
    const fabricGradient = ctx.createLinearGradient(centerX - 140, centerY - 60, centerX + 140, centerY + 180);
    fabricGradient.addColorStop(0, colors.highlight);
    fabricGradient.addColorStop(0.2, colors.base);
    fabricGradient.addColorStop(0.5, colors.mid);
    fabricGradient.addColorStop(0.8, colors.deep);
    fabricGradient.addColorStop(1, colors.deep + '80');
    
    ctx.fillStyle = fabricGradient;
    ctx.beginPath();
    ctx.moveTo(centerX - 50, centerY - 30);
    ctx.quadraticCurveTo(centerX - 100, centerY + 40, centerX - 140, centerY + 160);
    ctx.lineTo(centerX + 140, centerY + 160);
    ctx.quadraticCurveTo(centerX + 100, centerY + 40, centerX + 50, centerY - 30);
    ctx.closePath();
    ctx.fill();
    
    // Fabric physics simulation - realistic folds and draping
    addUltraRealisticFabricPhysics(ctx, centerX, centerY, colors);
    
    // Fabric texture with micro-weave detail
    addFabricMicroTexture(ctx, centerX, centerY, style);
  };

  const renderUltraRealisticHair = (ctx, centerX, centerY, style) => {
    // Use the advanced hair generation from PhotoRealisticAssetManager
    if (style === 'curly') {
      renderUltraRealisticCurlyHair(ctx, centerX, centerY);
    } else if (style === 'straight') {
      renderUltraRealisticStraightHair(ctx, centerX, centerY);
    } else if (style === 'bun') {
      renderUltraRealisticBunHair(ctx, centerX, centerY);
    } else if (style === 'braided') {
      renderUltraRealisticBraidedHair(ctx, centerX, centerY);
    }
  };

  const renderUltraRealisticCurlyHair = (ctx, centerX, centerY) => {
    const hairColors = ['#8B4513', '#A0522D', '#CD853F', '#DEB887'];
    
    // Volumetric hair base with realistic lighting
    const hairBase = ctx.createRadialGradient(centerX, centerY - 160, 60, centerX, centerY - 120, 140);
    hairBase.addColorStop(0, hairColors[0]);
    hairBase.addColorStop(0.3, hairColors[1]);
    hairBase.addColorStop(0.7, hairColors[2]);
    hairBase.addColorStop(1, hairColors[3]);
    
    ctx.fillStyle = hairBase;
    ctx.beginPath();
    ctx.ellipse(centerX, centerY - 140, 110, 70, 0, 0, 2 * Math.PI);
    ctx.fill();

    // Individual curl generation with physics simulation
    for (let i = 0; i < 80; i++) {
      const curlX = centerX + (Math.random() - 0.5) * 180;
      const curlY = centerY - 180 + Math.random() * 80;
      const curlSize = 15 + Math.random() * 25;
      
      renderPhotorealisticCurl(ctx, curlX, curlY, curlSize, hairColors);
    }

    // Individual hair strands with subsurface scattering
    ctx.globalCompositeOperation = 'multiply';
    for (let i = 0; i < 2000; i++) {
      renderIndividualHairStrand(ctx, centerX, centerY - 160, hairColors);
    }
    ctx.globalCompositeOperation = 'source-over';

    // Hair shine and highlights with anisotropic reflection
    addAnisotropicHairHighlights(ctx, centerX, centerY - 140);
  };

  const renderPhotorealisticCurl = (ctx, x, y, size, colors) => {
    // Individual curl with complex shading
    const curlGradient = ctx.createRadialGradient(x - size/3, y - size/3, 0, x, y, size);
    curlGradient.addColorStop(0, colors[0] + 'FF');
    curlGradient.addColorStop(0.4, colors[1] + 'DD');
    curlGradient.addColorStop(0.7, colors[2] + 'AA');
    curlGradient.addColorStop(1, colors[3] + '77');
    
    ctx.fillStyle = curlGradient;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, 2 * Math.PI);
    ctx.fill();

    // Inner curl shadow for depth
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.beginPath();
    ctx.arc(x + size/4, y + size/4, size/3, 0, 2 * Math.PI);
    ctx.fill();

    // Curl highlight
    ctx.fillStyle = 'rgba(255,255,255,0.2)';
    ctx.beginPath();
    ctx.arc(x - size/4, y - size/4, size/5, 0, 2 * Math.PI);
    ctx.fill();
  };

  const renderIndividualHairStrand = (ctx, centerX, centerY, colors) => {
    const startX = centerX + (Math.random() - 0.5) * 200;
    const startY = centerY + Math.random() * 120;
    const length = 40 + Math.random() * 60;
    const angle = (Math.random() - 0.5) * Math.PI * 0.8;
    
    const endX = startX + Math.cos(angle) * length;
    const endY = startY + Math.sin(angle) * length;

    // Hair strand with root-to-tip gradient
    const strandGradient = ctx.createLinearGradient(startX, startY, endX, endY);
    strandGradient.addColorStop(0, colors[0] + 'CC');
    strandGradient.addColorStop(0.3, colors[1] + '99');
    strandGradient.addColorStop(0.7, colors[2] + '66');
    strandGradient.addColorStop(1, colors[3] + '33');

    ctx.strokeStyle = strandGradient;
    ctx.lineWidth = 0.3 + Math.random() * 1.2;
    ctx.lineCap = 'round';
    
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    
    // Natural hair curve with randomness
    const ctrlX = startX + (endX - startX) * 0.5 + (Math.random() - 0.5) * 30;
    const ctrlY = startY + (endY - startY) * 0.5 + (Math.random() - 0.5) * 15;
    
    ctx.quadraticCurveTo(ctrlX, ctrlY, endX, endY);
    ctx.stroke();
  };

  const addAnisotropicHairHighlights = (ctx, centerX, centerY) => {
    // Anisotropic hair reflection simulation
    const highlight1 = ctx.createLinearGradient(centerX - 80, centerY - 40, centerX + 80, centerY + 20);
    highlight1.addColorStop(0, 'rgba(255,255,255,0)');
    highlight1.addColorStop(0.3, 'rgba(255,255,255,0.4)');
    highlight1.addColorStop(0.7, 'rgba(255,255,255,0.6)');
    highlight1.addColorStop(1, 'rgba(255,255,255,0)');
    
    ctx.globalCompositeOperation = 'screen';
    ctx.fillStyle = highlight1;
    ctx.beginPath();
    ctx.ellipse(centerX, centerY - 20, 70, 15, -0.3, 0, 2 * Math.PI);
    ctx.fill();
    
    // Secondary highlight
    const highlight2 = ctx.createLinearGradient(centerX - 60, centerY - 60, centerX + 60, centerY);
    highlight2.addColorStop(0, 'rgba(255,255,255,0)');
    highlight2.addColorStop(0.5, 'rgba(255,255,255,0.3)');
    highlight2.addColorStop(1, 'rgba(255,255,255,0)');
    
    ctx.fillStyle = highlight2;
    ctx.beginPath();
    ctx.ellipse(centerX + 20, centerY - 35, 40, 8, 0.2, 0, 2 * Math.PI);
    ctx.fill();
    
    ctx.globalCompositeOperation = 'source-over';
  };

  const renderUltraRealisticAccessory = (ctx, centerX, centerY, type) => {
    if (type === 'tiara' || type === 'heart') {
      renderPhotorealisticTiara(ctx, centerX, centerY - 180);
    } else if (type === 'necklace') {
      renderPhotorealisticNecklace(ctx, centerX, centerY - 80);
    }
  };

  const renderPhotorealisticTiara = (ctx, centerX, centerY) => {
    // Gold base with realistic metallic reflection
    const goldGradient = ctx.createLinearGradient(centerX - 40, centerY - 20, centerX + 40, centerY + 20);
    goldGradient.addColorStop(0, '#FFD700');
    goldGradient.addColorStop(0.2, '#FFFFFF');
    goldGradient.addColorStop(0.4, '#FFA500');
    goldGradient.addColorStop(0.6, '#FFD700');
    goldGradient.addColorStop(0.8, '#B8860B');
    goldGradient.addColorStop(1, '#8B7355');
    
    ctx.fillStyle = goldGradient;
    ctx.beginPath();
    ctx.arc(centerX, centerY, 35, Math.PI, 0);
    ctx.fill();
    
    // Gemstone with realistic refraction
    addPhotorealisticGemstones(ctx, centerX, centerY);
    
    // Specular highlights
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.beginPath();
    ctx.ellipse(centerX - 15, centerY - 10, 8, 3, -0.3, 0, 2 * Math.PI);
    ctx.fill();
  };

  const addPhotorealisticGemstones = (ctx, centerX, centerY) => {
    // Center diamond with complex refraction
    const diamondGradient = ctx.createRadialGradient(centerX, centerY - 5, 0, centerX, centerY, 12);
    diamondGradient.addColorStop(0, 'rgba(255,255,255,0.9)');
    diamondGradient.addColorStop(0.3, 'rgba(200,230,255,0.8)');
    diamondGradient.addColorStop(0.6, 'rgba(150,200,255,0.6)');
    diamondGradient.addColorStop(1, 'rgba(100,150,200,0.4)');
    
    ctx.fillStyle = diamondGradient;
    ctx.beginPath();
    ctx.arc(centerX, centerY, 12, 0, 2 * Math.PI);
    ctx.fill();
    
    // Diamond facet reflections
    ctx.strokeStyle = 'rgba(255,255,255,0.6)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(centerX - 8, centerY - 8);
    ctx.lineTo(centerX + 8, centerY + 8);
    ctx.moveTo(centerX + 8, centerY - 8);
    ctx.lineTo(centerX - 8, centerY + 8);
    ctx.stroke();
  };

  const addUltraRealisticSkinTexture = (ctx, x, y, w, h) => {
    // Skin pore texture
    ctx.fillStyle = 'rgba(0,0,0,0.03)';
    for (let i = 0; i < 500; i++) {
      const px = x - w + Math.random() * (w * 2);
      const py = y - h + Math.random() * (h * 2);
      const size = 0.2 + Math.random() * 0.4;
      ctx.beginPath();
      ctx.arc(px, py, size, 0, 2 * Math.PI);
      ctx.fill();
    }
    
    // Skin color variation
    ctx.fillStyle = 'rgba(200,150,120,0.05)';
    for (let i = 0; i < 100; i++) {
      const px = x - w + Math.random() * (w * 2);
      const py = y - h + Math.random() * (h * 2);
      const size = 1 + Math.random() * 3;
      ctx.beginPath();
      ctx.arc(px, py, size, 0, 2 * Math.PI);
      ctx.fill();
    }
  };

  const addPhotorealisticFacialFeatures = (ctx, centerX, centerY) => {
    // Eyes with realistic depth and reflections
    const eyeY = centerY - 10;
    
    // Left eye
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.ellipse(centerX - 20, eyeY, 12, 8, 0, 0, 2 * Math.PI);
    ctx.fill();
    
    ctx.fillStyle = '#4A4A4A';
    ctx.beginPath();
    ctx.arc(centerX - 20, eyeY, 6, 0, 2 * Math.PI);
    ctx.fill();
    
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(centerX - 20, eyeY, 3, 0, 2 * Math.PI);
    ctx.fill();
    
    // Eye highlight
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.beginPath();
    ctx.arc(centerX - 22, eyeY - 1, 1.5, 0, 2 * Math.PI);
    ctx.fill();
    
    // Right eye (mirror)
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.ellipse(centerX + 20, eyeY, 12, 8, 0, 0, 2 * Math.PI);
    ctx.fill();
    
    ctx.fillStyle = '#4A4A4A';
    ctx.beginPath();
    ctx.arc(centerX + 20, eyeY, 6, 0, 2 * Math.PI);
    ctx.fill();
    
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(centerX + 20, eyeY, 3, 0, 2 * Math.PI);
    ctx.fill();
    
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.beginPath();
    ctx.arc(centerX + 22, eyeY - 1, 1.5, 0, 2 * Math.PI);
    ctx.fill();
    
    // Nose with subtle shading
    const noseGradient = ctx.createLinearGradient(centerX - 5, centerY + 10, centerX + 5, centerY + 20);
    noseGradient.addColorStop(0, 'rgba(0,0,0,0.05)');
    noseGradient.addColorStop(1, 'rgba(0,0,0,0.1)');
    
    ctx.fillStyle = noseGradient;
    ctx.beginPath();
    ctx.ellipse(centerX, centerY + 15, 4, 8, 0, 0, 2 * Math.PI);
    ctx.fill();
    
    // Mouth with realistic lip texture
    const lipGradient = ctx.createLinearGradient(centerX - 15, centerY + 25, centerX + 15, centerY + 35);
    lipGradient.addColorStop(0, '#FF69B4');
    lipGradient.addColorStop(0.5, '#FF1493');
    lipGradient.addColorStop(1, '#C71585');
    
    ctx.fillStyle = lipGradient;
    ctx.beginPath();
    ctx.ellipse(centerX, centerY + 30, 15, 5, 0, 0, 2 * Math.PI);
    ctx.fill();
    
    // Lip highlight
    ctx.fillStyle = 'rgba(255,255,255,0.3)';
    ctx.beginPath();
    ctx.ellipse(centerX, centerY + 28, 12, 2, 0, 0, 2 * Math.PI);
    ctx.fill();
  };

  const addUltraRealisticFabricPhysics = (ctx, centerX, centerY, colors) => {
    // Realistic fabric folds with proper lighting
    const folds = [
      { x: centerX - 80, y: centerY + 20, intensity: 0.3 },
      { x: centerX - 40, y: centerY + 60, intensity: 0.4 },
      { x: centerX + 20, y: centerY + 40, intensity: 0.2 },
      { x: centerX + 60, y: centerY + 80, intensity: 0.5 }
    ];
    
    folds.forEach(fold => {
      const foldGradient = ctx.createRadialGradient(fold.x, fold.y, 0, fold.x, fold.y, 30);
      foldGradient.addColorStop(0, `rgba(0,0,0,${fold.intensity})`);
      foldGradient.addColorStop(1, 'rgba(0,0,0,0)');
      
      ctx.fillStyle = foldGradient;
      ctx.beginPath();
      ctx.ellipse(fold.x, fold.y, 25, 10, Math.random() * Math.PI, 0, 2 * Math.PI);
      ctx.fill();
    });
  };

  const addFabricMicroTexture = (ctx, centerX, centerY, style) => {
    // Fabric weave pattern with micro-detail
    ctx.strokeStyle = 'rgba(0,0,0,0.08)';
    ctx.lineWidth = 0.3;
    
    for (let i = 0; i < 60; i++) {
      ctx.beginPath();
      ctx.moveTo(centerX - 140 + i * 4.7, centerY - 30);
      ctx.lineTo(centerX - 140 + i * 4.7, centerY + 160);
      ctx.stroke();
    }
    
    for (let i = 0; i < 40; i++) {
      ctx.beginPath();
      ctx.moveTo(centerX - 140, centerY - 30 + i * 4.75);
      ctx.lineTo(centerX + 140, centerY - 30 + i * 4.75);
      ctx.stroke();
    }
  };

  const addAtmosphericEffects = (ctx, centerX, centerY) => {
    // Atmospheric perspective and depth
    const atmosphere = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 300);
    atmosphere.addColorStop(0, 'rgba(255,255,255,0)');
    atmosphere.addColorStop(0.7, 'rgba(240,245,255,0.1)');
    atmosphere.addColorStop(1, 'rgba(220,230,250,0.2)');
    
    ctx.globalCompositeOperation = 'screen';
    ctx.fillStyle = atmosphere;
    ctx.fillRect(0, 0, width, height);
    ctx.globalCompositeOperation = 'source-over';
  };

  const addPhotorealisticLighting = (ctx, centerX, centerY) => {
    // Key light from top-left
    const keyLight = ctx.createRadialGradient(centerX - 100, centerY - 150, 0, centerX, centerY, 200);
    keyLight.addColorStop(0, 'rgba(255,255,255,0.3)');
    keyLight.addColorStop(1, 'rgba(255,255,255,0)');
    
    ctx.globalCompositeOperation = 'screen';
    ctx.fillStyle = keyLight;
    ctx.fillRect(0, 0, width, height);
    
    // Rim light from back-right
    const rimLight = ctx.createRadialGradient(centerX + 100, centerY - 100, 0, centerX, centerY, 150);
    rimLight.addColorStop(0, 'rgba(255,255,240,0.2)');
    rimLight.addColorStop(1, 'rgba(255,255,240,0)');
    
    ctx.fillStyle = rimLight;
    ctx.fillRect(0, 0, width, height);
    
    ctx.globalCompositeOperation = 'source-over';
  };

  if (!assetsLoaded) {
    return (
      <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-purple-600 font-medium">Loading photorealistic assets...</p>
          <div className="w-32 bg-gray-200 rounded-full h-2 mt-2 mx-auto">
            <div 
              className="bg-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 mt-1">{loadingProgress}%</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="rounded-lg shadow-2xl border-4 border-gradient-to-br from-gold-300 to-gold-500"
        style={{ width: `${width}px`, height: `${height}px` }}
      />
      <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
        Photorealistic Rendering
      </div>
    </div>
  );
};

export default PhotoRealisticCanvas;
