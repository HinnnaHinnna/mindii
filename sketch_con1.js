let myFont;
function preload() {
  myFont = loadFont('NanumGothic.ttf');
}
let str = '헬로우';
function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(40);
}

function draw() {
  background(220);

  let unicode = '';
  for (var i = 0; i < str.length; i++) {
    let unitmp = str[i].charCodeAt(0).toString(16);
    let uniint = parseInt(unitmp,16) + 1;
    unicode += String.fromCharCode(uniint);
  }
  str = unicode;

  fill(0);
  text(str, 100, 240);
}
