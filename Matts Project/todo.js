//Variables
var ToDoList = ["test", "test1", "test2", "test3", "test4"]

//Functions
function AddItem(Item) {
    ToDoList.push(Item)
}


function OffList(Item) {
    for (var ListItem in ToDoList) {
        if (Item == ToDoList[ListItem]) {
            ToDoList.splice(ListItem, 1);
        }
    }
}

function DisplayList(List) {
    for (var ListItem in List) {
        $('.ToDoList').append('<li>' + List[ListItem] + '</li>');
    }

}

//Function that gets the text from the textbox whe the OK button is clicked. 
//This runs when the click listener in the js.js file targeting the OK button runs
function GetItemToAdd(){
    //This line uses jQuery to get the value of whats in the text box and then assigns that value to the itemToAdd Variable. 
    var itemToAdd = $('#item-to-add').val();
    //This line calls the AddItem function and passes in the value of itemToAdd
    AddItem(itemToAdd);
}