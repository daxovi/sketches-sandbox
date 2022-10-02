const canvasSketch = require('canvas-sketch');
var WebFont = require('webfontloader');

WebFont.load({
  google: {
    families: ['Open Sans', 'Open Sans:700', 'Droid Serif', "Lato"]
  },
  active: function() {fontLoaded();}
});

const settings = {
  dimensions: "A4",
  pixelsPerInch: 300
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = "blue"; 
    context.font = "120px Open Sans";
    context.fillText("Hello world", 0, 200);
  };
};

const fontLoaded = () => { 
  console.log("fonts loaded");
  canvasSketch(sketch, settings);
 }

