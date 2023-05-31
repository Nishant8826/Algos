class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.size=0
    }
    push(value){
        const node=new Node(value);
        if(!this.head){
            this.head=node
        }else{
            let curr=this.head;
            while(curr.next){
                curr=curr.next;
            }
            curr.next=node;
        }
        this.size++
    }
    reverse(){
        let curr=this.head
        let prev=null
        while(curr){
            let next=curr.next
            curr.next=prev
            prev=curr
            curr=next
        }
        this.head=prev
    }
   
    print(){
        let list=[];
        let curr=this.head;
        while(curr){
            list.push(curr.data);
            curr=curr.next;
        }
        console.log(list)
    }
}
function reverseLL(arr){
    const ll=new LinkedList()
    for(let i=0; i<arr.length; i++){
        ll.push(arr[i])
    }
    ll.print()
    ll.reverse()
    ll.print()
}
reverseLL([1,2,3,4,5])