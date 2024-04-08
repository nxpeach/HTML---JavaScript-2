
/*
function update() {
    document.getElementById("p1").innerHTML = "";
    const arrayOutput = newArray.reduce((accumulator, currentValue) => accumulator + "
" + currentValue);
    document.getElementById("p1").innerHTML += arrayOutput;
}
*/

document.addEventListener('DOMContentLoaded', (event) => {
const newArray = [];
//Update array and text
function update() {
    const output = document.getElementById('p1');   //Set p1 to output variable
    output.innerHTML = '';  //Clear output text from inside the p1 element
    newArray.reduce((accumulator, currentValue, index) => {  //Use reduce() to change array
    output.innerHTML += `${index}: ${currentValue}<br>`;    //Index: value <break>
    return accumulator; //reduce must return the accumulator
    }, '');
}


function push() {
    //Get input text value
    var inputText = document.getElementById("input").value
    newArray.push(inputText);
    update();
}

function pop() {
    newArray.pop();
    update();
}

function shift() {
    newArray.shift();
    update();
}

function unshift() {
    newArray.unshift(document.getElementById("input").value);
    update();
}

/* This didn't work
function arrMap() {
    const mapArray = newArray.map((element) => 
    document.getElementById("input").value + element);   //Concatenate input with current element
    update();
}
*/

                                    //***Using update() with this doesn't really work and the assignment doesn't say to display it on screen, so its going to be logged instead.***
function arrMap() {
    const inputText = document.getElementById("input").value //get text input
    const mapArray = newArray.map((element) => inputText + element);   //Concatenate input with current element
    console.log(mapArray) //Works
    var output = document.getElementById('p1');
    output.innerHTML = 'Check log to view arrMap output.'

}


//Add event listeners
document.getElementById('push').addEventListener('click', push);
document.getElementById('pop').addEventListener('click', pop);
document.getElementById('unshift').addEventListener('click', unshift);
document.getElementById('shift').addEventListener('click', shift);
document.getElementById('arrmap').addEventListener('click', arrMap);
})