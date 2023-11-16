let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let periodEl = document.getElementById("period-el")
let homeFoulEl = document.getElementById("foul-home-el")
let guestFoulEl = document.getElementById("foul-guest-el")
let homeScoreBox = document.getElementById("home-score-box")
let guestScoreBox = document.getElementById("guest-score-box")
let period = 0
let homeCount = 0
let guestCount = 0
let homeFoul = 0
let guestFoul = 0


// Home Count
function addOneHome(){
    homeCount += 1
    homeEl.textContent = homeCount
}

function addTwoHome(){
    homeCount += 2
    homeEl.textContent = homeCount
}

function addThreeHome(){
    homeCount += 3
    homeEl.textContent = homeCount  
}

//Guest Count
function addOneGuest(){
    guestCount += 1
    guestEl.textContent = guestCount
}

function addTwoGuest(){
    guestCount += 2
    guestEl.textContent = guestCount
}

function addThreeGuest(){
    guestCount += 3
    guestEl.textContent = guestCount  
}


//New Game Button

function newGame(){
    homeCount = 0
    guestCount = 0
    period = 0
    homeFoul = 0
    guestFoul = 0
    homeEl.textContent = 0 
    guestEl.textContent = 0 
    periodEl.textContent = period
    homeFoulEl.textContent = 0
    guestFoulEl.textContent = guestFoul
}



//Add period
function addPeriod(){
    period += 1
    periodEl.textContent = period
    if (period > 4) {
        period = 0
        periodEl.textContent = period
    }
}

//Add fouls
function addFoulHome(){
    homeFoul += 1
    homeFoulEl.textContent = homeFoul
}

function addFoulGuest(){
    guestFoul += 1
    guestFoulEl.textContent = guestFoul
}
