let scoreHome = 0
let scoreGuest = 0
let homeScore = document.getElementById("homeScore")
let guestScore = document.getElementById("guestScore")

function button1() {
    homeScore.textContent = scoreHome + 1
    scoreHome += 1
}

function button2() {
    homeScore.textContent = scoreHome + 2
    scoreHome += 2
}

function button3() {
    homeScore.textContent = scoreHome + 3
    scoreHome += 3
}

function button4() {
    guestScore.textContent = scoreGuest + 1
    scoreGuest += 1
}

function button5() {
    guestScore.textContent = scoreGuest + 2
    scoreGuest += 2
}

function button6() {
    guestScore.textContent = scoreGuest + 3
    scoreGuest += 3
}

function startOver() {
    homeScore.textContent = 0
    guestScore.textContent = 0
    scoreHome = 0 
    scoreGuest = 0
}