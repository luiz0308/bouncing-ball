var mcircle = {
  width: 100,
  height: 100,
  x: 500,
  y: 300,
  xspd: 2,
  yspd: 1,
  colr: 0,
  colg: 0,
  colb: 0,
  t: 0,
};

function setup() {
  createCanvas(600, 400);
}

function draw() {
  mcircle.x = mcircle.x + mcircle.xspd;
  mcircle.y = mcircle.y + mcircle.yspd;
  if (mcircle.x >= 600 - mcircle.width / 2) {
    mcircle.xspd = random(-3, 1);
    mcircle.colr = random(0, 255);
    mcircle.colg = random(0, 255);
    mcircle.colb = random(0, 255);
    mcircle.t = mcircle.t + 1;
    print(mcircle.t);
  }
  if (mcircle.x <= 0 + mcircle.width / 2) {
    mcircle.xspd = random(1, 3);
    mcircle.colr = random(0, 255);
    mcircle.colg = random(0, 255);
    mcircle.colb = random(0, 255);
    mcircle.t = mcircle.t + 1;
    print(mcircle.t);
  }
  if (mcircle.y >= 400 - mcircle.width / 2) {
    mcircle.yspd = random(-3, 1);
    mcircle.colr = random(0, 255);
    mcircle.colg = random(0, 255);
    mcircle.colb = random(0, 255);
    mcircle.t = mcircle.t + 1;
    print(mcircle.t);
  }
  if (mcircle.y <= 0 + mcircle.width / 2) {
    mcircle.yspd = random(1, 3);
    mcircle.colr = random(0, 255);
    mcircle.colg = random(0, 255);
    mcircle.colb = random(0, 255);
    mcircle.t = mcircle.t + 1;
    console.log(mcircle.t);
  }
  background(0);
  noStroke();
  fill(mcircle.colr, mcircle.colg, mcircle.colb);
  ellipse(mcircle.x, mcircle.y, mcircle.width, mcircle.height);
}