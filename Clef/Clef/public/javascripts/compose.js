
var stage, FPS, frameCount, gameTimer;
var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight - 50;

var canvas, canvasElement;

var staff;
var wholeBtn, wholeBtnSelect, wholeBtnSelected;
var halfBtn, halfBtnSelect, halfBtnSelected;
var quarterBtn, quarterBtnSelect, quarterBtnSelected;
var eighthBtn, eighthBtnSelect, eighthBtnSelected;
var sixteenthBtn, sixteenthBtnSelect, sixteenthBtnSelected;

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
    // console.log("images created"); (o)
}
function loadFiles() {
    queue = new createjs.LoadQueue(true, "/images/createAssets/");
    queue.on("complete", loadComplete, this);
    queue.loadManifest(manifest);
}

function setupCanvas() {
    stage = new createjs.Stage("canvas");
    stage.canvas.width = canvasWidth;
    stage.canvas.height = canvasHeight;
    stage.canvas.x = "0";
    stage.canvas.y = "0";
    stage.enableMouseOver();
    drawToolbar();
}

function drawToolbar() {
    var rectangle = new createjs.Shape();
    rectangle.graphics.beginFill("#818181").drawRect(0, 0, 300, canvasHeight);
    stage.addChild(rectangle);

    var toolHeader = new createjs.Text("Tools", "2em Arial", "#FFF");
    toolHeader.x = 100;
    toolHeader.y = 10;
    stage.addChild(toolHeader);

    var underline = new createjs.Shape();
    rectangle.graphics.beginFill("#FFFFFF").drawRect(10, 40, 280, 3);
    stage.addChild(underline);

    staff.x = 350;
    staff.y = 50;
    stage.addChild(staff);
    
    wholeBtn = wholeBtnSelect;
    wholeBtn.x = 15;
    wholeBtn.y = 50;
    stage.addChild(wholeBtn);

    halfBtn = halfBtnSelect;
    halfBtn.x = 70;
    halfBtn.y = 50;
    stage.addChild(halfBtn);

    quarterBtn = quarterBtnSelect;
    quarterBtn.x = 125;
    quarterBtn.y = 50;
    stage.addChild(quarterBtn);

    eighthBtn = eighthBtnSelect;
    eighthBtn.x = 180;
    eighthBtn.y = 50;
    stage.addChild(eighthBtn);

    sixteenthBtn = sixteenthBtnSelect;
    sixteenthBtn.x = 235;
    sixteenthBtn.y = 50;
    stage.addChild(sixteenthBtn);
}

function resetGameTimer() {
    gameTimer = 0;
}
function runGameTimer() {
    frameCount += 1;
    if(frameCount%(FPS/10) === 0) {
        gameTimer = frameCount/(FPS);
    }
}

function loop() {
    stage.update();
    // drawToolbar();
    runGameTimer();
}
createjs.Ticker.addEventListener("tick", loop);
createjs.Ticker.setFPS(FPS);

function main() {
    loadFiles();
    resetGameTimer();
    FPS = 60;

    setupCanvas();
}

main();