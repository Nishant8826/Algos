//LEVEL ORDER

//Recursive
//height of tree
function height(node){
    if(node==null){
        return 0
    }
    var lh=height(node.left)
    var rh=height(node.right)
    console.log(`${node.data} ${lh} ${rh}`)
    return Math.max(lh,rh)+1
}

//level order
function levelOreder(node){
    if(node==null)return
    var ht=height(node)
    for(let i=0; i<=ht; i++){
        printCurrentLevel(node,i)
    }
}

function printCurrentLevel(node,level){
    if(node==null)return
    if(level==1){
        console.log(node.data)
    }
    printCurrentLevel(node.left,level-1)
    printCurrentLevel(node.right,level-1)
}

//iterative
function levelOrder(root){
    if(node==null)return 
    const queue=[]
    queue.push(root)
    while(queue.length){
        let curr=queue.shift()

        console.log(`${curr.data}`)

        if(curr.left!=null)queue.push(curr.left)

        if(curr.right!=null)queue.push(curr.right)
    }
}