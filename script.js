///////////////////TOP 2 BOTTOM/////////////////////
//Create variables that will access html element that we want to be dynamic
var topBottomColor1 = document.querySelector("#linear-input1");
var topBottomColor2 = document.querySelector("#linear-input2");
var topBottomBg = document.querySelector("#linear-bg");
var topBottomCss = document.querySelector ("#css-linear");

//Triggers the action to execute when inputs are entered so that it displays on load the linear gradient code by default
setTopBottomGradient();

//Create an action when inputs are entered
function setTopBottomGradient() {
    //Access the canvas and modify it - = - for the value of the inputs stored in variables
    topBottomBg.style.background = "linear-gradient(" + topBottomColor1.value + "," + topBottomColor2.value + ")";
    //Access the h4 and modify it to the content of the background newly generated
    topBottomCss.textContent = topBottomBg.style.background + ";";
}

//Add the event to the inputs to it triggers the action
topBottomColor1.addEventListener("input", setTopBottomGradient)
topBottomColor2.addEventListener("input", setTopBottomGradient)

///////////////////DIRECTION/////////////////////////
var leftRightBg = document.querySelector("#left-right-bg");
var leftRightCss = document.querySelector("#css-left-right");
var leftRightInput = document.querySelector("#right-left-input");
var leftRightColor1 = document.querySelector("#left-right-color1");
var leftRightColor2 = document.querySelector("#left-right-color2");

setDirectionGradient();

function setDirectionGradient() {
    leftRightBg.style.background = "linear-gradient(to "+ leftRightInput.value + ", " + leftRightColor1.value + ", " + leftRightColor2.value + ")"; 
    leftRightCss.textContent = leftRightBg.style.background + ";";
}

leftRightInput.addEventListener("input", setDirectionGradient)
leftRightColor1.addEventListener("input", setDirectionGradient)
leftRightColor2.addEventListener("input", setDirectionGradient)

///////////////////N-DEGREES////////////////////////////
var degreesCss = document.querySelector("#css-degrees");
var degreesBg = document.querySelector("#degrees-bg");
var degreesInput = document.querySelector("#degrees-input");
var degreesColor1 = document.querySelector("#degrees-color1");
var degreesColor2 = document.querySelector("#degrees-color2");

setDegreesGradient();

function setDegreesGradient() {
    degreesBg.style.background = "linear-gradient(" + degreesInput.value + "deg, " + degreesColor1.value + ", " + degreesColor2.value + ")";
    degreesCss.textContent = degreesBg.style.background + ";";
}

degreesInput.addEventListener("input", setDegreesGradient)
degreesColor1.addEventListener("input", setDegreesGradient)
degreesColor2.addEventListener("input", setDegreesGradient)

//////////////////////TURN//////////////////////////////
var turnCss = document.querySelector("#css-turn");
var turnBg = document.querySelector("#turn-bg");
var turnInput = document.querySelector("#turn-input");
var turnColor1 = document.querySelector("#turn-color1");
var turnColor2 = document.querySelector("#turn-color2");
var turnColor3 = document.querySelector("#turn-color3");

setTurnGradient();

function setTurnGradient() {
    turnBg.style.background = "linear-gradient(" + turnInput.value + "turn, " + turnColor1.value + ", " + turnColor2.value + ", " + turnColor3.value + ")";
    turnCss.textContent = turnBg.style.background + ";";
}

turnInput.addEventListener("input", setTurnGradient)
turnColor1.addEventListener("input", setTurnGradient)
turnColor2.addEventListener("input", setTurnGradient)
turnColor3.addEventListener("input", setTurnGradient)

////////////////////BLOCK-SHADE//////////////////////
var blockShadeCss = document.querySelector("#css-block-shade");
var blockShadeBg = document.querySelector("#block-shade-bg");
var blockShadeInput = document.querySelector("#block-shade-input1");
var blockShadeColor1 = document.querySelector("#block-shade-color1");
var blockShadeColor2 = document.querySelector("#block-shade-color2");
var blockShadeColor3 = document.querySelector("#block-shade-color3");
var blockShadeColor4 = document.querySelector("#block-shade-color4");
var blockShadeCentInput1 = document.querySelector("#block-shade-cent-input1");
var blockShadeCentInput2 = document.querySelector("#block-shade-cent-input2");
var blockShadeCentInput3 = document.querySelector("#block-shade-cent-input3");

setBlockShadeGradient();

function setBlockShadeGradient () {
    blockShadeBg.style.background = "linear-gradient(to " + blockShadeInput.value + ", " + blockShadeColor1.value + ", " + blockShadeColor2.value + " " + blockShadeCentInput1.value + "%, " + blockShadeColor3.value + " " + blockShadeCentInput2.value + "%, " + blockShadeColor4.value + " " + blockShadeCentInput3.value + "%)";
    blockShadeCss.textContent = blockShadeBg.style.background + ";";
}

blockShadeInput.addEventListener("input", setBlockShadeGradient)
blockShadeColor1.addEventListener("input", setBlockShadeGradient)
blockShadeColor2.addEventListener("input", setBlockShadeGradient)
blockShadeCentInput1.addEventListener("input", setBlockShadeGradient)
blockShadeColor3.addEventListener("input", setBlockShadeGradient)
blockShadeCentInput2.addEventListener("input", setBlockShadeGradient)
blockShadeColor4.addEventListener("input", setBlockShadeGradient)
blockShadeCentInput3.addEventListener("input", setBlockShadeGradient)

/////////////////////////RANDOM///////////////////////////////
var randomBg = document.querySelector("#random-bg");
var randomCss = document.querySelector("#css-random");
var btnRandom = document.querySelector("#button-random");
var randomColor1;
var randomColor2;

setRandomGradient();

function setRandomGradient () {
    randomColor1 = '#'+Math.floor(Math.random()*16777215).toString(16);
    randomColor2 = '#'+Math.floor(Math.random()*16777215).toString(16);
    //var.value is irrelevant as the function is run each click 
    randomBg.style.background = "linear-gradient(to right, " + randomColor1 + ", " + randomColor2 + ")";
    randomCss.textContent = randomBg.style.background + ";";
}

btnRandom.addEventListener("click", setRandomGradient)

