# Graph 
A graph is a non-linear data structure that consists of a finite number of vertices (also called nodes) connected by edges.

Trees are a specific type of graph data structure.

## Types of Graph
 Based on the characteristics, Graph can be categorized into two types:

- Directed
- Undirected

## Directed Graph
A graph in which the edges have a direction is called Directed Graph.

Edges are usually represented by arrows pointing in the direction, the graph can be traversed
  
## Undirected Graph
A graph in which the edges are bidirectional.

The graph can be traversed in either direction.

## More graph types

- A graph can only have only vertices with no edges.
- Multiple edges from one node
- Cycles in the graph
- Self loops on a node
- Maybe disconnected

## Graph Usage
Graph finds usage in number of real-world applications such as:
- Google Maps : Where cities are represented as vertices and roads as edges to help build the navigation system.
- Social media sites : Where users are represented as vertices and edges are the links between the connections. Facebook, LinkedIn, Instagram all uses graph data structure to show mutual connections, posts suggestions and other recommendations.

## Graph Representation
Graphs are commonly represented in two ways:
- Adjacency matrix
- Adjacency list

## Adjacency Matrix
An adjacency matrix is a 2D array of size `V x V` where V is the number of vertices in the graph. Each row and column represent a vertex. If the value of any element say, matrix[i][j] is 1, it represents that there is an edge connecting vertex i and vertex j.

|  0 | 1   | 2  |
|---|---|---|
|  0 | 1 |  0  |
|  1 |  0 | 1  |
|  0 | 1  |  0 |

``` js
const matrix = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0]
]

console.log(matrix[0][1]);
```

## Adjacent List Representation
```
A => B

B => A,C

C => B
```

`GRAPH`
 
 ```
     B

    /  \

    A   C

```

```js
 // Adjacent list
 const adjacentList = {
    "A" : ["A"],
    "B" : ["A", "C"],
    "C" : ["B"]
 }
 console.log(adjacencyList["A"])
 console.log(adjacencyList["B"])
 console.log(adjacencyList["C"])
```

## pros and Cons to each Representation

With an adjacency list, we only need to store the values for the edges that exist. With adjacency matrix, we store values irrespective of whether an edge exists or not. Storage wise, an adjacency list is say more efficient.

With adjacency list, inserting and finding adjacent nodes is constant time complexity whereas with adjacency matrix, it is linear time complexity.

An adjacency list allows us to store additional values with an edge such as weight of the edge. With adjacency matrix, such information would have to be stored externally.

