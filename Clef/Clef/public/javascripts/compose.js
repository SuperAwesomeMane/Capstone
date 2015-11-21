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

var showNote1,showNote2,showNote3,showNote4,showNote5,showNote6,showNote7,showNote8,
showNote9,showNote10,showNote11,showNote12,showNote13,showNote14,showNote15,
showNote16,showNote17,showNote18,showNote19;

var downBtn, upBtn, previewBtn, addBtn, playBtn, undoBtn;

var line1 = 220;
var line2 = 210;
var line3 = 195;
var line4 = 185;
var line5 = 175;
var line6 = 160;
var line7 = 150;
var line8 = 135;
var line9 = 120;
var line10 = 105;
var line11 = 90;
var line12 = 75;
var line13 = 60;
var line14 = 50;
var line15 = 35;
var line16 = 15;
var line17 = 5;
var line18= -5;
var line19 = -15;
var firstX = 500;

var currentNote = 1;
var noteArray = [];

manifest = [
    // SPRITES

    {src: "noteSheet.png", id: "spriteSheet"},

    // IMAGES

    {src: "staff.png", id: "staff"},
    {src: "wholeBtn.jpg", id: "wholeBtnSelect"},
    {src: "wholeBtnSelected.jpg", id: "wholeBtnSelected"},
    {src: "halfBtn.jpg", id: "halfBtnSelect"},
    {src: "halfBtnSelected.jpg", id: "halfBtnSelected"},
    {src: "quarterBtn.jpg", id: "quarterBtnSelect"},
    {src: "quarterBtnSelected.jpg", id: "quarterBtnSelected"},
    {src: "eighthBtn.jpg", id: "eighthBtnSelect"},
    {src: "eighthBtnSelected.jpg", id: "eighthBtnSelected"},
    {src: "sixteenthBtn.jpg", id: "sixteenthBtnSelect"},
    {src: "sixteenthBtnSelected.jpg", id: "sixteenthBtnSelected"},

    {src: "downBtn.jpg", id: "downBtn"},
    {src: "upBtn.jpg", id: "upBtn"},
    {src: "previewBtn.jpg", id: "previewBtn"},
    {src: "addBtn.jpg", id: "addBtn"},
    {src: "playBtn.jpg", id: "playBtn"},
    {src: "undoBtn.jpg", id: "undoBtn"},

    {src: "showNote1.png", id: "showNote1"},
    {src: "showNote2.png", id: "showNote2"},
    {src: "showNote3.png", id: "showNote3"},
    {src: "showNote4.png", id: "showNote4"},
    {src: "showNote5.png", id: "showNote5"},
    {src: "showNote6.png", id: "showNote6"},
    {src: "showNote7.png", id: "showNote7"},
    {src: "showNote8.png", id: "showNote8"},
    {src: "showNote9.png", id: "showNote9"},
    {src: "showNote10.png", id: "showNote10"},
    {src: "showNote11.png", id: "showNote11"},
    {src: "showNote12.png", id: "showNote12"},
    {src: "showNote13.png", id: "showNote13"},
    {src: "showNote14.png", id: "showNote14"},
    {src: "showNote15.png", id: "showNote15"},
    {src: "showNote16.png", id: "showNote16"},
    {src: "showNote17.png", id: "showNote17"},
    {src: "showNote18.png", id: "showNote18"},
    {src: "showNote19.png", id: "showNote19"},

    // SOUNDS

        // A Notes
        {src: "gLowWhole.ogg", id: "note1Whole"},    {src: "gLowHalf.ogg", id: "note1Half"},      {src: "gLowQuarter.ogg", id: "note1Quarter"},    {src: "gLowEighth.ogg", id: "note1Eighth"},      {src: "gLowSixt.ogg", id: "note1Sixt"},
        {src: "aLowWhole.ogg", id: "note2Whole"},    {src: "aLowHalf.ogg", id: "note2Half"},      {src: "aLowQuarter.ogg", id: "note2Quarter"},    {src: "aLowEighth.ogg", id: "note2Eighth"},      {src: "aLowSixt.ogg", id: "note2Sixt"},
        {src: "bLowWhole.ogg", id: "note3Whole"},    {src: "bLowHalf.ogg", id: "note3Half"},      {src: "bLowQuarter.ogg", id: "note3Quarter"},    {src: "bLowEighth.ogg", id: "note3Eighth"},      {src: "bLowSixt.ogg", id: "note3Sixt"},
        {src: "cLowWhole.ogg", id: "note4Whole"},    {src: "cLowHalf.ogg", id: "note4Half"},      {src: "cLowQuarter.ogg", id: "note4Quarter"},    {src: "cLowEighth.ogg", id: "note4Eighth"},      {src: "cLowSixt.ogg", id: "note4Sixt"},
        {src: "dLowWhole.ogg", id: "note5Whole"},    {src: "dLowHalf.ogg", id: "note5Half"},      {src: "dLowQuarter.ogg", id: "note5Quarter"},    {src: "dLowEighth.ogg", id: "note5Eighth"},      {src: "dLowSixt.ogg", id: "note5Sixt"},
        {src: "eLowWhole.ogg", id: "note6Whole"},    {src: "eLowHalf.ogg", id: "note6Half"},      {src: "eLowQuarter.ogg", id: "note6Quarter"},    {src: "eLowEighth.ogg", id: "note6Eighth"},      {src: "eLowSixt.ogg", id: "note6Sixt"},
        {src: "fLowWhole.ogg", id: "note7Whole"},    {src: "fLowHalf.ogg", id: "note7Half"},      {src: "fLowQuarter.ogg", id: "note7Quarter"},    {src: "fLowEighth.ogg", id: "note7Eighth"},      {src: "fLowSixt.ogg", id: "note7Sixt"},
        
        {src: "gMidWhole.ogg", id: "note8Whole"},    {src: "gMidHalf.ogg", id: "note8Half"},      {src: "gMidQuarter.ogg", id: "note8Quarter"},    {src: "gMidEighth.ogg", id: "note8Eighth"},      {src: "gMidSixt.ogg", id: "note8Sixt"},
        {src: "aMidWhole.ogg", id: "note9Whole"},    {src: "aMidHalf.ogg", id: "note9Half"},      {src: "aMidQuarter.ogg", id: "note9Quarter"},    {src: "aMidEighth.ogg", id: "note9Eighth"},      {src: "aMidSixt.ogg", id: "note9Sixt"},
        {src: "bMidWhole.ogg", id: "note10Whole"},   {src: "bMidHalf.ogg", id: "note10Half"},     {src: "bMidQuarter.ogg", id: "note10Quarter"},   {src: "bMidEighth.ogg", id: "note10Eighth"},     {src: "bMidSixt.ogg", id: "note10Sixt"},
        {src: "cMidWhole.ogg", id: "note11Whole"},   {src: "cMidHalf.ogg", id: "note11Half"},     {src: "cMidQuarter.ogg", id: "note11Quarter"},   {src: "cMidEighth.ogg", id: "note11Eighth"},     {src: "cMidSixt.ogg", id: "note11Sixt"},
        {src: "dMidWhole.ogg", id: "note12Whole"},   {src: "dMidHalf.ogg", id: "note12Half"},     {src: "dMidQuarter.ogg", id: "note12Quarter"},   {src: "dMidEighth.ogg", id: "note12Eighth"},     {src: "dMidSixt.ogg", id: "note12Sixt"},
        {src: "eMidWhole.ogg", id: "note13Whole"},   {src: "eMidHalf.ogg", id: "note13Half"},     {src: "eMidQuarter.ogg", id: "note13Quarter"},   {src: "eMidEighth.ogg", id: "note13Eighth"},     {src: "eMidSixt.ogg", id: "note13Sixt"},
        {src: "fMidWhole.ogg", id: "note14Whole"},   {src: "fMidHalf.ogg", id: "note14Half"},     {src: "fMidQuarter.ogg", id: "note14Quarter"},   {src: "fMidEighth.ogg", id: "note14Eighth"},     {src: "fMidSixt.ogg", id: "note14Sixt"},
        
        {src: "gHighWhole.ogg", id: "note15Whole"},  {src: "gHighHalf.ogg", id: "note15Half"},    {src: "gHighQuarter.ogg", id: "note15Quarter"},  {src: "gHighEighth.ogg", id: "note15Eighth"},    {src: "gHighSixt.ogg", id: "note15Sixt"},
        {src: "aHighWhole.ogg", id: "note16Whole"},  {src: "aHighHalf.ogg", id: "note16Half"},    {src: "aHighQuarter.ogg", id: "note16Quarter"},  {src: "aHighEighth.ogg", id: "note16Eighth"},    {src: "aHighSixt.ogg", id: "note16Sixt"},
        {src: "bHighWhole.ogg", id: "note17Whole"},  {src: "bHighHalf.ogg", id: "note17Half"},    {src: "bHighQuarter.ogg", id: "note17Quarter"},  {src: "bHighEighth.ogg", id: "note17Eighth"},    {src: "bHighSixt.ogg", id: "note17Sixt"},
        {src: "cHighWhole.ogg", id: "note18Whole"},  {src: "cHighHalf.ogg", id: "note18Half"},    {src: "cHighQuarter.ogg", id: "note18Quarter"},  {src: "cHighEighth.ogg", id: "note18Eighth"},    {src: "cHighSixt.ogg", id: "note18Sixt"},
        {src: "dHighWhole.ogg", id: "note19Whole"},  {src: "dHighHalf.ogg", id: "note19Half"},    {src: "dHighQuarter.ogg", id: "note19Quarter"},  {src: "dHighEighth.ogg", id: "note19Eighth"},    {src: "dHighSixt.ogg", id: "note19Sixt"}
];

var queue;
var note;

function loadComplete(evt) {
    var noteSheet = new createjs.SpriteSheet({
        images: [queue.getResult("spriteSheet")],
        frames: [[0,0,60,80],[60,0,60,80],[120,0,60,80],[180,0,60,80],[240,0,60,80]],
        animations: {
            Whole: [0,0, "Whole"],
            Half: [1,1, "Half"],
            Quarter: [2,2, "Quarter"],
            Eighth: [3,3, "Eighth"],
            Sixt: [4,4, "Sixt"]
        }
    });

    note = new createjs.Sprite(noteSheet);
    // note.x = 550;
    // note.y = 50;
    // note.scaleY = -1;
    // note.sound = "note6Quarter";
    // note.gotoAndPlay("Quarter");
    // stage.addChild(note);

    // note.on("click", function(evt) {
        // createjs.Sound.play(note.sound);
    // });

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

    downBtn = new createjs.Bitmap(queue.getResult("downBtn"));
    upBtn = new createjs.Bitmap(queue.getResult("upBtn"));
    previewBtn = new createjs.Bitmap(queue.getResult("previewBtn"));
    addBtn = new createjs.Bitmap(queue.getResult("addBtn"));
    playBtn = new createjs.Bitmap(queue.getResult("playBtn"));
    undoBtn = new createjs.Bitmap(queue.getResult("undoBtn"));

    showNote1 = new createjs.Bitmap(queue.getResult("showNote1"));
    showNote2 = new createjs.Bitmap(queue.getResult("showNote2"));
    showNote3 = new createjs.Bitmap(queue.getResult("showNote3"));
    showNote4 = new createjs.Bitmap(queue.getResult("showNote4"));
    showNote5 = new createjs.Bitmap(queue.getResult("showNote5"));
    showNote6 = new createjs.Bitmap(queue.getResult("showNote6"));
    showNote7 = new createjs.Bitmap(queue.getResult("showNote7"));
    showNote8 = new createjs.Bitmap(queue.getResult("showNote8"));
    showNote9 = new createjs.Bitmap(queue.getResult("showNote9"));
    showNote10 = new createjs.Bitmap(queue.getResult("showNote10"));
    showNote11 = new createjs.Bitmap(queue.getResult("showNote11"));
    showNote12 = new createjs.Bitmap(queue.getResult("showNote12"));
    showNote13 = new createjs.Bitmap(queue.getResult("showNote13"));
    showNote14 = new createjs.Bitmap(queue.getResult("showNote14"));
    showNote15 = new createjs.Bitmap(queue.getResult("showNote15"));
    showNote16 = new createjs.Bitmap(queue.getResult("showNote16"));
    showNote17 = new createjs.Bitmap(queue.getResult("showNote17"));
    showNote18 = new createjs.Bitmap(queue.getResult("showNote18"));
    showNote19 = new createjs.Bitmap(queue.getResult("showNote19"));

    console.log("Images Loaded.");
    drawTools();
}

function loadFiles() {
    createjs.Sound.alternateExtensions = ["mp3"];
    queue = new createjs.LoadQueue(true, "/createAssets/");
    queue.installPlugin(createjs.Sound);
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

var selectedNote = 'Whole';

function drawTools() {
    console.log("entered drawTools function");
    staff.x = 350;
    staff.y = 100;
    stage.addChild(staff);

    wholeBtnSelect.x = 15;
    wholeBtnSelect.y = 50;
    stage.addChild(wholeBtnSelect);
    wholeBtnSelected.x = 15;
    wholeBtnSelected.y = 50;
    stage.addChild(wholeBtnSelected);
    wholeBtnSelect.on("click", function(evt) {
        selectedNote = 'Whole';
        switchNote();
    });

    halfBtnSelect.x = 70;
    halfBtnSelect.y = 50;
    stage.addChild(halfBtnSelect);
    halfBtnSelect.on("click", function(evt){
        selectedNote = 'Half';
        switchNote();
    });

    quarterBtnSelect.x = 125;
    quarterBtnSelect.y = 50;
    stage.addChild(quarterBtnSelect);
    quarterBtnSelect.on("click", function(evt) {
        selectedNote = 'Quarter';
        switchNote();
    });

    eighthBtnSelect.x = 180;
    eighthBtnSelect.y = 50;
    stage.addChild(eighthBtnSelect);
    eighthBtnSelect.on("click", function(evt) {
        selectedNote = 'Eighth';
        switchNote();
    });

    sixteenthBtnSelect.x = 235;
    sixteenthBtnSelect.y = 50;
    stage.addChild(sixteenthBtnSelect);
    sixteenthBtnSelect.on("click", function(evt) {
        selectedNote = 'Sixt';
        switchNote();
    });

    downBtn.x = 30;
    downBtn.y = 530;
    stage.addChild(downBtn);
    downBtn.on("click", function(evt) {
        currentNote -= 1;
        if(currentNote < 1) {
            currentNote += 1;
        }
        checkCurrentNote();
    });

    upBtn.x = 170;
    upBtn.y = 530;
    stage.addChild(upBtn);
    upBtn.on("click", function(evt) {
        currentNote += 1;
        if(currentNote > 19) {
            currentNote -= 1;
        }
        checkCurrentNote();
    });

    previewBtn.x = 50;
    previewBtn.y = 810;
    stage.addChild(previewBtn);

    undoBtn.x = 0;
    undoBtn.y = 870;
    stage.addChild(undoBtn);
    undoBtn.on("click", function(evt) {
        stage.removeChild(noteArray.pop());
    });

    addBtn.x = 100;
    addBtn.y = 870;
    stage.addChild(addBtn);
    addBtn.on("click", function(evt) {
        addNewNote();
    });

    playBtn.x = 200;
    playBtn.y = 870;
    stage.addChild(playBtn);

    playBtn.on("click", function(evt) {
        noteArray.forEach(function(note){
            console.log("note array: " + note.noteType);
            resetGameTimer();
            console.log("timer reset");
            if(gameTimer === note.noteValue) {
                console.log("it has been 1 second");
            }
        });
    });

    checkCurrentNote();
}

function switchNote() {
        switch (selectedNote) {
            case 'Whole':    
            stage.removeChild(halfBtnSelected);
            stage.removeChild(quarterBtnSelected);
            stage.removeChild(eighthBtnSelected);
            stage.removeChild(sixteenthBtnSelected);
            wholeBtnSelected.x = 15;
            wholeBtnSelected.y = 50;
            stage.addChild(wholeBtnSelected);
            break;

            case 'Half':
            stage.removeChild(wholeBtnSelected);
            stage.removeChild(quarterBtnSelected);
            stage.removeChild(eighthBtnSelected);
            stage.removeChild(sixteenthBtnSelected);
            halfBtnSelected.x = 70;    
            halfBtnSelected.y = 50;
            stage.addChild(halfBtnSelected);
            break;

            case 'Quarter':
            stage.removeChild(wholeBtnSelected);
            stage.removeChild(halfBtnSelected);
            stage.removeChild(eighthBtnSelected);
            stage.removeChild(sixteenthBtnSelected);
            quarterBtnSelected.x = 125;
            quarterBtnSelected.y = 50;
            stage.addChild(quarterBtnSelected);
            break;

            case 'Eighth':
            stage.removeChild(wholeBtnSelected);
            stage.removeChild(halfBtnSelected);
            stage.removeChild(quarterBtnSelected);
            stage.removeChild(sixteenthBtnSelected);
            eighthBtnSelected.x = 180;
            eighthBtnSelected.y = 50;
            stage.addChild(eighthBtnSelected);
            break;

            case 'Sixt':
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

function getNoteValue() {
    var noteValue;
    switch (selectedNote) {
        case 'Whole':
        noteValue = 4;
        break;
        case 'Half':
        noteValue = 2;
        break;
        case 'Quarter':
        noteValue = 1;
        break;
        case 'Eighth':
        noteValue = .5;
        break;
        case 'Sixt':
        noteValue = .25;
        break;
    }
    return noteValue;
}

var shownNote;

function checkCurrentNote() {
    switch (currentNote) {
        case 1:
            stage.removeChild(shownNote);
            shownNote = showNote1;
            shownNote.x = 50;
            shownNote.y = 600;
            shownNote.sound = "note" + currentNote + selectedNote;
            previewBtn.on("click", function(evt) {
                shownNote.sound = "note" + currentNote + selectedNote;
                createjs.Sound.play(shownNote.sound);
            });
            stage.addChild(shownNote);
        break;
        case 2:
            stage.removeChild(shownNote);
            shownNote = showNote2;
            shownNote.x = 50;
            shownNote.y = 600;
            shownNote.sound = "note" + currentNote + selectedNote;
            previewBtn.on("click", function(evt) {
                shownNote.sound = "note" + currentNote + selectedNote;
                createjs.Sound.play(shownNote.sound);
            });
            stage.addChild(shownNote);
        break;
        case 3:
            stage.removeChild(shownNote);
            shownNote = showNote3;
            shownNote.x = 50;
            shownNote.y = 600;
            shownNote.sound = "note" + currentNote + selectedNote;
            previewBtn.on("click", function(evt) {
                shownNote.sound = "note" + currentNote + selectedNote;
                createjs.Sound.play(shownNote.sound);
            });
            stage.addChild(shownNote);
        break;
        case 4:
            stage.removeChild(shownNote);
            shownNote = showNote4;
            shownNote.x = 50;
            shownNote.y = 600;
            shownNote.sound = "note" + currentNote + selectedNote;
            previewBtn.on("click", function(evt) {
                shownNote.sound = "note" + currentNote + selectedNote;
                createjs.Sound.play(shownNote.sound);
            });
            stage.addChild(shownNote);
        break;
        case 5:
            stage.removeChild(shownNote);
            shownNote = showNote5;
            shownNote.x = 50;
            shownNote.y = 600;
            shownNote.sound = "note" + currentNote + selectedNote;
            previewBtn.on("click", function(evt) {
                shownNote.sound = "note" + currentNote + selectedNote;
                createjs.Sound.play(shownNote.sound);
            });
            stage.addChild(shownNote);
        break;
        case 6:
            stage.removeChild(shownNote);
            shownNote = showNote6;
            shownNote.x = 50;
            shownNote.y = 600;
            shownNote.sound = "note" + currentNote + selectedNote;
            previewBtn.on("click", function(evt) {
                shownNote.sound = "note" + currentNote + selectedNote;
                createjs.Sound.play(shownNote.sound);
            });
            stage.addChild(shownNote);
        break;
        case 7:
            stage.removeChild(shownNote);
            shownNote = showNote7;
            shownNote.x = 50;
            shownNote.y = 600;
            shownNote.sound = "note" + currentNote + selectedNote;
            previewBtn.on("click", function(evt) {
                shownNote.sound = "note" + currentNote + selectedNote;
                createjs.Sound.play(shownNote.sound);
            });
            stage.addChild(shownNote);
        break;
        case 8:
            stage.removeChild(shownNote);
            shownNote = showNote8;
            shownNote.x = 50;
            shownNote.y = 600;
            shownNote.sound = "note" + currentNote + selectedNote;
            previewBtn.on("click", function(evt) {
                shownNote.sound = "note" + currentNote + selectedNote;
                createjs.Sound.play(shownNote.sound);
            });
            stage.addChild(shownNote);
        break;
        case 9:
            stage.removeChild(shownNote);
            shownNote = showNote9;
            shownNote.x = 50;
            shownNote.y = 600;
            shownNote.sound = "note" + currentNote + selectedNote;
            previewBtn.on("click", function(evt) {
                shownNote.sound = "note" + currentNote + selectedNote;
                createjs.Sound.play(shownNote.sound);
            });
            stage.addChild(shownNote);
        break;
        case 10:
            stage.removeChild(shownNote);
            shownNote = showNote10;
            shownNote.x = 50;
            shownNote.y = 600;
            shownNote.sound = "note" + currentNote + selectedNote;
            previewBtn.on("click", function(evt) {
                shownNote.sound = "note" + currentNote + selectedNote;
                createjs.Sound.play(shownNote.sound);
            });
            stage.addChild(shownNote);
        break;
        case 11:
            stage.removeChild(shownNote);
            shownNote = showNote11;
            shownNote.x = 50;
            shownNote.y = 600;
            shownNote.sound = "note" + currentNote + selectedNote;
            previewBtn.on("click", function(evt) {
                shownNote.sound = "note" + currentNote + selectedNote;
                createjs.Sound.play(shownNote.sound);
            });
            stage.addChild(shownNote);
        break;
        case 12:
            stage.removeChild(shownNote);
            shownNote = showNote12;
            shownNote.x = 50;
            shownNote.y = 600;
            shownNote.sound = "note" + currentNote + selectedNote;
            previewBtn.on("click", function(evt) {
                shownNote.sound = "note" + currentNote + selectedNote;
                createjs.Sound.play(shownNote.sound);
            });
            stage.addChild(shownNote);
        break;
        case 13:
            stage.removeChild(shownNote);
            shownNote = showNote13;
            shownNote.x = 50;
            shownNote.y = 600;
            shownNote.sound = "note" + currentNote + selectedNote;
            previewBtn.on("click", function(evt) {
                shownNote.sound = "note" + currentNote + selectedNote;
                createjs.Sound.play(shownNote.sound);
            });
            stage.addChild(shownNote);
        break;
        case 14:
            stage.removeChild(shownNote);
            shownNote = showNote14;
            shownNote.x = 50;
            shownNote.y = 600;
            shownNote.sound = "note" + currentNote + selectedNote;
            previewBtn.on("click", function(evt) {
                shownNote.sound = "note" + currentNote + selectedNote;
                createjs.Sound.play(shownNote.sound);
            });
            stage.addChild(shownNote);
        break;
        case 15:
            stage.removeChild(shownNote);
            shownNote = showNote15;
            shownNote.x = 50;
            shownNote.y = 600;
            shownNote.sound = "note" + currentNote + selectedNote;
            previewBtn.on("click", function(evt) {
                shownNote.sound = "note" + currentNote + selectedNote;
                createjs.Sound.play(shownNote.sound);
            });
            stage.addChild(shownNote);
        break;
        case 16:
            stage.removeChild(shownNote);
            shownNote = showNote16;
            shownNote.x = 50;
            shownNote.y = 600;
            shownNote.sound = "note" + currentNote + selectedNote;
            previewBtn.on("click", function(evt) {
                shownNote.sound = "note" + currentNote + selectedNote;
                createjs.Sound.play(shownNote.sound);
            });
            stage.addChild(shownNote);
        break;
        case 17:
            stage.removeChild(shownNote);
            shownNote = showNote17;
            shownNote.x = 50;
            shownNote.y = 600;
            shownNote.sound = "note" + currentNote + selectedNote;
            previewBtn.on("click", function(evt) {
                shownNote.sound = "note" + currentNote + selectedNote;
                createjs.Sound.play(shownNote.sound);
            });
            stage.addChild(shownNote);
        break;
        case 18:
            stage.removeChild(shownNote);
            shownNote = showNote18;
            shownNote.x = 50;
            shownNote.y = 600;
            shownNote.sound = "note" + currentNote + selectedNote;
            previewBtn.on("click", function(evt) {
                shownNote.sound = "note" + currentNote + selectedNote;
                createjs.Sound.play(shownNote.sound);
            });
            stage.addChild(shownNote);
        break;
        case 19:
            stage.removeChild(shownNote);
            shownNote = showNote19;
            shownNote.x = 50;
            shownNote.y = 600;
            shownNote.sound = "note" + currentNote + selectedNote;
            previewBtn.on("click", function(evt) {
                shownNote.sound = "note" + currentNote + selectedNote;
                createjs.Sound.play(shownNote.sound);
            });
            stage.addChild(shownNote);
        break;

        stage.addChild(shownNote);
    }
}

function checkNoteCount() {

}

function checkArrayLength() {
    var arrayLength = noteArray.length;
    var nextX = arrayLength * 60;
    return nextX + firstX;
}

function addNewNote() {
    console.log(currentNote);
            var newNote = note.clone();
            newNote.gotoAndPlay(selectedNote);
            newNote.noteValue = getNoteValue();
            newNote.noteType = selectedNote;
            newNote.sound = "note" + currentNote + selectedNote;
            
            // console.log("note value: " + newNote.noteValue);
            
            noteArray.push(newNote);
            console.log("array length: " + noteArray.length);

            newNote.on("click", function(evt) {
                createjs.Sound.play(newNote.sound);
            });
            
            checkNoteCount();

    switch (currentNote) {
        case 1:
            if(noteArray.length === 0) {
                newNote.x = firstX;
            } else {
                newNote.x = checkArrayLength();
            }
            newNote.y = line1;
            stage.addChild(newNote);
        break;
        case 2:
            if(noteArray.length === 0) {
                newNote.x = firstX;
            } else {
                newNote.x = checkArrayLength();
            }
            newNote.y = line2;
            stage.addChild(newNote);
        break;
        case 3:
            if(noteArray.length === 0) {
                newNote.x = firstX;
            } else {
                newNote.x = checkArrayLength();
            }
            newNote.y = line3;
            stage.addChild(newNote);
        break;
        case 4:
            if(noteArray.length === 0) {
                newNote.x = firstX;
            } else {
                newNote.x = checkArrayLength();
            }
            newNote.y = line4;
            stage.addChild(newNote);
        break;
        case 5:
            if(noteArray.length === 0) {
                newNote.x = firstX;
            } else {
                newNote.x = checkArrayLength();
            }
            newNote.y = line5;
            stage.addChild(newNote);
        break;
        case 6:
            if(noteArray.length === 0) {
                newNote.x = firstX;
            } else {
                newNote.x = checkArrayLength();
            }
            newNote.y = line6;
            stage.addChild(newNote);
        break;
        case 7:
            if(noteArray.length === 0) {
                newNote.x = firstX;
            } else {
                newNote.x = checkArrayLength();
            }
            newNote.y = line7;
            stage.addChild(newNote);
        break;
        case 8:
            if(noteArray.length === 0) {
                newNote.x = firstX;
            } else {
                newNote.x = checkArrayLength();
            }
            newNote.y = line8;
            stage.addChild(newNote);
        break;
        case 9:
            if(noteArray.length === 0) {
                newNote.x = firstX;
            } else {
                newNote.x = checkArrayLength();
            }
            newNote.y = line9;
            stage.addChild(newNote);
        break;
        case 10:
            if(noteArray.length === 0) {
                newNote.x = firstX;
            } else {
                newNote.x = checkArrayLength();
            }
            newNote.y = line10;
            stage.addChild(newNote);
        break;
        case 11:
            if(noteArray.length === 0) {
                newNote.x = firstX;
            } else {
                newNote.x = checkArrayLength();
            }
            newNote.y = line11;
            stage.addChild(newNote);
        break;
        case 12:
            if(noteArray.length === 0) {
                newNote.x = firstX;
            } else {
                newNote.x = checkArrayLength();
            }
            newNote.y = line12;
            stage.addChild(newNote);
        break;
        case 13:
            if(noteArray.length === 0) {
                newNote.x = firstX;
            } else {
                newNote.x = checkArrayLength();
            }
            newNote.y = line13;
            stage.addChild(newNote);
        break;
        case 14:
            if(noteArray.length === 0) {
                newNote.x = firstX;
            } else {
                newNote.x = checkArrayLength();
            }
            newNote.y = line14;
            stage.addChild(newNote);
        break;
        case 15:
            if(noteArray.length === 0) {
                newNote.x = firstX;
            } else {
                newNote.x = checkArrayLength();
            }
            newNote.y = line15;
            stage.addChild(newNote);
        break;
        case 16:
            if(noteArray.length === 0) {
                newNote.x = firstX;
            } else {
                newNote.x = checkArrayLength();
            }
            newNote.y = line16;
            stage.addChild(newNote);
        break;
        case 17:
            if(noteArray.length === 0) {
                newNote.x = firstX;
            } else {
                newNote.x = checkArrayLength();
            }
            newNote.y = line17;
            stage.addChild(newNote);
        break;
        case 18:
            if(noteArray.length === 0) {
                newNote.x = firstX;
            } else {
                newNote.x = checkArrayLength();
            }
            newNote.y = line18;
            stage.addChild(newNote);
        break;
        case 19:
            if(noteArray.length === 0) {
                newNote.x = firstX;
            } else {
                newNote.x = checkArrayLength();
            }
            newNote.y = line19;
            stage.addChild(newNote);
        break;

        stage.addChild(shownNote);
    }

    var sum = 0;
    noteArray.forEach(function(item){
        sum += item.noteValue;
        console.log("sum: " + sum);
        if(sum % 4 === 0) {
            var staffClone = staff.clone();
            staffClone.x = staff.x;
            staffClone.y = staff.y + 300;
            stage.addChild(staffClone);

        }
    });
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
    runGameTimer();
    stage.update();
}

function main() {
    setupCanvas();
    loadFiles();
}

resetGameTimer();
createjs.Ticker.addEventListener("tick", loop);
createjs.Ticker.setFPS(FPS);