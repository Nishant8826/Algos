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
    //insert data from back
    push(data){
        const node=new Node(data)
        if(this.head==null){
            this.head=node
        }else{
            let curr=this.head
            while(curr.next){
                curr=curr.next
            }
            curr.next=node
        }
        this.size+=1
        
    }
    //inserting data from front
    prepend(value){
        const node=new Node(value)
        if(this.head==null){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
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

const ll=new LinkedList()
ll.push(10)
ll.push(20)
ll.push(30)

ll.prepend(10)
ll.prepend(20)
ll.prepend(30)

ll.print()

console.log(ll.size)

// function llImple(arr){
//     const ll=new LinkedList()
//     for(let i=0; i<arr.length; i++){
//         ll.push(arr[i])
//     }
//     return ll.print()
// }

// llImple([2,3,4,5,6,7,8])