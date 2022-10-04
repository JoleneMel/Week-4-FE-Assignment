// like in the video interacting with the DOM, we will start our ids with zero to refer to each one uniquely

let id = 0; 

// the point of add button is to add create a new row that will then be added to our table so we will do this by using our document.getElementById, which add
// is the id on our button that we are grabbing by the html page to have it do what we want to do we will need to add an event listener that when clicked 
//will do what we intend for it to do; add the new task to the table 
document.getElementById('add').addEventListener('click', () => {
    // to start we will need the date created,so we will set a var for it
    // now letting the Date be passed without any arguments will allow it to access it by the current time
    let createDate = new Date();
    // Next we will need to get our table 
    let table = document.getElementById('list');
    // now we will create a new row, we will set it to the first posistion because the header is the "first" row which is 0
    //If you want to have the row on the bottom just do let row = table.insertRow(-1); instead of 1
    let row = table.insertRow(1);
    // now we need to actually set the attributes for this row that we have created, first would be the id, and then we will use a template literal to get an 
    // id plus with a dash and the id from the first var above 
    row.setAttribute('id', `item-${id}`);
    //Below will allow us to set the first value of the cell in the row, which first is the id 'new task'
    row.insertCell(0).innerHTML = document.getElementById('new-task').value;
    // then we move onto the 2nd value which is the date created which will be formatted below to be understood easier from a user standpoint. using a template 
    // literal, first to get the year, then to get the month +1 becuz our months do not start with day 0. and finally day so yr-month-day
    row.insertCell(1).innerHTML = `${createDate.getFullYear()}-${createDate.getMonth() + 1}-${createDate.getDate()}`;
    //Now to add the start date which is the next one, we need to grab it by that start date selector 
    row.insertCell(2).innerHTML = document.getElementById('new-start-date').value;
    //copy because the end date is basically the same code - some minor changes 
    row.insertCell(3).innerHTML = document.getElementById('new-end-date').value;
    //now to create the button within the action part, starting with assigning the actions to a variable 
    let actions = row.insertCell(4);
    //append is like add in a way, creating a function to create a delete button, you pass in the current id, and incremented so all ids are unique to a task 
    actions.appendChild(createDeleteButton(id++));
    //this is to ensure it starts over for a good user experience 
    document.getElementById('new-task').value = '';
});


function createDeleteButton(id) {
    //below we are creating the button, then passing on its attributes with its className 
    let btn = document.createElement('buttton');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Captured';
    //now with this button we will add an event listener to it, each button that is created is going to have its own id which it will encapsulate the id and 
    //the onclick event that will tie that even to that row. 
    btn.onclick = () => {
        //using a template literal we will display a test on the console, the test id is the one of which we will be deleting. 
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        //so below we are using parentNode to find the parent of the element we want to delete and then call the remove child method on it, passing in 
        //elementToDelete giving the ability to delete the child from the parent. 
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    //returns button 
    return btn;
};
