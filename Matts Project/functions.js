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
        else {
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



function MakeNewList(NewList) {

    for (var i = 0; i < NewList.length; i++) {
        console.log(NewList[i]);
    }

}

function MetalList(Metal) {

    for (var m = 0; m < Metal.length; m++) {
        console.log(Metal[m]);
    }
}

function DisplayLists(array1, array2) {

    for (var i = 0; i < array1.length; i++) {
        console.log(array1[i]);
    }

    for (var i = 0; i < array2.length; i++) {
        console.log(array2[i]);
    }

}

function MultiArray(Genres) {

    for (var i = 0; i < Genres.length; i++) {
        for (var c = 0; c < Genres[i].length; c++) {
            console.log(Genres[i][c]);
        }

    }
}

function Chars(Loche) {

    for (var i = 0; i < Loche.length; i++) {
        console.log(Loche[i]);

    }
}

function Bland(Item) {

    for (var i = 0; i < Item.length; i++) {
        console.log(Item[2]);
    }
}

function Crew(Member) {

    for (var a = 0; a < Member.length; a++) {
        console.log(Member[a]);
    }
}


function Machine(List) {

    for (var x = 0; x < List.length; x++) {
        console.log(List[x]);
    }
}
function ShowObject() {
    var Dalin = {
        HP: 100,
        Race: "Human",
        Hair: "Blonde",
        Eyes: "Green",
        Skin: "Fair",
        Age: 19,
        Allies: ["Nyk-nyk", "Sephone", "Adros"],
        Weapon: {
            Type: "Sword",
            Grip: "Brown Leather",
            Material: "Nephilsim",
            Attack: 50
        },
        Armor: {
            Defense: 70,
            Type: {
                RightArm: {
                    Equipped: "None",
                    Material: "None",
                    Origin: "None"
                },
                LeftArm: {
                    Equipped: "Yes",
                    Material: "Metal",
                    Origin: "Ancient"
                },
                Head: {
                    Equipped: "None",
                    Material: "None",
                    Origin: "None"
                },
                Waist: {
                    Equipped: "None",
                    Material: "None",
                    Origin: "None"
                },
                RightLeg: {
                    Equipped: "Yes",
                    Material: "Metal",
                    Origin: "Ancient"
                },
                LeftLeg: {
                    Equipped: "Yes",
                    Material: "Metal",
                    Origin: "Ancient"

                }
            }
        }
    }
    var Kados = {
        HP: 1000,
        Race: "Fire Ancient",
        Hair: "None",
        Eyes: "Yellow",
        Skin: "Blackish Purple",
        Age: "At Least 12 Million (Unknown)",
        Allies: ["Fire Spirits", "Undead", "The Maddened", "Driv"],
        Weapon: {
            Type: "Whip",
            Grip: "Ebony",
            Material: "Woven Shadow",
            Attack: 80
        },
        Armor: {
            Defense: 65,
            Type: {
                RightArm: {
                    Equipped: "None",
                    Material: "None",
                    Origin: "None"
                },
                LeftArm: {
                    Equipped: "None",
                    Material: "None",
                    Origin: "None"
                },
                Head: {
                    Equipped: "Yes",
                    Material: "Unknown",
                    Origin: "Ancient"
                },
                Waist: {
                    Equipped: "None",
                    Material: "None",
                    Origin: "None"
                },
                RightLeg: {
                    Equipped: "None",
                    Material: "None",
                    Origin: "None"
                },
                LeftLeg: {
                    Equipped: "None",
                    Material: "None",
                    Origin: "None"

                }
            }
        }
    }
    console.log("Dalin's Object:",Dalin);
    console.log("Kados's Object:",Kados);
    // console.log(Dalin.Hair);
    // console.log(Dalin.Skin);
    // console.log(Dalin.Eyes);
    // console.log(Dalin.Armor.Type.RightArm.Equipped);

    // for (var i = 0; i < Dalin.Allies.length; i++) {

    //     console.log(Dalin.Allies[i]);
    // }
    Battle(Dalin, Kados)
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function Battle(Char1, Char2){
    //var Char1Hit =  getRandomInt(Char1.Weapon.Attack);
    var Char1Hit = Char1.Weapon.Attack + getRandomInt(100);
    var Char2Hit = Char2.Weapon.Attack + getRandomInt(100);

    console.log(Char1Hit);
    console.log(Char2Hit);


    if(Char1Hit > Char2Hit ){
        console.log("Dalin Wins")
    }
    else { console.log("Kados Wins")


    }



}