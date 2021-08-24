submitName.addEventListener("click",pushEntry);
deletePlayer1.addEventListener("click",deletePlayer1f);
deletePlayer2.addEventListener("click",deletePlayer2f);
deletePlayer3.addEventListener("click",deletePlayer3f);
deletePlayer4.addEventListener("click",deletePlayer4f);


var swissNames = [];

function pushEntry() {
    if(swissEntry.value != 0) {
        swissNames.push([swissEntry.value,0]);
        updateNames()
    }
}    

function updateNames(){
    
    playerName1.value = "";
    playerScore1.value = "";
    playerName2.value = "";
    playerScore2.value = "";
    playerName3.value = "";
    playerScore3.value = "";
    playerName4.value = "";
    playerScore4.value = "";
    if (typeof swissNames[0] !== 'undefined'){
    playerName1.value = swissNames[0][0];
    playerScore1.value = swissNames[0][1];}
    if (typeof swissNames[1] !== 'undefined'){
    playerName2.value = swissNames[1][0];
    playerScore2.value = swissNames[1][1];}
    if (typeof swissNames[2] !== 'undefined'){
    playerName3.value = swissNames[2][0];
    playerScore3.value = swissNames[2][1];}
    if (typeof swissNames[3] !== 'undefined'){
    playerName4.value = swissNames[3][0];
    playerScore4.value = swissNames[3][1];}
}

function deletePlayer1f(){
    swissNames.splice(0,1);
    updateNames()
}
function deletePlayer2f(){
    swissNames.splice(1,1);
    updateNames()
}
function deletePlayer3f(){
    swissNames.splice(2,1);
    updateNames()
}
function deletePlayer4f(){
    swissNames.splice(3,1);
    updateNames()
}

/*
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
*/

//newInv.sort((a, b) => a[1].localeCompare(b[1]));