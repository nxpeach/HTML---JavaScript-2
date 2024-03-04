document.addEventListener("DOMContentLoaded", function () {
    // Your code here, including the getMoves function


function takesInfo(name, hp, ...moves) {
    var varName = name;
    var varHp = hp;
    var varMoves = moves;

    return {
        getHP: function () {
            return varHp;
        },
        getName: function () {
            return varName;
        },
        getMoves: function () { //find move div //use for-of loop to add new p with movetype
            
            //loop this
            const newParagraph = document.createElement("p");   //create new p element
            const text = document.createTextNode(varMoves);  //create new text node

            newParagraph.appendChild(text); //attach text to new paragraph

            const targetElement = document.querySelector(".move");
            const parentElement = targetElement.parentNode;

            for (const move of varMoves) {  //create new variable for each in the array
                const newParagraph = document.createElement("p");
                const text = document.createTextNode(move);

                newParagraph.appendChild(text);
                parentElement.insertBefore(newParagraph, targetElement.nextElementSibling);
            }
        }
    }
}

const result = takesInfo("Night Elf Warrior", 27000, "Sunder Armor", " Bloodthirst", " Whirlwind", "Battleshout", "Rend");
console.log(result.getHP());   //works, 90
console.log(result.getName());

result.getMoves();  //works!!
});

//Returns an object with three methods: one that returns the value of hp, one that returns the value of name, 
//and one that finds the "moves" div on the page and
// uses a for-of loop to append a new paragraph containing
//the move name to the "moves" div.