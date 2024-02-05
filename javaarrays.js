const arr = [100, 200, 300, 400];

function addition(number)
{
    var output = number + 1;
    return output;
}

var newExpression = function(number)
{
    var output = number + 1;
    return output;
}

var printOutput = addition(2);
console.log(printOutput);

//Step 5
function moreMath(number) {
    return number + 1;
};

//Function expression and a number parameters
function confusion(operation, number)
{
    //If the number is even, do stuff
    if (number % 2 == 0){
        //moreMath was passed to "operation"
        //return operation(number);     dont need
    }
    //If the passed number is odd
    else {
        console.log("The number is odd.")
    }
};
//Call the confusion function and pass the moreMath function and 9 as a parameter
//console.log(confusion(moreMath, 8)); //Putting 9 as the second parameter results in "undefined" since the second statement doesn't execute, but does log "The number is odd."

//Pray to God that this works
for (var i in arr) {
    console.log(confusion(addition, i));
};