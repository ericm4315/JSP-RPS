var rps = prompt("ROCK, PAPER, SCISSORS...")

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var randomNumber = getRandomInt(3)

function addString(thing) {
    if (randomNumber == 0) {
        return "rock";
    }
    else if (randomNumber == 1) {
        return "paper";
    }
    else {
        return "scissors"
    }
}

// console.log(addString(getRandomInt(3)))
function winLose(theInsert) {
    if (theInsert == "rock" && addString(getRandomInt(3)) == "rock") {
        return "I chose rock - Seems to be a tie..."
    }
    else if (theInsert == "rock" && addString(getRandomInt(3)) == "paper") {
        return "I chose paper - Looks like I won!"
    }
    else if (theInsert == "rock" && addString(getRandomInt(3)) == "scissors") {
        return "I chose scissors - Looks like I Lost :("
    }
    else if (theInsert == "paper" && addString(getRandomInt(3)) == "paper") {
        return "I chose paper - Seems to be a tie..."
    }
    else if (theInsert == "paper" && addString(getRandomInt(3)) == "scissors") {
        return "I chose scissors - Looks like I won!"
    }
    else if (theInsert == "paper" && addString(getRandomInt(3)) == "rock") {
        return "I chose rock - Looks like I lost :("
    }
    else if (theInsert == "scissors" && addString(getRandomInt(3)) == "scissors") {
        return "I chose scissors - Seems to be a tie..."
    }
    else if (theInsert == "scissors" && addString(getRandomInt(3)) == "paper") {
        return "I chose paper - Looks like I won!"
    }
    else if (theInsert == "scissors" && addString(getRandomInt(3)) == "rock") {
        return "I chose rock - looks like I lost :("
    }
}
document.write(winLose(rps))