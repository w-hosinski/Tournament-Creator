let swissNames = []

const deletePlayer = num => {
    swissNames.splice(num-1, 1)
    updateNames()
}

submitName.addEventListener("click",pushEntry)
deletePlayer1.addEventListener("click",function(){deletePlayer(1)},false)
deletePlayer2.addEventListener("click",function(){deletePlayer(2)},false)
deletePlayer3.addEventListener("click",function(){deletePlayer(3)},false)
deletePlayer4.addEventListener("click",function(){deletePlayer(4)},false)

function pushEntry() {
    if(swissEntry.value != 0) {
        swissNames.push([swissEntry.value,0])
        updateNames()
    }
}    

function updateNames(){
    playerName1.value = ""
    playerScore1.value = ""
    playerName2.value = ""
    playerScore2.value = ""
    playerName3.value = ""
    playerScore3.value = ""
    playerName4.value = ""
    playerScore4.value = ""
    for(let i=0; i<4; i++) {
        if (typeof swissNames[i] !== 'undefined') {
            document.getElementById(`playerName${i+1}`).value = swissNames[i][0] 
            document.getElementById(`playerScore${i+1}`).value = swissNames[i][1]
        }
    }
   /*
    if (typeof swissNames[0] !== 'undefined') {
        playerName1.value = swissNames[0][0]
        playerScore1.value = swissNames[0][1]
    }
    if (typeof swissNames[1] !== 'undefined') {
        playerName2.value = swissNames[1][0]
        playerScore2.value = swissNames[1][1]
    }
    if (typeof swissNames[2] !== 'undefined') {
        playerName3.value = swissNames[2][0]
        playerScore3.value = swissNames[2][1]
    }
    if (typeof swissNames[3] !== 'undefined') {
        playerName4.value = swissNames[3][0]
        playerScore4.value = swissNames[3][1]
    }
    */
    swissEntry.value = ""
    }



/*
function shuffleArray(array) {
    for (let i = array.length - 1 i > 0 i--) {
        const j = Math.floor(Math.random() * (i + 1))
        [array[i], array[j]] = [array[j], array[i]]
    }
}
*/

//newInv.sort((a, b) => a[1].localeCompare(b[1]))