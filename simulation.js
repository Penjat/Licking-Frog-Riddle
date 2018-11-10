
//frogs stored as int value

var frogL = 0;
var frogR1 = 0;
var frogR2 = 0;
var FEMALE = 0;
var MALE = 1;

var totalNumSimulations = 0;

var surviveLeft = 0;
var surviveRight = 0;


function simulate(){
  console.log("simulating...");
  //reset game to make sure there aren't conflicts
  document.getElementById("gameSpace").innerHTML = '<button type="button" onclick="startGame()">Try the challange yourself</button>';
  generateFrogs();

  totalNumSimulations++;

  if(frogL == FEMALE){
    surviveLeft++;
  }
  if(frogR1 == FEMALE || frogR2 == FEMALE){
    surviveRight++;
  }





}
function runSimulation(numSims){
  for(var i=0;i<numSims;i++){
    simulate();
  }


  updateData();

}

function generateFrogs(){
  console.log("genrating frogs.");
  //generate random frogs
  frogL = Math.floor(Math.random() *2);
  frogR1 = Math.floor(Math.random() *2);
  frogR2 = Math.floor(Math.random() *2);

  //check to make sure that both frogs do
  console.log(frogL,frogR1,frogR2);

  //check to make sure both froms arent' female
  while(frogR1 == FEMALE && frogR2 == FEMALE){
    frogR1 = Math.floor(Math.random() *2);
    frogR2 = Math.floor(Math.random() *2);
  }
  return;
}
function updateData(){
  //updates all the statistics and sets the inner HTML accordingly
  var percentRight = Math.floor((surviveRight/totalNumSimulations)*1000)/10;
  var percentLeft = Math.floor((surviveLeft/totalNumSimulations)*1000)/10;

  document.getElementById("dataCon").innerHTML = '<div id="rightInfo" >some info</div><div id="surviveRightBar" class="statBar"></div><div id="leftInfo" >some other info</div><div id="surviveLeftBar" class="statBar"></div>';

  document.getElementById("leftInfo").innerHTML = "One frog to the left survived " +surviveLeft + " times out of " + totalNumSimulations + " simulations or "+ percentLeft +"% of the time,";
  document.getElementById("rightInfo").innerHTML = "Two frogs on the right survived "+ surviveRight + " times out of " + totalNumSimulations + " simulations or "+ percentRight +"% of the time,";

  document.getElementById("surviveLeftBar").style.width = "" + percentLeft + "%";
  document.getElementById("surviveRightBar").style.width = "" + percentRight + "%";
}
function startGame(){
  document.getElementById("gameSpace").innerHTML = '<p>You have been poisoned! <p>it turns out the only cure is to lick a certain kind of jungle frog but only the females of this species posses the cure. <p>To your left you see a frog, you are not sure if it is male or female. <p>Suddenly, you hear the croak of a male frog, to your right you see two frogs.  One must be male but the other you arent sure...<button type="button" onclick="next()">next</button>';
}
function next(){
  generateFrogs();
  document.getElementById("gameSpace").innerHTML = 'what do you do? <button type="button" onclick="lickFrog(0)">Lick the frog on the left.</button> <button type="button" onclick="lickFrog(1)">Lick both the frogs on the right (one of which you know is male)</button>'

}
function lickFrog(direction){
  var message;

  //left
  if(direction == 0){
    message = "you quickly run to the left and lick the frog.";
    if(frogL == FEMALE){
      message += " Luckly for you this frog turns out to be female and you are cured of the poison.";
    }else{
      message += " Unfortunatly it seems this was a male frog and did not posses the required antidote.  You fall on the ground as all turns to darkness.";
    }
  }
  //right
  if(direction == 1){
    message = "You run towards the right. Two frogs must be better than one right? you lick both the frogs.";
    if(frogR1 == FEMALE || frogR2 == FEMALE){
      message += "it seems at least one of them was female and you feel better in no time.";
    }else{
      message += "unfortunatly, it seems that both these frogs were male and your vision starts to go dark.  As you pass from this world you take solice in the fact that you made the most statistically reasonable choice.";
    }
  }
  message += '<button type="button" onclick="startGame()">try again?</button>';
  document.getElementById("gameSpace").innerHTML = message;

  totalNumSimulations++;

  if(frogL == FEMALE){
    surviveLeft++;
  }
  if(frogR1 == FEMALE || frogR2 == FEMALE){
    surviveRight++;
  }
  updateData();

}
function resetAllData(){

  totalNumSimulations = 0;

  surviveLeft = 0;
  surviveRight = 0;

  document.getElementById("dataCon").innerHTML = '<p>try the challange or run some simulations to generate data</p>';
  document.getElementById("gameSpace").innerHTML = '<button type="button" onclick="startGame()">Try the challange yourself</button>';
}
