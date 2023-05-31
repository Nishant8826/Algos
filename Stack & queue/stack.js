//stack
// A Stack is linear data structure tht follows the principle of LIFO.
//basic operation
// PUSH   : add element
// POP    : remove from top of stack
//isEmpty : Check if stck is empty
//isFull  : Check if the stack is full
//peek    : get the vlue of the top element without removing it


class Stack{
    constructor(){
        this.items=[];
    }
    push(value){
        this.items.push(value)
    }
    pop(){
        this.items.pop()
    }
    peek(){
        console.log(this.items[this.items.length-1])
    }
    isEmpty(){
        console.log(this.items.length===0)
    }
    reverse(){
        let em=[]
        for(let i=0;i<this.items.length; i++){
            em.push(this.items.pop())
        }
        console.log(em)
    }
    print(){
        console.log(this.items)
    }
}


function stackImplementation(arr){
    const stack=new Stack()
    stack.isEmpty()
    for(let i=0; i<arr.length; i++){
        stack.push(arr[i])
    }
    stack.print()
    // stack.peek()

    // stack.pop()

    // stack.print()
    // stack.peek()
    stack.reverse()
}
stackImplementation([1,2,3,4,5,6])

