//Variables
var ToDoList = ["test","test1","test2","test3","test4"]

//Functions
function AddList(Item) {
    ToDoList.push(Item)
}

function OffList(Item) {
    var NewToDoList = []
    for (var ListItem in ToDoList) {
        if (Item != ToDoList[ListItem]){
            NewToDoList.push(ToDoList[ListItem]);
        }
    }
    ToDoList = NewToDoList;
}

function ProperOffList(Item){
    for(var ListItem in ToDoList){
        if(Item == ToDoList[ListItem]){
            ToDoList.splice(ListItem, 1);
        }
    }
}