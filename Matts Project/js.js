$(function () {
    // Making Variables
    var Alpha = ["Bat", "Cat", "Snake", "Dog", "Chupacabra"];
    var num = [1,2,3,4,5];
    var num2 = [1,5,7,11,17];
    var numList = [35,72,167,1];
    var MattsAge = [33];


    
    //Calling Functions
    HelloMatt();
    MakeList(Alpha);
    MakeList(num);
    FizzBuzz(num2);
    FizzBuzzOneNum(15);
    MakeList(numList);



    // Making an Array of Objects
    var BookArray = [
        {
            Pages:2000, 
            Title:"The Tale of NikNik",
            Author:'Matt Perdun'
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
        Pages:2000, 
        Title:"The Tale of NikNik",
        Author:'Matt Perdun'
    }

    //Logging Book title to console
    console.log(Book.Title);





})
