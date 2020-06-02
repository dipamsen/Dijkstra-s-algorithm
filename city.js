class City {
  constructor(name, x, y) {
    //This vector stores position values as x and y
    this.pos = createVector(x, y);
    this.name = name;
    this.neighbours = [];
  }
  display() {
    push();
    translate(this.pos);
    strokeWeight(6);
    stroke(255);
    point(0, 0);
    noStroke();
    textStyle(BOLD);
    fill(0, 255, 100);
    textSize(15);
    textAlign(CENTER, CENTER);
    text(this.name, -8, -8);
    pop();
  }
  
  findNeighbours(){
    for (let r of roads){
      if(r.c1==this){
        this.neighbours.push(r.c2);
      } else if (r.c2==this){
        this.neighbours.push(r.c1);
      }
    }
  }
}