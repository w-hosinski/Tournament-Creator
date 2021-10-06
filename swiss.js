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
deletePlayer5.addEventListener("click",function(){deletePlayer(5)},false)
deletePlayer6.addEventListener("click",function(){deletePlayer(6)},false)
deletePlayer7.addEventListener("click",function(){deletePlayer(7)},false)
deletePlayer8.addEventListener("click",function(){deletePlayer(8)},false)
createPairingsButton.addEventListener("click", createParings)

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
    playerName5.value = ""
    playerScore5.value = ""
    playerName6.value = ""
    playerScore6.value = ""
    playerName7.value = ""
    playerScore7.value = ""
    playerName8.value = ""
    playerScore8.value = ""
    for(let i=0; i<8; i++) {
        if (typeof swissNames[i] !== 'undefined') {
            document.getElementById(`playerName${i+1}`).value = swissNames[i][0] 
            document.getElementById(`playerScore${i+1}`).value = swissNames[i][1]
        }
    }
    swissEntry.value = ""
    }

function createParings() {
        console.log(swissNames)
}
