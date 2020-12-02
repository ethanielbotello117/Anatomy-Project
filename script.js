"use script"

// score counter OwO
let points1 = 0;
let points2 = 0;

// turn counter UwU
let turn = 0;

function player1Point() {
    points1++
    console.log(`player ones points: ${points1}`)
    document.getElementById("player1").innerHTML = `Player 1: ${points1}pts`
}

function player2point() {
    points2++
    console.log(`player twos points: ${points2}`)
    document.getElementById("player2").innerHTML = `Player 2: ${points2}pts`
}

function nextQuestion() {
    turn++
    console.log(`amount of turns: ${turn}`);
    document.getElementById("CW").innerHTML = "Correct Word:"
    setTimeout(questions, 5000)
    // questions();
    hints();
    if (turn == 24){
    // Winner selector 88w88
        if (points1 > points2) {
            alert("PLAYER 1 WINS!!!")
        } else if (points1 < points2) {
            alert("PLAYER 2 WINS!!!")
        } else if (points1 == points2) {
            alert("Nobody wins either you're both dumb like me or on the same level of intelligence")
        }
        turn = 0;
        points1 = 0;
        document.getElementById("player1").innerHTML = `Player 1: ${points1}pts`
        points2 = 0;
        document.getElementById("player2").innerHTML = `Player 2: ${points2}pts`
    }
}



// Question selectors

function questions() {
    if (turn == 1) {
        document.getElementById("CW").innerHTML = a1;
    }
    if (turn == 2) {
        document.getElementById("CW").innerHTML = a2;
    }
    if (turn == 3) {
        document.getElementById("CW").innerHTML = a3;
    }
    if (turn == 4) {
        document.getElementById("CW").innerHTML = a4;
    }
    if (turn == 5) {
        document.getElementById("CW").innerHTML = a5;
    }
    if (turn == 6) {
        document.getElementById("CW").innerHTML = a6;
    }
    if (turn == 7) {
        document.getElementById("CW").innerHTML = a7;
    }
    if (turn == 8) {
        document.getElementById("CW").innerHTML = a8;
    }
    if (turn == 9) {
        document.getElementById("CW").innerHTML = a9;
    }
    if (turn == 10) {
        document.getElementById("CW").innerHTML = a10;
    }
    if (turn == 11) {
        document.getElementById("CW").innerHTML = a11;
    }
    if (turn == 12) {
        document.getElementById("CW").innerHTML = a12;
    }
    if (turn == 13) {
        document.getElementById("CW").innerHTML = a13;
    }
    if (turn == 14) {
        document.getElementById("CW").innerHTML = a14;
    }
    if (turn == 15) {
        document.getElementById("CW").innerHTML = a15;
    }
    if (turn == 16) {
        document.getElementById("CW").innerHTML = a16;
    }
    if (turn == 17) {
        document.getElementById("CW").innerHTML = a17;
    }
    if (turn == 18) {
        document.getElementById("CW").innerHTML = a18;
    }
    if (turn == 19) {
        document.getElementById("CW").innerHTML = a19;
    }
    if (turn == 20) {
        document.getElementById("CW").innerHTML = a20;
    }
    if (turn == 21) {
        document.getElementById("CW").innerHTML = a21;
    }
    if (turn == 22) {
        document.getElementById("CW").innerHTML = a22;
    }
    if (turn == 23) {
        document.getElementById("CW").innerHTML = a23;
    }
}

function hints() {
    if (turn == 1) {
        let num = Math.floor(Math.random() * 2 + 1);
        if (num == 1) {
            document.getElementById("hint").innerHTML = hint1a
        } else {
            document.getElementById("hint").innerHTML = hint1b
        }
    }

    if (turn == 2) {
        let num = Math.floor(Math.random() * 2 + 1);
        if (num == 1) {
            document.getElementById("hint").innerHTML = hint2a
        } else {
            document.getElementById("hint").innerHTML = hint2b
        }
    }

    if (turn == 3) {
        let num = Math.floor(Math.random() * 2 + 1);
        if (num == 1) {
            document.getElementById("hint").innerHTML = hint3a
        } else {
            document.getElementById("hint").innerHTML = hint3b
        }
    }

    if (turn == 4) {
        let num = Math.floor(Math.random() * 2 + 1);
        if (num == 1) {
            document.getElementById("hint").innerHTML = hint4a
        } else {
            document.getElementById("hint").innerHTML = hint4b
        }
    }

    if (turn == 5) {
        let num = Math.floor(Math.random() * 2 + 1);
        if (num == 1) {
            document.getElementById("hint").innerHTML = hint5a
        } else {
            document.getElementById("hint").innerHTML = hint5b
        }
    }

    if (turn == 6) {
        let num = Math.floor(Math.random() * 2 + 1);
        if (num == 1) {
            document.getElementById("hint").innerHTML = hint6a
        } else {
            document.getElementById("hint").innerHTML = hint6b
        }
    }

    if (turn == 7) {
        let num = Math.floor(Math.random() * 2 + 1);
        if (num == 1) {
            document.getElementById("hint").innerHTML = hint7a
        } else {
            document.getElementById("hint").innerHTML = hint7b
        }
    }

    if (turn == 8) {
        let num = Math.floor(Math.random() * 2 + 1);
        if (num == 1) {
            document.getElementById("hint").innerHTML = hint8a
        } else {
            document.getElementById("hint").innerHTML = hint8b
        }
    }

    if (turn == 9) {
        let num = Math.floor(Math.random() * 2 + 1);
        if (num == 1) {
            document.getElementById("hint").innerHTML = hint9a
        } else {
            document.getElementById("hint").innerHTML = hint9b
        }
    }

    if (turn == 10) {
        let num = Math.floor(Math.random() * 2 + 1);
        if (num == 1) {
            document.getElementById("hint").innerHTML = hint10a
        } else {
            document.getElementById("hint").innerHTML = hint10b
        }
    }

    if (turn == 11) {
        let num = Math.floor(Math.random() * 2 + 1);
        if (num == 1) {
            document.getElementById("hint").innerHTML = hint11a
        } else {
            document.getElementById("hint").innerHTML = hint11b
        }
    }

    if (turn == 12) {
        let num = Math.floor(Math.random() * 2 + 1);
        if (num == 1) {
            document.getElementById("hint").innerHTML = hint12a
        } else {
            document.getElementById("hint").innerHTML = hint12b
        }
    }

    if (turn == 13) {
        let num = Math.floor(Math.random() * 2 + 1);
        if (num == 1) {
            document.getElementById("hint").innerHTML = hint13a
        } else {
            document.getElementById("hint").innerHTML = hint13b
        }
    }

    if (turn == 14) {
        let num = Math.floor(Math.random() * 2 + 1);
        if (num == 1) {
            document.getElementById("hint").innerHTML = hint14a
        } else {
            document.getElementById("hint").innerHTML = hint14b
        }
    }

    if (turn == 15) {
        let num = Math.floor(Math.random() * 2 + 1);
        if (num == 1) {
            document.getElementById("hint").innerHTML = hint15a
        } else {
            document.getElementById("hint").innerHTML = hint15b
        }
    }

    if (turn == 16) {
        let num = Math.floor(Math.random() * 2 + 1);
        if (num == 1) {
            document.getElementById("hint").innerHTML = hint16a
        } else {
            document.getElementById("hint").innerHTML = hint16b
        }
    }

    if (turn == 17) {
        let num = Math.floor(Math.random() * 2 + 1);
        if (num == 1) {
            document.getElementById("hint").innerHTML = hint17a
        } else {
            document.getElementById("hint").innerHTML = hint17b
        }
    }

    if (turn == 18) {
        let num = Math.floor(Math.random() * 2 + 1);
        if (num == 1) {
            document.getElementById("hint").innerHTML = hint18a
        } else {
            document.getElementById("hint").innerHTML = hint18b
        }
    }

    if (turn == 19) {
        let num = Math.floor(Math.random() * 2 + 1);
        if (num == 1) {
            document.getElementById("hint").innerHTML = hint19a
        } else {
            document.getElementById("hint").innerHTML = hint19b
        }
    }

    if (turn == 20) {
        let num = Math.floor(Math.random() * 2 + 1);
        if (num == 1) {
            document.getElementById("hint").innerHTML = hint20a
        } else {
            document.getElementById("hint").innerHTML = hint20b
        }
    }

    if (turn == 21) {
        let num = Math.floor(Math.random() * 2 + 1);
        if (num == 1) {
            document.getElementById("hint").innerHTML = hint21a
        } else {
            document.getElementById("hint").innerHTML = hint21b
        }
    }

    if (turn == 22) {
        let num = Math.floor(Math.random() * 2 + 1);
        if (num == 1) {
            document.getElementById("hint").innerHTML = hint22a
        } else {
            document.getElementById("hint").innerHTML = hint22b
        }
    }

    if (turn == 23) {
        let num = Math.floor(Math.random() * 2 + 1);
        if (num == 1) {
            document.getElementById("hint").innerHTML = hint23a
        } else {
            document.getElementById("hint").innerHTML = hint23b
        }
    }
}



// hints :3

let hint1a = `Hint: indiana jones and the crystal " "`;
let hint1b = `Hint: HEADSHOT`;

let hint2a = `Hint: Upper shoulder`;
let hint2b = `Hint: Upper shoulder`;

let hint3a = `Hint: Rhymes with "Dracula"`;
let hint3b = `Hint: Rhymes with "spatula"`;

let hint4a = `Hint: When it came to making bacon all he did was "burn em"`;
let hint4b = `Hint: When it came to making bacon all he did was "burn em"`;

let hint5a = `Hint: The comedian was quite "humerous"`;
let hint5b = `Hint: The comedian was quite "humerous"`;

let hint6a = `Hint: Rhymes with "bibs"`;
let hint6b = `Hint: We had BBQ " " at the cookout`;

let hint7a = `Hint: Cox internet... thats it... thats the hint`;
let hint7b = `Hint: Cox internet... thats it... thats the hint`;

let hint8a = `Hint: To find the circumference you first need to find the " "`;
let hint8b = `Hint: To find the circumference you first need to find the " "`;

let hint9a = `Hint: Ryhmes with "Luna"`;
let hint9b = `Hint: Ryhmes with "Luna"`;

let hint10a = `Hint: On the top of the head`;
let hint10b = `Hint: On the top of the head`;

let hint11a = `Hint: Mega carpool`;
let hint11b = `Hint: Mega carpool`;

let hint12a = `Hint: In front of the head`;
let hint12b = `Hint: In front of the head`;

let hint13a = `Hint: The last place you wanna be hit by a razor scooter`;
let hint13b = `Hint: The last place you wanna be hit by a razor scooter`;

let hint14a = `Hint: Ryhmes with "nutella"`;
let hint14b = `Hint: Ryhmes with the one of the villians in Re:Zero`;

let hint15a = `Hint: Upper part of the shin`;
let hint15b = `Hint: Upper part of the shin`;

let hint16a = `Hint: Located in the shin`;
let hint16b = `Hint: Located in the shin`;

let hint17a = `Hint: Near the ankles`;
let hint17b = `Hint: Near the ankles`;

let hint18a = `Hint: These are quite meta`;
let hint18b = `Hint: These are quite meta`;

let hint19a = `Hint: T O E S`;
let hint19b = `Hint: T O E S`;

let hint20a = `Hint: In the neck`;
let hint20b = `Hint: In the neck`;

let hint21a = `Hint: In the back`;
let hint21b = `Hint: In the back`;

let hint22a = `Hint: In the fingers`;
let hint22b = `Hint: In the fingers`;

let hint23a = `Hint: Ryhmes with "Carpool" I basically gave you the answer you better get this right`;
let hint23b = `Hint: `;


// answers X3

let a1 = "Correct word: Skull - Located above the neck"
let a2 = "Correct word: Clavicle - Located on the upper shoulder"
let a3 = "Correct word: Scapula - Located on the shoulder"
let a4 = "Correct word: Sternum - Located near the chest"
let a5 = "Correct word: Humerus - Located in the upper arm"
let a6 = "Correct word: Ribs - Located near the stomach"
let a7 = "Correct word: Coxa - Located near the pelvis"
let a8 = "Correct word: Radius - Located in the forearm"
let a9 = "Correct word: Ulna - Located lower in the forearm"
let a10 = "Correct word: Cranium - Located at the top of the head"
let a11 = "Correct word: Metacarpals - Near the palm"
let a12 = "Correct word: Face - Located at the front of the head"
let a13 = "Correct word: Femur - Located in the thighs"
let a14 = "Correct word: Patella - Located in the knee"
let a15 = "Correct word: Tibia - Located under the knee"
let a16 = "Correct word: Fibula - Located in the shins"
let a17 = "Correct word: Tarsals - Near the ankles"
let a18 = "Correct word: Metatarsals - On top of the foot"
let a19 = "Correct word: Phanlanges - Near the T O E S"
let a20 = "Correct word: Hyoid - Located in the neck"
let a21 = "Correct word: Vertabral Column- Located in the back"
let a22 = "Correct word: Phalanges - Located in the fingers"
let a23 = "Correct word: Carpals - Located in the wrist"