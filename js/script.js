var firstArg = randomNumber(6,9);
var answer = randomNumber(11,14);
var secondArg = answer - firstArg;

window.onload = function (){
    var spanFirstArg = document.getElementById("argumentFirst");
    var spanSecondArg = document.getElementById("argumentSecond");
    spanFirstArg.innerHTML = firstArg;
    spanSecondArg.innerHTML = secondArg;
    var moveToX = firstDrawArc();
    addFirstInput(firstArg, moveToX);
}

function randomNumber(first, last) {
    var rand = first + Math.random() * (last + 1 - first);
    rand = Math.floor(rand);
    return rand;
}

function firstDrawArc() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
 
    context.moveTo(98, 150);
 
    var endX = 98 + 39 * firstArg;
    var endY = 150;
    var firstControlX = 98 + (firstArg * 7);
    var firstControlY = (20 - firstArg * 2) * 4;
    var secondControlX = endX - (firstArg * 7);
    var secondControlY = (20 - firstArg * 2) * 4;
 
    context.bezierCurveTo(firstControlX, firstControlY, secondControlX, secondControlY, endX, endY);
    context.lineTo(endX + 6 - firstArg, 150 - (firstArg + firstArg / 7) * 2);
    context.lineTo(endX, 150);
    context.lineTo(endX - firstArg * 2, 140);
    context.lineTo(endX, 150);
    context.lineWidth = 2;
    context.strokeStyle = "#DF01D7"; 
    context.stroke();
    
    return endX;
}

function secondDrawArc(moveToX) {
    var canvas = document.getElementById("canvas2");
    var context = canvas.getContext("2d");
 
    context.moveTo(moveToX, 150);
 
    var endX = moveToX + 39 * secondArg;
    var endY = 150;
    var firstControlX = moveToX + (secondArg * 7);
    var firstControlY = (20 - secondArg * 2) * 4 + secondArg;
    var secondControlX = endX - (secondArg * 7);
    var secondControlY = (20 - secondArg * 2) * 4 + secondArg;
 
    context.bezierCurveTo(firstControlX, firstControlY, secondControlX, secondControlY, endX, endY);
    context.lineTo(endX + 4 - secondArg, 140 - secondArg * 1.5);
    context.lineTo(endX, 150);
    context.lineTo(endX - 2 - secondArg * 2, 140);
    context.lineTo(endX, 150);
    context.lineWidth = 2;
    context.strokeStyle = "#DF01D7"; 
    context.stroke();
}

function addFirstInput(arg, moveToX) {
    var div = document.getElementById("content");
    var spanFirstArg = document.getElementById("argumentFirst");
    var input = document.createElement('input');
    input.id = "inputArgs";
    input.className = "inputArgs";
    input.type = "text";
    input.style.marginLeft = 90 + (arg * 39 / 2);
    input.style.top = 120 + (20 - firstArg * 2) * 4;
    input.oninput = function () {
        if (input.value == firstArg) {
            secondDrawArc(moveToX);
            var span = document.createElement('span');
            span.innerHTML = input.value;
            span.className = "spanArgs";
            span.style.marginLeft = 90 + (arg * 39 / 2);
            span.style.top = 120 + (20 - firstArg * 2) * 4;
            div.replaceChild(span, input);
            addSecondInput(secondArg, moveToX);
            spanFirstArg.className = "";
        }
        else {
            input.style.color="red";
            spanFirstArg.className = "orangeSpan";
        }
    }
    div.appendChild(input);
}

function addSecondInput(arg, moveToX) {
    var div = document.getElementById("content");
    var spanSecondArg = document.getElementById("argumentSecond");
    var input = document.createElement('input');
    input.id = "inputArgs";
    input.className = "inputArgs";
    input.type = "text";
    input.style.marginLeft = moveToX + (arg * 39 / 2) - 10;
    input.style.top = 120 + (20 - secondArg * 2) * 4;
    input.oninput = function () {
        if (input.value == secondArg) {
            var span = document.createElement('span');
            span.innerHTML = input.value;
            span.className = "spanArgs";
            span.style.marginLeft = moveToX + (arg * 39 / 2) - 10;
            span.style.top = 120 + (20 - secondArg * 2) * 4;
            div.replaceChild(span, input);
            addAnswerInput();
            spanSecondArg.className = "";
        }
        else {
            input.style.color="red";
            spanSecondArg.className = "orangeSpan";
        }
    }
    div.appendChild(input);
}

function addAnswerInput() {
    var div = document.getElementById("example");
    var span = document.getElementById("answer");
    var input = document.createElement('input');
    input.id = "inputAnswer";
    input.className = "inputAnswer";
    input.type = "text";
    input.oninput = function () {
        if (input.value == answer) {
            var span = document.createElement('span');
            span.innerHTML = input.value;
            div.replaceChild(span, input);
        }
        else {
            input.style.color="red";
        }
    }
    div.replaceChild(input, span);
}
