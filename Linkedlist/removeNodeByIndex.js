class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
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
  remove(index){
    if(index<0 || index>=this.size){
        console.log("Invalid Index");
    }else if(index==0){
        this.head=this.head.next;
    }else{
        let prev=this.head;
        for(let i=0; i<index-1; i++){
            prev=prev.next
        }
        prev.next=prev.next.next
    }
    this.size-=1
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

// const ll = new LinkedList();
// ll.push(2);
// ll.push(3);
// ll.push(4);
// ll.push(5);
// ll.push(6);

// ll.print();
// console.log(ll.size);

// ll.remove(0)
// ll.remove(0)
// // ll.remove(3)

// ll.print()
// console.log(ll.size);

function removell(arr,index){
  const ll=new LinkedList()
  for(let i=0; i<arr.length; i++){
    ll.push(arr[i])
  }
  ll.print()
  ll.remove(index)
  ll.print()
}
removell([2,3,4,5,6],1)

//   2
// head
//  2  -->  3  -->  4  -->  5  -->  6
//         prev



