let angle;

function setup() { 
  createCanvas(300, 300);
  slider = createSlider(0, 987, 0, 1);
  slider.position(35, 350);
  slider.style('width', '230px');
} 

function draw() { 
  background(220);
  noFill();
  angle = slider.value() / (50 * PI);
  translate(width / 2, height);
  branch(68);
  
}

function branch(len) {
  curve(-10 * len / 3, len / 3, 0, 0, 0, -len, 10 * len / 3, 2 * len / 3);
  translate(0, -len);
  if (len > 10) {
    push();
    rotate(angle);
    branch(len * 0.75)
    pop();
    push();
    rotate(-angle);
    branch(len * 0.75)
    pop();
    push();
    branch(len * 0.75)
    pop();
  }
  else {
    push();
    noStroke();
    fill(0, 150, 0, 50);
    ellipse(0, 0, 15, 15);
    pop();
  }
}