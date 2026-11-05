import { sparklePath } from '../components/shapes';

const W = 800;
const H = 1000;
const PAD = 48;
const CAPTION = 110;

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('Picture could not be drawn'));
    img.src = url;
  });
}

function framePath(ctx, x, y, w, h, r) {
  ctx.beginPath();
  if (ctx.roundRect) ctx.roundRect(x, y, w, h, r);
  else ctx.rect(x, y, w, h);
}

// Draws the scene SVG into a framed PNG and starts a download.
export async function savePicture(svg, { fileName, caption }) {
  const clone = svg.cloneNode(true);
  clone.setAttribute('width', String(W));
  clone.setAttribute('height', String(H));
  const xml = new XMLSerializer().serializeToString(clone);
  const svgUrl = URL.createObjectURL(new Blob([xml], { type: 'image/svg+xml;charset=utf-8' }));

  try {
    const img = await loadImage(svgUrl);
    const canvas = document.createElement('canvas');
    canvas.width = W + PAD * 2;
    canvas.height = H + PAD * 2 + CAPTION;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#FFF7EC';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    framePath(ctx, PAD, PAD, W, H, 36);
    ctx.clip();
    ctx.drawImage(img, PAD, PAD, W, H);
    ctx.restore();

    ctx.lineWidth = 18;
    ctx.strokeStyle = '#F2B33D';
    framePath(ctx, PAD, PAD, W, H, 36);
    ctx.stroke();

    ctx.fillStyle = '#C42D6B';
    [[PAD, PAD, 26], [PAD + W, PAD, 26], [PAD, PAD + H, 26], [PAD + W, PAD + H, 26]].forEach(([x, y, r]) => {
      ctx.fill(new Path2D(sparklePath(x, y, r)));
    });

    if (document.fonts) await document.fonts.ready;
    ctx.fillStyle = '#35214F';
    ctx.font = '600 50px Fredoka, "Trebuchet MS", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(caption, canvas.width / 2, H + PAD * 2 + CAPTION / 2 - 10);

    const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));
    if (!blob) throw new Error('Picture could not be made');
    const pngUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = pngUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(pngUrl), 2000);
  } finally {
    URL.revokeObjectURL(svgUrl);
  }
}
