document.addEventListener('DOMContentLoaded', (event) => {
//create the leaf class
    class Leaf {
    constructor(value) {    //constructor will take a value and set it as the value
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


//event listener for submit button
document.querySelector('#button').addEventListener('click', function() { //begin creating leaves when button is clicked
    const inputValue = document.querySelector('#input').value;  //set submitted value from box to inputValue
    const root = new Leaf(inputValue);  //create root
    
    //create 10 leaves
    for (let i = 1; i <= 10; i++) { //i as counter
        const leaf = new Leaf(inputValue + i);  //increment i
        if (i % 2 === 0) {  //if no remainder
        //define left and right branch/root
        root.left = leaf;   
        } else {
        root.right = leaf;
        }
    }

//creat 2 arrays, one for breadth, one for depth
const depth = [];
const breadth = [];
    
//make a function to do depth search
function depthFirstSearch(node, depth) {   //take node and array
    if (node !== null) {
        depth.push(node.value);
        depthFirstSearch(node.left, depth);
        depthFirstSearch(node.right, depth);
    }
}

//make a function to do breadth search
function breadthFirstSearch(node, breadth) {
    let queue = []; //create empty queue arrray
    if (node !== null) queue.push(node);
    while (queue.length > 0) {  //as long as the queue is greater than 0
        let current = queue.shift();
        breadth.push(current.value);
        //PUSH left then right
        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
    }
}

    //send values found from search in arrays for functions to take
    depthFirstSearch(root, depth);
    breadthFirstSearch(root, breadth);
    
    const output = document.querySelector('#output');   //target class "output" div in HTML
    output.innerHTML = `Depth first search results: ${depth.join(', ')} <br> Breadth first search results: ${breadth.join(', ')}`;    //use template literal for inserting values, .join(', ') separates values. Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
    //output same results? IS OK
});
})

/*NOTES:
function depthFirstSearch(node, array) {
    if (node !== null) {
        console.log(node.value);

        //move through left and right
        depthFirstSearch(node.left);
        depthFirstSearch(node.right);
        */