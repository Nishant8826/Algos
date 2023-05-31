class Node{
    constructor(data){
        this.prev=null;
        this.data=data;
        this.next=null;
    }
}
class DoblyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }
    append(value) {
        const node = new Node(value);
        if (!this.head) {
          this.head = node;
          this.tail = node;
        } else {
          this.tail.next = node;
          node.prev = this.tail;
          this.tail = node;
        }
        this.size++;
      }
    print(){
        let curr=this.head
        let list=[];
        while(curr){
            list.push(curr)
            curr=curr.next
        }
        console.log(list)
    }
}

const ll=new DoblyLinkedList()
ll.append(2)
ll.append(3)
ll.append(4)
ll.append(5)
ll.append(6)

ll.print()