class Road{
  constructor(c1, c2, d){
    //this takes two cities and distance between them
    //as arguments
    this.x1 = c1.pos.x;
    this.x2 = c2.pos.x;
    this.y1 = c1.pos.y;
    this.y2 = c2.pos.y;
    this.length = d;
    this.c1 = c1;
    this.c2 = c2;
  }
  display(){
    push();
    stroke(255);
    strokeWeight(1);
    line(this.x1, this.y1, this.x2, this.y2);
    noStroke();
    textSize(18)
    fill(255, 100, 0);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text(this.length, (this.x1+this.x2)/2, (this.y1+this.y2)/2);
    pop();
  }
}