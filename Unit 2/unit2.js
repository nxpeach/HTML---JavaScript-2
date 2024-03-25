document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("button").addEventListener("click", () => {
        const newParagraph = document.createElement("p")
        const text = document.createTextNode("Flour, salt, yeast, and water.")
        newParagraph.appendChild(text);

//Insert the paragraph after the button
    const button =  document.querySelector("button")
    button.insertAdjacentElement("afterend", newParagraph);
        }
    )

//Create BreadMaker class that takes the breadName parameter
class BreadMaker {
    constructor(breadName, breadType) {
        this.breadName = breadName;
        this.breadType = breadType;
    }

//create bake method that takes the minutes parameter
    bake(minutes) {
        var bakeTime = minutes;
        console.log(`The ${breadOne.breadName} will bake for ${bakeTime} minutes.`)
    }

    showBreadType() {
        console.log(`The bread type of ${breadOne.breadName} is ${breadOne.breadType}.`);
    }
}

//Create new object passing the name and type into the constructor
const breadOne = new BreadMaker("Focaccia", "Italian");

breadOne.showBreadType();
breadOne.bake(25);
})