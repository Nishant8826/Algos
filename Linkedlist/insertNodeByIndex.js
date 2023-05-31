class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }
    push(value){
        const node=new Node(value)
        if(this.head==null){
            this.head=node
        }else{
            let curr=this.head;
            while(curr.next){
                curr=curr.next
            }
            curr.next=node
        }
        this.size+=1
    }
    //insert at given index
    insert(value,index){
        if(index<0 || index>this.size){
            console.log("Invalid Index")
        }else if(index===0){
            const node=new Node(value)
            if(this.head==null){
                this.head=node
            }else{
                node.next=this.head
                this.head=node
            }
        }else{
            const node=new Node(value)
            let prev=this.head
            for(let i=0; i<index-1; i++){
                prev=prev.next
            }
            let temp=prev.next
            prev.next=node
            node.next=temp
        }
        this.size+=1
    }
    
    print(){
        let curr=this.head
        let list=[]
        while(curr){
            list.push(curr.data)
            curr=curr.next
        }
        console.log(list)
    }
}

// const ll=new LinkedList()
// ll.insert(10,0)
// ll.insert(20,1)
// ll.insert(30,7)
// ll.insert(40,1)
// ll.print()


// console.log(ll.size)

function insert(arr,ele,n){
    const ll=new LinkedList()
    for(let i=0; i<arr.length; i++){
        ll.push(arr[i])
    }
    ll.print()
    ll.insert(ele,n)
    ll.print()
}
insert([0,1,2,3,4,5],10,0)

//              50 --> null    , index = 2
//
// 10  -->  20  -->  30  -->  40
//         prev

//temp = 30
//prev.next= 50
//node.next =temp