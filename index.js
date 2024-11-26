let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeTotal = 0
let guestTotal = 0

console.log(homeTotal)

function home1() {
    homeTotal += 1
    homeScore.textContent = homeTotal
    console.log (homeTotal)
}

function home2() {
    homeTotal += 2
    homeScore.textContent = homeTotal
    console.log (homeTotal)   
}

function home3() {
    homeTotal += 3
    homeScore.textContent = homeTotal
    console.log (homeTotal)
}


function guest1() {
    guestTotal += 1
    guestScore.textContent = guestTotal
    console.log (guestTotal)
}

function guest2() {
    guestTotal += 2
    guestScore.textContent = guestTotal
    console.log (guestTotal)
}

function guest3() {
    guestTotal += 3
    guestScore.textContent = guestTotal
    console.log (guestTotal)
}