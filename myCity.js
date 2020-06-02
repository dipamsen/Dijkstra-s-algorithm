//Class for source city
//using inheritance
class MyCity extends City {
  display() {
    push();
    translate(this.pos);
    strokeWeight(6);
    stroke(255);
    point(0, 0);
    noStroke();
    textStyle(BOLD);
    fill(255, 0, 0);
    textSize(25);
    textAlign(CENTER, CENTER);
    text(this.name, -8, -8);
    pop();
  }
  resetDistances(){
    for (let c in India.cities){
      let city = India.cities[c];
      if(city==this){
        distances[c] = 0;
      } else {
      distances[c] = Infinity;
      }
    }
    for (let i = 0; i<India.cities.length; i++){
      previous[i] = 0;
    }
  }
}