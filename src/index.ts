import * as PIXI from 'pixi.js'

// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container.
const app = new PIXI.Application();

// The application will create a canvas element for you that you
// can then insert into the DOM.
document.body.appendChild(app.view);

let sprite = PIXI.Sprite.from('img/sample.png');

app.stage.addChild(sprite);

let elapsed = 0.0;

app.ticker.add((delta) => {
  // Add the time to our total elapsed time
  elapsed += delta;
  // Update the sprite's X position based on the cosine of our elapsed time.  We divide
  // by 50 to slow the animation down a bit...
  sprite.x = 100.0 + Math.cos(elapsed / 50.0) * 100.0;
  // sprite.y = 100.0 + Math.cos(elapsed / 50.0) * 100.0
});
