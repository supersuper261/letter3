var open=false
let x = 1;
let y = 1;
let easing = 0.05;
let rectX = 148
let rectY = 291
let rectW = 104
let rectH = 63

function setup() {
createCanvas(400, 400)
}

function draw() {
  background("#303030")

  //Closed Letter
  noStroke()
  fill("#E0C389")
  rect(rectX, rectY, rectW, rectH)
  fill("#F2E5D2")
  triangle(148, 291, 200, 329, 252, 291)
  
  //Open Letter
  if (open === true) {
    fill("#F2E5D2")
    triangle(148, 291, 200, 250, 252, 291);

    let targetX = mouseX;
    let dx = targetX - x;
    x += dx * easing;

    let targetY = mouseY;
    let dy = targetY - y;
    y += dy * easing;
    
    fill("#981C26");
    ellipse(x, y, 20, 20);
    ellipse(x+16.6, y, 20, 20);
    triangle(x+24.6, y+6, x+8.4, y+23, x-8, y+6);
  }
}

function mouseClicked() {
  if (open === false) {
    if(mouseX > rectX &&
       mouseX < rectX +rectW &&
       mouseY > rectY && 
       mouseY < rectY + rectH) 
      {open = true}
  } else {
    open = false
  }
}
