# Princess Dress-Up

A gentle dress-up game for little ones (about age 4). Pick one of three original princesses (Rose, Luna or Violet) and a castle, then change her dress, dress color, hair, crown, lip color and sparkly extras. When the look is finished, tap Show off to see it in a golden frame and save it as a picture.

Live: https://naadirsoofi.github.io/princess-dressup/

## How to play

- The game opens ready to play, with a princess and castle already chosen.
- Tap a big picture to change something. The princess hops, sparkles burst, and the next step opens by itself.
- Extras (pearls, heart, wand, flowers, wings, bunny) can be stacked, tap as many as you like.
- Surprise me makes a random look. Undo steps back, Start over goes back to the first look.
- Show off opens the photo moment. Save picture downloads a PNG of the finished look.
- Sound is off by default. The speaker button turns on soft synthesized chimes.
- The last look and the sound choice are remembered in the browser (localStorage).

Everything works with a keyboard (Tab, Enter or Space, Escape to close the photo frame), and motion is turned down when the device asks for reduced motion.

## Run locally

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:5532/princess-dressup/

Build and preview the production version:

```bash
npm run build
npm run preview
```

## How it is built

- React 18, Vite 4 and Tailwind CSS 3.
- The princess and the castles are layered inline SVG drawings with solid colors, so every choice redraws instantly and the saved picture is made straight from the same drawing.
- `src/data/options.js` lists the princesses, castles and every option.
- `src/components/Princess.jsx` draws the princess layers (hair, dress, face, crown, extras).
- `src/components/Backdrop.jsx` draws the four castle scenes.
- `src/utils/savePicture.js` turns the scene into a framed PNG.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist` to GitHub Pages.

## License

MIT
