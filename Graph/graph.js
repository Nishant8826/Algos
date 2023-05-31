class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.adjList = new Map();
  }
  addVertex(v) {
    this.adjList.set(v, []);
  }
  addEdge(v, w) {
    this.adjList.get(v).push(w);
  }
  printGraph(){
    let get_keys=this.adjList.keys()
    for(let i of get_keys){
        let get_value=this.adjList.get(i);
        let conc=""

        for(let j of get_value){
            conc+=j," "
        }
        console.log(i+"-->"+)
    }
  }
}

let g=new Graph(6)
let vertices=["A","B","C","D","E","F"]

g.addEdge("A","B")
g.addEdge("A","D")
g.addEdge("A","E")
g.addEdge("B","F")
g.addEdge("E","D")
g.addEdge("E","B")
g.addEdge("E","C")

g.printGraph()