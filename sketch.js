
let penguin;
let uImg;
let tImg;
let bImg;
let icebergs = [];
let soundClassifier;

function preload() {
  const options = {
    probabilityThreshold: 0.95
  };
  soundClassifier = ml5.soundClassifier('SpeechCommands18w', options);
  uImg = loadImage('Penguin.png');
  tImg = loadImage('ice.png');
  bImg = loadImage('background.jpg');

}

function mousePressed() {
  iebergs.push(new Iceberg());
}

function setup() {
  createCanvas(1400, 450);
  penguin = new Penguin();
  soundClassifier.classify(gotCommand);
}

function gotCommand(error, results) {
  if (error) {
    console.error(error);
  }
  console.log(results[0].label, results[0].confidence);
  if (results[0].label == 'up') {
    penguin.jump();
  }
}

function keyPressed() {
  if (key == ' ') {
    penguin.jump();
  }
}

function draw() {

  if (random(1) < 0.005) {
    icebergs.push(new Iceberg());
  }

  background(bImg);
  for (let t of icebergs) {
    t.move();
    t.show();
    if (penguin.hits(t)) {
      alert('Game Over');
      noLoop();
    }
  }

  penguin.show();
  penguin.move();
}