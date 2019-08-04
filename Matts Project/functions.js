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



function MakeNewList(NewList){

    for (var i = 0; i < NewList.length; i++) {
        console.log(NewList[i]);
    }

}

function MetalList(Metal){

    for (var m = 0; m < Metal.length; m++) {
        console.log(Metal[m]);
    }
}

function DisplayLists(array1, array2){

    for (var i = 0; i < array1.length; i++) {
        console.log(array1[i]);
    }

    for (var i = 0; i < array2.length; i++) {
        console.log(array2[i]);
    }
    
}

function MultiArray(Genres){

        for (var i = 0; i < Genres.length; i++) {
            for (var c=0; c < Genres[i].length; c++){
                    console.log(Genres[i][c]);
            }

        }


function Chars(Loche){

        for (var i = 0; i < lo
}


}