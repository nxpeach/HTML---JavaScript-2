/* Loop */
console.log("The beginning number is 10.");

let number = 10;
let i = 0;

while (i <= 4) {
    number += 5;
    i++;
    if (i > 4) {
        console.log("The loop has completed.");
    }
}

console.log("The ending number is " + number + ".");

/*Add or modify at least one element*/

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("button").addEventListener("click", () => {
        const image = document.querySelector("#bread")
        image.getAttribute("src")
        image.setAttribute("src", "bread.png")

        //Add new paragraph with text
        const newParagraph = document.createElement("p")
        const text = document.createTextNode("Good job!")
        newParagraph.appendChild(text);
        
       const body =  document.querySelector("body")
       body.insertBefore(newParagraph, body.firstChild)

       //Remove button
       button.remove()

       var descision = 1

       //Initialize the function first
        const statusCheck = function() {
            if (descision === 1) {
                var answer = prompt("Do you want a drink with your bread? Type 'yes' or 'no'.")
                
                if (answer ===  "yes") {
                    //Add an image
                    const newImage = document.createElement("img")
                    const existingImage = document.querySelector("#bread")
                    //https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
                    existingImage.insertAdjacentElement("afterend", newImage)

                    newImage.setAttribute("src", "juice.png")
                }
                else if (answer === "no") {
                //Do nothing
                }
                else if (answer != "yes", "no") {
                    alert("Invalid repsonse :(")
                }
            }
        }

        //Call the function
       statusCheck(descision);
    })
})


