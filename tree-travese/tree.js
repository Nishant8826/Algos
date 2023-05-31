//Pre Order Traversals
//root data --> left subtree --> right subtree
function preOrder(root){
    if(root!=null){
        //print root data
        console.log(`${root.data}`)
        //left subtree
        preOrder(root.left)
        //right subtree
        preOrder(root.right)
    }
}


//Post Order Traversals
//left subtree --> right subtree --> root
function postOrder(root) {
	if(root!=null){
        //left
        postOrder(root.left)
        //right
        postOrder(root.right)
        //print
        console.log(`${root.data} `)
    }
}

//In Order Traversals
// leftsubtree --> root --> right subtree
function inOrder(root) {
	if(root!=null){
        //left subtree
        inOrder(root.left)
        //print
        console.log(`${root.data} `)
        //right subtree
        inOrder(root.right)
    }
}


//Level Order Traversals
function levelOrder(root){
    const queue=[]
    queue.push(root)
    while(queue.length){
        let front=queue.shift()

        console.log(`${front.data}`)

        if(front.left)queue.push(front.left)

        if(front.right)queue.push(front.right)
    }
}



