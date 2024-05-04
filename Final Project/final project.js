document.addEventListener('DOMContentLoaded', (event) => {

    //Create a linked list
    class ListNode {
        constructor(data, last = null){
            this.data = data;
            this.next = null;
            this.last = last;
        }
    }
    
    var list = new ListNode("Ingredients");
    list.next = new ListNode("Mix to become dough", list);
    list.next.next = new ListNode("Dough rises", list.next);
    list.next.next.next = new ListNode("Add heat", list.next.next);
    list.next.next.next.next = new ListNode("The loaf is baked", list.next.next.next.next);

    //Get new node ready to take user input
    //Put it in an arrow expression
    document.getElementById('button').addEventListener('click', () => {

        var input = document.getElementById('input').value;
        list.next.next.next.next.next = new ListNode("The loaf's name is: " + input);

        //call alert function
        submitAlert(input);
    })

    //submit confirmation
    const submitAlert = (input) => {
        if(input !== "")
        {
            alert('The name ' + input + ' has been submited.');
        }
        else
        {
            alert('No name has been submited.');
        }
    };

    document.getElementById('viewButton').addEventListener('click', () => {
        var outputElement = document.getElementById('output');

        //create variables for the list and the output
        var listVar = list;
        var output = ""; //null for now

        //loop through linked list
        while (listVar) {

            //console.log("Node value:", listVar.data); //logging

            //running total of data added to the output
            output += listVar.data + '<br>'; //line break

            //move to next node
            listVar = listVar.next;
            }
        
        //add output to html
        outputElement.innerHTML = output;
    })
})