// INSERT in Linkedlist
class Node{
    constructor(data){
        this.prev=null;
        this.data=data;
        this.next=null;
    }
}
class DobulyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }
    // inser from front
    addFromFront(value){
        const node=new Node(value)
        if(!this.head){
            this.head=node;
            this.tail=node;
        }else{
            node.next=this.head;
            this.head.prev=node;
            this.head=node;
        }
        this.size++
    }
    // insert from last
    addFromLast(value){
        const node=new Node(value)
        if(!this.head){
            this.head=node;
            this.tail=node;
        }else{
            this.tail.next=node;
            node.prev=this.tail;
            this.tail=node;
        }
        this.size++
    }
    insertByIndex(value,index){
        if(index==0){
            this.addFromFront(value);
        }else if(index==this.size){
            this.addFromLast(value)
        }
        else if(index < 0 || index > this.size){
            console.log("Invalid Index")
        }else{
            const node=new Node(value)
            let previous=this.head;
            for(let i=0; i<index-1; i++){
                previous=previous.next;
            }
            let pn=previous.next
            previous.next=node;
            node.next=pn;
            pn.prev=node;
            node.prev=previous;
            this.size++
        }
    }    
    print(){
        let curr=this.head;
        let list=[];
        while(curr){
            list.push(curr.data);
            curr=curr.next;
        }
        console.log(list)
    }
}
const ll=new DobulyLinkedList()
ll.addFromFront(1)
ll.addFromFront(2)
ll.addFromFront(3)
ll.addFromFront(4)
ll.addFromFront(5)

ll.insertByIndex(10,5)
ll.print()
console.log(ll.size)
