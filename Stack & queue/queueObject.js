//QUEUE in OBJECT
class Queue{
    constructor(){
        this.items={};
        this.front=0;
        this.rear=0;
    }
    enqueue(value){
        this.items[this.rear]=value
        this.rear++
    }
    dequeue(){
        delete this.items[this.front]
        this.front++
    }
    isEmpty(){
        console.log(this.rear-this.front===0)
    }
    peek(){
        console.log(this.items[this.front])
    }
    print(){
        console.log(this.items)
    }
}

function queueImplemantation(arr){
    const queue=new Queue()
    queue.isEmpty()
    for(let i=0; i<arr.length; i++){
        queue.enqueue(arr[i])
    }
    queue.peek()
    // queue.dequeue()
    // queue.dequeue()
    queue.print()
}
queueImplemantation([10,20,30,40,50])