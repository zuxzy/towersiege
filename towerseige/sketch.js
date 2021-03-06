const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var zhan, nangtung;
var balebizu;
var tuurid;
var qutik1, qutik2, qutik3, qutik4, qutik5, qutik6, qutik7, qutik8, qutik9, qutik10;
var qutik11, qutik12, qutik13, qutik14, qutik15, qutik16;
var gameState = "tension";
var backgroundImg
var score = 0;

function preload() {
    getBackgroundImage()
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    zhan = new Ground(400, 600, 350, 30);
    nangtung = new Ground(900, 300, 350, 30);

    balebizu = new Balebizu(200, 200, 50, 50);

    tuurid = new Slingshot(balebizu.body, {x:200, y:200});

    qutik1 = new Box(315, 550, 50, 50);
    qutik2 = new Box(370, 550, 50, 50);
    qutik3 = new Box(425, 550, 50, 50);
    qutik4 = new Box(480, 550, 50, 50);
    qutik5 = new Box(342.5, 500, 50, 50);
    qutik6 = new Box(397.5, 500, 50, 50);
    qutik7 = new Box(452.5, 500, 50, 50);
    qutik8 = new Box(370, 450, 50, 50);
    qutik9 = new Box(425, 450, 50, 50);
    qutik10 = new Box(397.5, 400, 50, 50);

    qutik11 = new Box(850, 250, 50, 50);
    qutik12 = new Box(905, 250, 50, 50);
    qutik13 = new Box(960, 250, 50, 50);
    qutik14 = new Box(877.5, 200, 50, 50);
    qutik15 = new Box(932.5, 200, 50, 50);
    qutik16 = new Box(905, 150, 50, 50);
}

function draw(){
    if(backgroundImg){
        background(backgroundImg)
    }

    textSize(35);
    fill("purple");
    text("Score: "+ score, width - 150, 50);
    Engine.update(engine);
    strokeWeight(4);

    zhan.display();
    nangtung.display();
    balebizu.display();
    tuurid.display();

    qutik1.display();
    qutik2.display();
    qutik3.display();
    qutik4.display();
    qutik5.display();
    qutik6.display();
    qutik7.display();
    qutik8.display();
    qutik9.display();
    qutik10.display();

    qutik11.display();
    qutik12.display();
    qutik13.display();
    qutik14.display();
    qutik15.display();
    qutik16.display();
}

function mouseDragged(){
    if(gameState === "tension"){
        Matter.Body.setPosition(balebizu.body, {x:mouseX, y:mouseY});
    }
}

function mouseReleased(){
    tuurid.fly();
    gameState = "fall";
}

function keyPressed(){
    if(keyCode === 32 && gameState === "fall"){
        Matter.Body.setPosition(balebizu.body, {x:200, y:200});
        tuurid.attach(balebizu.body);
        gameState = "tension";
    }
}

async function getBackgroundImage(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/America/Los_Angeles");
    var response_json = await response.json()
    var datetime = response_json.datetime
    var hour = datetime.slice(11, 13);
    if (hour > 06&&hour < 19){
        backgroundImg = 255;
    } else if(hour === 19){
        backgroundImg = "rgb(255, 192, 181)";
    } else {
        backgroundImg = "black";
    }
}
