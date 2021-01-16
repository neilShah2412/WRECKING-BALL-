class Ball {
  constructor(x, y, r, angle) {
    var options = { 
      density: 1, 
      frictionAir: 0.005};

    this.body = Bodies.circle(x, y,r, options);
    this.r = r ;
    World.add(world, this.body);
  }

  display() {
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    fill("blue")
    ellipse(0, 0, this.r,this.r);
    pop();
  }
}
