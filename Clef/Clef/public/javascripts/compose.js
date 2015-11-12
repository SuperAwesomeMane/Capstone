$(document).ready(function() {
    main();
});

var stage;
var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;

var canvas, canvasElement;

function init() {
    
}

function main() {
    console.log("doing main function");
    stage = new createjs.Stage("canvas");
    
    stage.canvas.width = canvasWidth;
    stage.canvas.height = canvasHeight;
    stage.canvas.x = "0";
    stage.canvas.y = "50";

    var rect = new createjs.Rectangle(0, 0, 100, 100);
    rect.fillStyle = "red";
    console.log("child not yet added to page")
    stage.addChild(rect);
    console.log("child added to page");

    stage.update();

    init();
}