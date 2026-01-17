
let particles = [];

function setup() {
  createCanvas(600, 400);
  
}

function draw() {
  background(0);
  let p = new Particle();
  particles.push(p)
  for (let i = 0; i < particles.length; i++) {
    particles[i].show()
    particles[i].update()
    if (particles[i].finished())
      //remove this particle
      particles.splice(i, 1);
  } 
}

class Particle {
  
  constructor() {
    this.x = 300;
    this.y = 380;
    this.vx = random (-1, 1);
    this.vy = random (-5, -1);
    this.alpha = 255;
  }
  
  finished() {
    return this.alpha < 0;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 5;
  }
  show() {
    stroke(255, 0);
    fill(255, this.alpha);
    ellipse(this.x, this.y, 16);
  }
  
  
}