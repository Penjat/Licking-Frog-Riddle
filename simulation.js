
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
function resetAllData(){

  totalNumSimulations = 0;

  surviveLeft = 0;
  surviveRight = 0;

  document.getElementById("dataCon").innerHTML = '<p>try the challange or run some simulations to generate data</p>';
}
