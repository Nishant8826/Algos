//Remove In LinkedList
class Node{
    constructor(data){
        this.prev=null;
        this.data=data;
        this.next=null;
    }
}
class DoublyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }
    addFromLast(value){
        const node=new Node(value);
        if(this.head==null){
            this.head=node;
            this.tail=node;
        }else{
            this.tail.next=node;
            node.prev=this.tail;
            this.tail=node;
        }
        this.size++
    }
    removeFromFirst(){
        this.head=this.head.next;
        this.tail=this.tail.next;
        this.head.prev=null
        this.size--
    }
    removeFromLast(){
        this.tail=this.tail.prev
        this.tail.next=null;
        this.size--
    }
    removeByIndex(index){
        let previous=this.head;
        for(let i=0; i<index-1; i++){
            previous=previous.next
        }
        previous.next=previous.next.next;
        previous.next.prev=previous;
        this.size--;
    }
    print(){
        let curr=this.head;
        let list=[];
        while(curr){
            list.push(curr);
            curr=curr.next;
        }
        console.log(list)
    }
}
const ll=new DoublyLinkedList()
ll.addFromLast(1)
ll.addFromLast(2)
ll.addFromLast(3)
ll.addFromLast(4)
ll.addFromLast(5)

// ll.removeFromFirst()
// ll.removeFromLast()

ll.removeByIndex(2)

ll.print()