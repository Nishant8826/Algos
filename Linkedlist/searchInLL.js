class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    push(value){
        const node=new Node(value);
        if(this.head==null){
            this.head=node
        }else{
            let curr=this.head;
            while(curr.next){
                curr=curr.next
            }
            curr.next=node
        }
        this.size++
    }
    search(value){
        if(this.size==0)return -1
        
        let curr=this.head;
        let i=0
        while(curr){
            if(curr.data==value){
                return i
            }
            curr=curr.next
            i++
        }
        return -1
    
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
// const ll=new LinkedList()
// ll.push(2)
// ll.push(3)
// ll.push(1)
// ll.push(6)

// ll.print()
// console.log(ll.size)
// console.log(ll.search(8))

function seacrhInLL(arr,value){
    const ll=new LinkedList()
    for(let i=0; i<arr.length; i++){
        ll.push(arr[i])
    }
    ll.print()
    console.log(ll.search(value))
}
seacrhInLL([1,2,3,4,5,6],0)