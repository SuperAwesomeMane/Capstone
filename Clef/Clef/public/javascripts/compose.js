var stage, gameTimer;
var FPS = 30, frameCount = 0;
var CANVAS_WIDTH = window.innerWidth;
var CANVAS_HEIGHT = window.innerHeight - 50;

var canvas, canvasElement;

var staff;
var wholeBtnSelect, wholeBtnSelected;
var halfBtnSelect, halfBtnSelected;
var quarterBtnSelect, quarterBtnSelected;
var eighthBtnSelect, eighthBtnSelected;
var sixteenthBtnSelect, sixteenthBtnSelected;

manifest = [
    {src: "staff.jpg", id: "staff"},
    {src: "wholeBtn.jpg", id: "wholeBtnSelect"},
    {src: "wholeBtnSelected.jpg", id: "wholeBtnSelected"},
    {src: "halfBtn.jpg", id: "halfBtnSelect"},
    {src: "halfBtnSelected.jpg", id: "halfBtnSelected"},
    {src: "quarterBtn.jpg", id: "quarterBtnSelect"},
    {src: "quarterBtnSelected.jpg", id: "quarterBtnSelected"},
    {src: "eighthBtn.jpg", id: "eighthBtnSelect"},
    {src: "eighthBtnSelected.jpg", id: "eighthBtnSelected"},
    {src: "sixteenthBtn.jpg", id: "sixteenthBtnSelect"},
    {src: "sixteenthBtnSelected.jpg", id: "sixteenthBtnSelected"}
];

var noteObject = {
    type: String,
    value: Number,
    duration: Number /* seconds */
};

var queue;

function loadComplete(evt) {
    staff = new createjs.Bitmap(queue.getResult("staff"));

    wholeBtnSelect = new createjs.Bitmap(queue.getResult("wholeBtnSelect"));
    wholeBtnSelected = new createjs.Bitmap(queue.getResult("wholeBtnSelected"));

    halfBtnSelect = new createjs.Bitmap(queue.getResult("halfBtnSelect"));
    halfBtnSelected = new createjs.Bitmap(queue.getResult("halfBtnSelected"));

    quarterBtnSelect = new createjs.Bitmap(queue.getResult("quarterBtnSelect"));
    quarterBtnSelected = new createjs.Bitmap(queue.getResult("quarterBtnSelected"));

    eighthBtnSelect = new createjs.Bitmap(queue.getResult("eighthBtnSelect"));
    eighthBtnSelected = new createjs.Bitmap(queue.getResult("eighthBtnSelected"));

    sixteenthBtnSelect = new createjs.Bitmap(queue.getResult("sixteenthBtnSelect"));
    sixteenthBtnSelected = new createjs.Bitmap(queue.getResult("sixteenthBtnSelected"));
    console.log("Images Loaded.");
    drawTools();
}

function loadFiles() {
    queue = new createjs.LoadQueue(true, "/images/createAssets/");
    queue.on("complete", loadComplete, this);
    queue.loadManifest(manifest);
}

function setupCanvas() {
    stage = new createjs.Stage("canvas");
    stage.canvas.width = CANVAS_WIDTH;
    stage.canvas.height = CANVAS_HEIGHT;
    stage.canvas.x = "0";
    stage.canvas.y = "0";
    stage.enableMouseOver();

    var rectangle = new createjs.Shape();
    rectangle.graphics.beginFill("#818181").drawRect(0, 0, 300, CANVAS_HEIGHT);
    stage.addChild(rectangle);

    var toolHeader = new createjs.Text("Tools", "2em Arial", "#FFF");
    toolHeader.x = 100;
    toolHeader.y = 10;
    stage.addChild(toolHeader);

    var underline = new createjs.Shape();
    rectangle.graphics.beginFill("#FFFFFF").drawRect(10, 40, 280, 3);
    stage.addChild(underline);
    loadFiles();
}

var selectedNote = 'wholeNote';

function switchNote() {

        switch(selectedNote) {
            case 'wholeNote':    
            stage.removeChild(halfBtnSelected);
            stage.removeChild(quarterBtnSelected);
            stage.removeChild(eighthBtnSelected);
            stage.removeChild(sixteenthBtnSelected);
            wholeBtnSelected.x = 15;
            wholeBtnSelected.y = 50;
            stage.addChild(wholeBtnSelected);
            break;

            case 'halfNote':
            stage.removeChild(wholeBtnSelected);
            stage.removeChild(quarterBtnSelected);
            stage.removeChild(eighthBtnSelected);
            stage.removeChild(sixteenthBtnSelected);
            halfBtnSelected.x = 70;    
            halfBtnSelected.y = 50;
            stage.addChild(halfBtnSelected);
            break;

            case 'quarterNote':
            stage.removeChild(wholeBtnSelected);
            stage.removeChild(halfBtnSelected);
            stage.removeChild(eighthBtnSelected);
            stage.removeChild(sixteenthBtnSelected);
            quarterBtnSelected.x = 125;
            quarterBtnSelected.y = 50;
            stage.addChild(quarterBtnSelected);
            break;

            case 'eighthNote':
            stage.removeChild(wholeBtnSelected);
            stage.removeChild(halfBtnSelected);
            stage.removeChild(quarterBtnSelected);
            stage.removeChild(sixteenthBtnSelected);
            eighthBtnSelected.x = 180;
            eighthBtnSelected.y = 50;
            stage.addChild(eighthBtnSelected);
            break;

            case 'sixteenthNote':
            stage.removeChild(wholeBtnSelected);
            stage.removeChild(halfBtnSelected);
            stage.removeChild(quarterBtnSelected);
            stage.removeChild(eighthBtnSelected);
            sixteenthBtnSelected.x = 235;
            sixteenthBtnSelected.y = 50;
            stage.addChild(sixteenthBtnSelected);
            break;
        }


}

function drawTools() {
    console.log("entered drawTools function");
    staff.x = 350;
    staff.y = 50;
    stage.addChild(staff);
    
    wholeBtnSelect.x = 15;
    wholeBtnSelect.y = 50;
    stage.addChild(wholeBtnSelect);
    wholeBtnSelected.x = 15;
    wholeBtnSelected.y = 50;
    stage.addChild(wholeBtnSelected);
    wholeBtnSelect.on("click", function(evt) {
        selectedNote = 'wholeNote';
        switchNote();
    });

    halfBtnSelect.x = 70;
    halfBtnSelect.y = 50;
    stage.addChild(halfBtnSelect);
    halfBtnSelect.on("click", function(evt){
        selectedNote = 'halfNote';
        switchNote();
    });

    quarterBtnSelect.x = 125;
    quarterBtnSelect.y = 50;
    stage.addChild(quarterBtnSelect);
    quarterBtnSelect.on("click", function(evt) {
        selectedNote = 'quarterNote';
        switchNote();
    });

    eighthBtnSelect.x = 180;
    eighthBtnSelect.y = 50;
    stage.addChild(eighthBtnSelect);
    eighthBtnSelect.on("click", function(evt) {
        selectedNote = 'eighthNote';
        switchNote();
    });

    sixteenthBtnSelect.x = 235;
    sixteenthBtnSelect.y = 50;
    stage.addChild(sixteenthBtnSelect);
    sixteenthBtnSelect.on("click", function(evt) {
        selectedNote = 'sixteenthNote';
        switchNote();
    });
}

function resetGameTimer() {
    gameTimer = 0;
}
function runGameTimer() {
    frameCount += 1;
    if(frameCount%(FPS/10) === 0) {
        gameTimer = frameCount/(FPS);
        // console.log(gameTimer);
    }
}

function loop() {
    stage.update();
    runGameTimer();
}

function main() {
    setupCanvas();
    loadFiles();
}

resetGameTimer();
createjs.Ticker.addEventListener("tick", loop);
createjs.Ticker.setFPS(FPS);