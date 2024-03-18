//create async funtion that creates two new varaibles and a loser
async function race() {
    let runner1 = false;
    let runner2 = false;
    let loser = "";

/*
for an anonymous function that sets the loser value to runner1 in runner1Go, or runner2 in runner2Go, then resolves the value true.
You may chose the timeout lengths as long as they are under 10000 (10 seconds).*/

    const runner1Go = new Promise((resolve) => {
        setTimeout(() => {
        loser = "Runner 1";
        resolve(true);
        }, 5000);
    });

    const runner2Go = new Promise((resolve) => {
        setTimeout(() => {
        loser = "Runner 2";
        resolve(true);
        }, 8000);
    });

    //wait for promise
    await runner1Go;
    await runner2Go;

    //create an array with results and the loser
    return [runner1Go, runner2Go, loser];
}

race().then((result) => { //pass the return value of race() (the array)
    console.log(result[2]); //Log the loser to the console being index 2 of the array
});

race(); //call, displays the loser as runner 2