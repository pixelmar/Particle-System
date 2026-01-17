let particles = [];

function setup() {
  createCanvas(600, 400);
  
}

function draw() {
  background(0);
  let p = new Particle();
  particles.push(p);
  for (let i = 0; i < particles.length; i++) {
    particles[i].show();
    particles[i].update();
  } 
}

class Particle {
  
  constructor() {
    this.x = 300;
    this.y = 380;
    this.vx = random (-1, 1);
    this.vy = random (-5, -1);
  }
  
  finished() {
    pass;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
  }
  show() {
    noStroke();
    fill(255, 10);
    ellipse(this.x, this.y, 16);
  }
  
  
}