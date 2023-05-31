class Node{
    constructor(data){
        this.data=data;
        this.prev=null;
        this.next=null;
    }
}
class DoblyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }
    prepend(value){
        const node=new Node(value)
        if(!this.head){
            this.head=node;
            this.tail=node;
        }else{
            node.next=this.head;
            this.head.prev=node;
            this.head=node
        }
        this.size++
    }
    print(){
        let list=[];
        let curr=this.head
        while(curr){
            list.push(curr);
            curr=curr.next;
        }
        console.log(list)
    }
}

const ll=new DoblyLinkedList()
ll.prepend(2)
ll.prepend(3)
ll.prepend(4)


ll.print()