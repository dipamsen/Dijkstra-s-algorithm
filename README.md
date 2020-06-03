# Dijkstra's algorithm implementation on p5.js
Dijkstra's algorithm is an algorithm for finding the shortest paths between nodes in a graph, which may represent, for example, road networks. It was conceived by computer scientist Edsger W. Dijkstra in 1956 and published three years later. [Wikipedia](https://en.wikipedia.org/wiki/Dijkstra's_algorithm)
_____

### Learn More about this algorithm
- [Exact Algorithm](https://en.wikipedia.org/wiki/Dijkstra's_algorithm#Algorithm)
- [Description](https://en.wikipedia.org/wiki/Dijkstra's_algorithm#Description)

### How to Use this Program

OUTPUT: https://dipamsen.github.io/Dijkstra-s-algorithm/index.html (This will give error on running)

This is an interactive version of this implementation which uses URL Parameters for accessing the positions and routes of cities and roads.  
Hence to run it, JSON file with the above info, i.e. 'map' file is required.

Some example maps have been published in [this repo](https://github.com/dipamsen/Maps-for-Pathfinding) with their raw links in `README.md`.

To use one of the maps, eg. [map1.json](https://github.com/dipamsen/Maps-for-Pathfinding/blob/master/map1.json), we take its raw link from `README.md`  
Raw Map: https://raw.githubusercontent.com/dipamsen/Maps-for-Pathfinding/master/map1.json

To use this map, add this map in the [OUTPUT link](https://dipamsen.github.io/Dijkstra-s-algorithm/index.html) by using `?URL=`  
Example: https://dipamsen.github.io/Dijkstra-s-algorithm/index.html?URL=https://raw.githubusercontent.com/dipamsen/Maps-for-Pathfinding/master/map1.json will use map1 for performing the algorithm.
