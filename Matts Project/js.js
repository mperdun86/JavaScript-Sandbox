$(function () {
    // Making Variables
    var Alpha = ["Bat", "Cat", "Snake", "Dog", "Chupacabra"];
    var num = [1, 2, 3, 4, 5];
    var num2 = [1, 5, 7, 11, 17];
    var numList = [35, 72, 167, 1];
    var MattsAge = [33];
    var Unlucky = [3, 6, 13, 14, 17, 22, 27];
    var Heros = ["Superman", "Batman", "Spiderman", "Deadpool", "Hiro"];
    var Metal = ["Slayer", "Pantera", "Metallica", "Black Sabbath", "Avenged Sevenfold"];
    var Genres = [
        ["Adventure", "Horror", "Comedy", "Action", "Mystery"],
        ["Pop", "Rap", "Reggae", "Dubstep", "Metal", "Classical"],
        ["Cubist", "Avante Gard", "Impressionist", "Realist", "Shit"]
    ];
    var Characters = ["Dalin", "Nyk-nyk", "Sephone", "Adros", "Treylin", "Travos"];
    var Member = ["Janeway", "Tuvok", "Chakotay", "Doctor", "7 of 9", "Harry", "Tom", "Neelix", "Belanna"];
    var Drinks = ["Coke", "Sprite", "Dr Pepper", "Mountain Dew", "Root Beer", "Fanta"];

    //Calling Functions
    HelloMatt();
    MakeList(Alpha);
    MakeList(num);
    FizzBuzz(num2);
    FizzBuzzOneNum(15);
    MakeList(numList);
    MakeNewList(Heros);
    MetalList(Metal);
    DisplayLists(Alpha, Metal);
    MultiArray(Genres);
    Chars(Characters);
    Bland(num);
    Crew(Member);
    Machine(Drinks);
    ShowObject();
    //MakeList2(Unlucky);

    //This line listens for when someone clicks the OK button, correct definition below. 
    //Click event listener for the OK button targeting the add-item ID on the button tag
    $('#add-item').click(function () {
        //This calls the GetItemToAdd function located in the todo.js file
        GetItemToAdd();
    })


    // Making an Array of Objects
    var BookArray = [
        {
            Pages: 2000,
            Title: "The Tale of NikNik",
            Author: 'Matt Perdun'
        },
        {
            Pages: 300,
            Title: "The Tale of Sephone",
            Author: "Matt Perdun"
        }
    ];


    //Making an Object
    var Book =
    {
        Pages: 2000,
        Title: "The Tale of NikNik",
        Author: 'Matt Perdun'
    }

    //Logging Book title to console
    //console.log(Book.Title);




    //Looping crazy fun time



})
