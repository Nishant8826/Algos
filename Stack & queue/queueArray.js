//Queue is very usefull data structure in programming. It is similar to the ticket queue outside a cinema hall., where the first person entering the queue is the first person who gets the ticket
//queue is abstract data structure
//queue follows FIFO
/*OPERATION
ENQUEUE : Add an element to the end of queue
DEQUEUE : Remove an element from the front of the queue
isEmpty : check empty
ISFULL : check full
Peek : retrun front value without removing it 
*/

class Queue{
    constructor(){
        this.items=[];
    }
    enqueue(value){
        this.items.push(value)
    }
    dequeue(){
        this.items.shift()
    }
    isEmpty(){
        console.log(this.items.length===0)
    }
    peek(){
        console.log(this.items[this.items.length-1])
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
    queue.print()
    queue.dequeue()
    queue.peek()
    queue.enqueue(10)
    queue.print()
    queue.peek()
}
queueImplemantation([2,3,4,5,6,7])