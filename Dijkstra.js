// Dijkstra's algorithm
function getDist(curr, c1) {
  let distance;
  for (let road of roads) {
    if (road.c1 == curr && road.c2 == c1) {
      distance = road.length;
      break;
    } else if (road.c1 == c1 && road.c2 == curr) {
      distance = road.length;
      break;
    }
  }
  if (distance) {
    return distance;
  } else {
    return -1;
  }
}

function updateDist(city, d, curr) {
  let c = India.cities.indexOf(city);
  if (d < distances[c]) {
    distances[c] = d;
    previous[c] = curr;
  }
}

function updateCurr() {
  Math.min.apply(null, distances.slice(visited.length, distances.length))
}
