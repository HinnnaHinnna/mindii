let oscs = [];

function setup() {
  createCanvas(5, 5);
}


function word(number) {

  if (number==1) {
    let osc = new p5.Oscillator('sine');
    osc.start();
    osc.amp(0, 5.5);
    osc.freq(440);
    oscs.push(osc);
  } else  if (number==2) {
    let osc = new p5.Oscillator('triangle');
    osc.start();
    osc.amp(0, 1.5);
    osc.freq(240);
    oscs.push(osc);
  } else  if (number==3) {
    let osc = new p5.Oscillator('sawtooth');
    osc.start();
    osc.amp(0, 1.5);
    osc.freq(740);
    oscs.push(osc);
  } else  if (number==4) {
    let osc = new p5.Oscillator('square');
    osc.start();
    osc.amp(0, 1.5);
    osc.freq(540);
    oscs.push(osc);
  }

}
