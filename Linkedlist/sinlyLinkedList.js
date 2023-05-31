// //node is collection of object called node and node is consist of two thing data and pointer pointing to next data && stored randomly

//creating a node
// class Node{
//     constructor(element){
//         this.data=element
//         this.next=null
//     }
// }
// var head=new Node(5)
// console.log(head)

// //multiple nodes comprises LinkedList
// //creating singly linked list (contain only one pointer)
// class LinkedList{
//     constructor(){
//         this.head=null
//         this.size=0
//     }
// }

// //iterate through LL
//print all element in a linkedList
// while(head!=null){
//     console.log(head.data)
//     head=head.next;
// }

//Insertion a node
// //at front of LL
// function push(new_data){
//     var new_node=new Node(new_data)
//     new_node.next=head
//     head=new_node
// }

// //at particular node of LL
// function insertAfter(prev_node,new_data){
//     if(prev_node==null){
//         return
//     }
//     var new_node=new Node(new_data)
//     new_node.next=prev_node.next
//     prev_node.next=new_node
// }

// //at end of LL
// function append(new_data){
//     var new_node=new Node(new_data)
//     if(head==null){
//         head=new Node(new_data)
//         return
//     }
//     new_node.next=null
//     var last=head
//     while(last.next!=null){
//         last=last.next
//     }
//     last.next=new_node
//     return
// }


// //delete a node in LL
// //at front of LL
// head=head.next


// //at particulor node of LL
// prev.next=prev.next.next


// //at end of LL
// var curr=head
// while(head.next!=null){
//     curr=curr.next
// }
// curr.next=null

// function getMobile(manufacturer, model, year) {
//     return {
//        manufacturer,
//        model,
//        year
//     }
//  }
//  console.log(getMobile("Samsung", "Galaxy", "2020"))

