p1score.addEventListener("keyup",scorem1);
p2score.addEventListener("keyup",scorem1);
p3score.addEventListener("keyup",scorem2);
p4score.addEventListener("keyup",scorem2);
p5score.addEventListener("keyup",scorem3);
p6score.addEventListener("keyup",scorem3);
p7score.addEventListener("keyup",scorem4);
p8score.addEventListener("keyup",scorem4);
w12score.addEventListener("keyup",scorem5);
w34score.addEventListener("keyup",scorem5);
w56score.addEventListener("keyup",scorem6);
w78score.addEventListener("keyup",scorem6);
w1234score.addEventListener("keyup",scorem7);
w5678score.addEventListener("keyup",scorem7);
playerEntry.addEventListener("keyup",arrayConstruction);
//playerEntry.addEventListener("keyup",playerLookup); 
var player1name;
var player1round;
var player2name;
var player2round;
var player3name;
var player3round;
var player4name;
var player4round;
var player5name;
var player5round;
var player6name;
var player6round;
var player7name;
var player7round;
var player8name;
var player8round;
var roundArray = [];

function scorem1(){
if(p1score.value!=="" && p2score.value!=="") {
    if(p1score.value>p2score.value){
        w12name.value = p1name.value
        p1name.style.backgroundColor = "lime"
        p2name.style.backgroundColor = "lightgrey"
    }
    else if(p2score.value>p1score.value){
        w12name.value = p2name.value
        p2name.style.backgroundColor = "lime"
        p1name.style.backgroundColor = "lightgrey"
    }
}
}
function scorem2(){
if(p3score.value!=="" && p4score.value!=="") {
    if(p3score.value>p4score.value){
        w34name.value = p3name.value
        p3name.style.backgroundColor = "lime"
        p4name.style.backgroundColor = "lightgrey"
        }
    else if(p4score.value>p3score.value){
        w34name.value = p4name.value
        p4name.style.backgroundColor = "lime"
        p3name.style.backgroundColor = "lightgrey"
        }
    }
    }
function scorem3(){
if(p5score.value!=="" && p6score.value!=="") {
    if(p5score.value>p6score.value){
        w56name.value = p5name.value
        p5name.style.backgroundColor = "lime"
        p6name.style.backgroundColor = "lightgrey"
            }
    else if(p6score.value>p5score.value){
        w56name.value = p6name.value
        p6name.style.backgroundColor = "lime"
        p5name.style.backgroundColor = "lightgrey"
            }
        }
        }
function scorem4(){
if(p7score.value!=="" && p8score.value!=="") {
    if(p7score.value>p8score.value){
        w78name.value = p7name.value
        p7name.style.backgroundColor = "lime"
        p8name.style.backgroundColor = "lightgrey"
                }
    else if(p8score.value>p7score.value){
        w78name.value = p8name.value
        p8name.style.backgroundColor = "lime"
        p7name.style.backgroundColor = "lightgrey"
                }
            }
            }
function scorem5(){
if(w12score.value!=="" && w34score.value!=="") {
    if(w12score.value>w34score.value){
        w1234name.value = w12name.value
        w12name.style.backgroundColor = "lime"
        w34name.style.backgroundColor = "lightgrey"
                    }
    else if(w34score.value>w12score.value){
        w1234name.value = w34name.value
        w34name.style.backgroundColor = "lime"
        w12name.style.backgroundColor = "lightgrey"
                    }
                }
                }
function scorem6(){
if(w56score.value!=="" && w78score.value!=="") {
    if(w56score.value>w78score.value){
        w5678name.value = w56name.value
        w56name.style.backgroundColor = "lime"
        w78name.style.backgroundColor = "lightgrey"
                        }
    else if(w78score.value>w56score.value){
        w5678name.value = w78name.value
        w78name.style.backgroundColor = "lime"
        w56name.style.backgroundColor = "lightgrey"
                        }
                    }
                    }
function scorem7(){
if(w1234score.value!=="" && w5678score.value!=="") {
    if(w1234score.value>w5678score.value){
        firstplace.value = w1234name.value
        w1234name.style.backgroundColor = "lime"
        w5678name.style.backgroundColor = "lightgrey"
        
                                                }
    else if(w5678score.value>w1234score.value){
        firstplace.value = w5678name.value
        w5678name.style.backgroundColor = "lime"
        w1234name.style.backgroundColor = "lightgrey"
                                                }
        firstplace.style.backgroundColor = "gold"
                                            }
                                            }

function arrayConstruction(){
    roundArray = [];
    roundArray.push([document.getElementById("firstplace").value, document.getElementById("firstplace").className]);
    roundArray.push([document.getElementById("w1234name").value, document.getElementById("w1234name").className]);
    roundArray.push([document.getElementById("w5678name").value, document.getElementById("w5678name").className]);
    roundArray.push([document.getElementById("w12name").value, document.getElementById("w12name").className]);
    roundArray.push([document.getElementById("w34name").value, document.getElementById("w34name").className]);
    roundArray.push([document.getElementById("w56name").value, document.getElementById("w56name").className]);
    roundArray.push([document.getElementById("w78name").value, document.getElementById("w78name").className]);
    roundArray.push([document.getElementById("p1name").value, document.getElementById("p1name").className]);
    roundArray.push([document.getElementById("p2name").value, document.getElementById("p2name").className]);
    roundArray.push([document.getElementById("p3name").value, document.getElementById("p3name").className]);
    roundArray.push([document.getElementById("p4name").value, document.getElementById("p4name").className]);
    roundArray.push([document.getElementById("p5name").value, document.getElementById("p5name").className]);
    roundArray.push([document.getElementById("p6name").value, document.getElementById("p6name").className]);
    roundArray.push([document.getElementById("p7name").value, document.getElementById("p7name").className]);
    roundArray.push([document.getElementById("p8name").value, document.getElementById("p8name").className]);

    //var temp = roundArray[0][0];
    for (var i = 0; i < 15; i++) {
        if(roundArray[i][0] == playerEntry.value){
        lastround.value = roundArray[i][1]
        break;
        }
            else {
            lastround.value = "Not Found"
            }
    }
}



    
    
    
 
 /* function isCherries(fruit) {
        return fruit.name === 'cherries';
      }
      
      console.log(inventory.find(isCherries));
     { name: 'cherries', quantity: 5 }
     */
