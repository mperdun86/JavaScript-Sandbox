function HelloMatt() {
    for (var i = 0; i < 500; i++) {
        console.log("Hi Matt!");
    }
}

function MakeList(List) {
    for (var i = 0; i < List.length; i++) {
        console.log(List[i]);
    }
}

function FizzBuzz(BuzzFood) {
    for (var i = 0; i < BuzzFood.length; i++) {
        if (BuzzFood[i] % 2 == 0 && BuzzFood[i] % 3 == 0) {
            console.log("PipPop");
        }
        else if (BuzzFood[i] % 2 == 0) {
            console.log("Pip")
        }
        else if (BuzzFood[i] % 3 == 0) {
            console.log("Pop")
        }
        else{
            console.log("NOPE")
        }
    }
}

function FizzBuzzOneNum(MattsNumber) {
    if (MattsNumber % 3 == 0 && MattsNumber % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if (MattsNumber % 5 == 0) {
        console.log("Buzz");
    }
    else if (MattsNumber % 3 == 0) {
        console.log("Fizz");
    }

}