class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  push(value) {
    const node = new Node(value);
    if (this.head == null) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next != null) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size += 1;
  }
  remove(value){
    if(this.size==0)return null
    else if(this.head.data==value){
      this.head=this.head.next
      this.size-=1
    }else{
      let prev=this.head;
      while(prev.next && prev.next.data!=value){
        prev=prev.next;
      }
      if(prev.next){
        prev.next=prev.next.next
        this.size-=1
      }else return null
    }
  }
  print() {
    let curr = this.head;
    let list = [];
    while (curr) {
      list.push(curr.data);
      curr = curr.next;
    }
    console.log(list);
  }
}

const ll = new LinkedList();
ll.push(2);
ll.push(3);
ll.push(4);
ll.push(5);

ll.remove(2)
// ll.print();
// console.log(ll.size)

function remove(arr,value){
  const ll=new LinkedList()
  for(let i=0; i<arr.length; i++){
    ll.push(arr[i])
  }
  ll.print()
  ll.remove(value)
  ll.print()
}
remove([0,1,2,3,4,5,6],3)