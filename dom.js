// 5.  Create a new variable, and set it equal to the container div
document.addEventListener("DOMContentLoaded", () => {
var div = document.querySelector("div");

/* 6. Utilize a loop to do the following with each iteration:
a. Create a new <p> element, with some text inside of it
b. Place that <p> element inside of the container div
c. Repeat this 5 times. */
for (let counter = 1; counter <= 5; counter++) {
    const newParagraph = document.createElement("p");
    const textBread = document.createTextNode("I love bread.")

    newParagraph.appendChild(textBread);

    div.insertBefore(newParagraph, div.firstChild);
}

/* 7. Create a new function that changes the background color of the body to one color,
and the background color of the container div to another. 
8. Set to click event */
document.querySelector("#change").addEventListener("click", () => {
    const body = document.querySelector("body");
    body.style.backgroundColor = "lightgrey";

    const divColor = document.querySelector("div");
    divColor.style.backgroundColor = "darkcyan";

})

});

