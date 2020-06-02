let India;
let roads = [];
let visited = []; //shortest path tree
//this array stores the cities for which shortest path has been found;
let unvisited = []

let distances = [];
let previous = [];
let myTable, arr = [];

let curr;
let myHtml, myP;
//nameSpacing
var A, B, C, D, E, F;
let myData, allCities, allRoads, fetched = false, drawn = false;
async function preload() {
  await fetch(getURLParams().URL)
    .then(response => response.json())
    .then(json => {
      myData = json;
      allCities = myData.cities;
      allRoads = myData.roads;
      fetched = true
    })
    .catch(err => {
      console.log(err);
    noCanvas();
    
      createP(err + '<br>Use correct map url')
    });
}
function setup() {

}


function draw() {
  if (fetched && !drawn) {

    createCanvas(400, 400);
    textFont('monospace');
    myP = createP(myHtml);
    createP('<a href = "https://en.wikipedia.org/wiki/Dijkstra\'s_algorithm#Algorithm">Learn How this works</a>');
    createP('Disclaimer: Not to scale.');
    createP('<a href="https://editor.p5js.org/dipam2006/sketches/zFxhTjOxp">Source Code</a>');
    India = new Country();
    //Using 6 cities for now
    India.addCity(new MyCity('A', allCities.A.x, allCities.A.y));
    India.addCity(new City('B', allCities.B.x, allCities.B.y));
    India.addCity(new City('C', allCities.C.x, allCities.C.y));
    India.addCity(new City('D', allCities.D.x, allCities.D.y));
    India.addCity(new City('E', allCities.E.x, allCities.E.y));
    India.addCity(new City('F', allCities.F.x, allCities.F.y));

    //namespacing
    A = India.cities[0];
    B = India.cities[1];
    C = India.cities[2];
    D = India.cities[3];
    E = India.cities[4];
    F = India.cities[5];

    //creating roads not-so arbitrarily
    roads.push(new Road(India.cities[allRoads.A.c1], India.cities[allRoads.A.c2], allRoads.A.d))
    roads.push(new Road(India.cities[allRoads.B.c1], India.cities[allRoads.B.c2], allRoads.B.d))
    roads.push(new Road(India.cities[allRoads.C.c1], India.cities[allRoads.C.c2], allRoads.C.d))
    roads.push(new Road(India.cities[allRoads.D.c1], India.cities[allRoads.D.c2], allRoads.D.d))
    roads.push(new Road(India.cities[allRoads.E.c1], India.cities[allRoads.E.c2], allRoads.E.d))
    roads.push(new Road(India.cities[allRoads.F.c1], India.cities[allRoads.F.c2], allRoads.F.d))
    roads.push(new Road(India.cities[allRoads.G.c1], India.cities[allRoads.G.c2], allRoads.G.d))
    roads.push(new Road(India.cities[allRoads.H.c1], India.cities[allRoads.H.c2], allRoads.H.d))
    roads.push(new Road(India.cities[allRoads.I.c1], India.cities[allRoads.I.c2], allRoads.I.d))
    roads.push(new Road(India.cities[allRoads.J.c1], India.cities[allRoads.J.c2], allRoads.J.d))

    //unvisited and visited cities
    unvisited = [A, B, C, D, E, F];
    visited = [];

    //Reset the distances to Infinity
    A.resetDistances();

    for (let city of India.cities) {
      city.findNeighbours();
    }


    for (let curr of unvisited) {
      for (let n of curr.neighbours) {
        let currindex = India.cities.indexOf(curr);
        vindex = unvisited.indexOf(curr);
        if (unvisited.includes(n)) {
          let newD = distances[currindex] + getDist(curr, n);
          updateDist(n, newD, curr);
        }
      }
      visited.push(curr);
      unvisited.splice(vindex, 0);
      updateCurr();
    }
    print(distances);
    print(previous);

    arr = [
      [India.cities[0].name, distances[0], null],
      [India.cities[1].name, distances[1], previous[1].name],
      [India.cities[2].name, distances[2], previous[2].name],
      [India.cities[3].name, distances[3], previous[3].name],
      [India.cities[4].name, distances[4], previous[4].name], [India.cities[5].name, distances[5], previous[5].name]]

    myHtml = '<u>OUTPUT</u><br><br>Source: City A.<table><tr><th>City</th><th>Distance</th><th>Via</th></tr><tr><td>' + arr[0][0] + '</td>    <td>' + arr[0][1] + '</td>    <td>' + arr[0][2] + '</td>  </tr>  <tr>    <td>' + arr[1][0] + '</td>    <td>' + arr[1][1] + '</td>    <td>' + arr[1][2] + '</td>  </tr><tr>    <td>' + arr[2][0] + '</td>    <td>' + arr[2][1] + '</td>    <td>' + arr[2][2] + '</td>  </tr><tr>    <td>' + arr[3][0] + '</td>    <td>' + arr[3][1] + '</td>    <td>' + arr[3][2] + '</td>  </tr><tr>    <td>' + arr[4][0] + '</td>    <td>' + arr[4][1] + '</td>    <td>' + arr[4][2] + '</td>  </tr><tr>    <td>' + arr[5][0] + '</td>    <td>' + arr[5][1] + '</td>    <td>' + arr[5][2] + '</td>  </tr></table><br><br><a href="https://www.youtube.com/watch?v=pVfj6mxhdMw">What is this table about?</a>';


    print(arr[0]);
    print(arr[1]);
    print(arr[2]);
    print(arr[3]);
    print(arr[4]);

    background(0);
    myP.html(myHtml);
    for (let city of India.cities) {
      city.display();
    }
    for (let road of roads) {
      road.display();
    }
    drawn = true;
  }

}

