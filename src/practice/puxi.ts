import * as PIXI from 'pixi.js';
import * as PUXI from 'puxi.js';

export const puxi = () => {

  console.error('This is currently broken');

  const app = new PIXI.Application();

  // const uxStage = new PUXI.Stage({
  //   width: 512,
  //   height: 512
  // });

  // app.stage.addChild(uxStage);

  // uxStage.addChild(new PUXI.Button({
  //   text: "Hello world!"
  // }));

  // uxStage.addChild(new PUXI.Text({
  //   value: "Click me!"
  // }).setLayoutOptions({
  //   ...new PUXI.FastLayoutOptions({
  //     width: PUXI.LayoutOptions.WRAP_CONTENT, // width
  //     height: 60, // height
  //     x: .5, y: .5, // x, y (center)
  //     anchor: PUXI.FastLayoutOptions.CENTER_ANCHOR // properly center
  //   })
  // }).setPadding(4, 6) // horizontal/vertical padding
  //   .setBackground(0xffaabb) // background color (can use a PIXI.Graphics too)
  //   .setBackgroundAlpha(.5) // alpha for background
  //   .setElevation(2) // drop-shadow on background!
  // );
}