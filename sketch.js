var coins;
var aristotle;
var anim;
var score = 0;
var c;
var csword;
var cchicken;
var timer;
function preload() {
    anim = loadAnimation("assets/Ben-1 .png", "assets/Ben-2 .png");
    csword = loadAnimation("assets/New Piskel-1.png");
    cchicken = loadAnimation("assets/Chicken.png");
}
function setup() {
  
    createCanvas(700,650);
    coins = new Group();
    for (var i = 0; i < 10; i++) {
       var c = createSprite(
        random(100, width-110),
        random(100, height-110), 
        10, 10);
        if(random(100)<50){
         c.addAnimation("default", csword);  
        }else{
         c.addAnimation("chicken", cchicken); 
        }
        
        
        coins.add(c);
        
    }
    aristotle = createSprite(width/2,height-75);
    aristotle.addAnimation("default", anim);

}

function draw() {
    
    
     background(255,50,100);
       var timer = 15-int(millis()/1000);
    text(timer,50,50);
    if (timer <=0 ) {
        textSize(25);
        textAlign(CENTER, RIGHT);
        text("you failed Aristotle :(", width/2, height/4);
        text("refresh to play again", width/2, height/3);
        }
    if (timer<=0){
        noLoop();
    }
    
       //left wall
        line(100,100,100,600);
    //bottom wall left
        line(100,600,300,600);
    //entrance left
        line(300,600,300,650);
    //entrance right
        line(400,600,400,650);
    //bottom wall right
        line(400,600,600,600);
    //right wall
        line(600,100,600,600);
    //top wall
         line(100,100,600,100);
 
    
    
    aristotle.overlap(coins, getCoin);
    drawSprites();
    noStroke();
    textSize(25);
    textAlign(CENTER, RIGHT);
    if (coins.length > 0) {
        text(score, width/2, height/2);
    }
    else {
        text("You Win!: Balance is Crucial.", width/2, height/2);
        text("refresh to play again", width/2, height/ 1.5);
        noLoop();
    }
    
    if(aristotle.position.x >= 590){
        aristotle.setSpeed(0, 0);
    }
    if(aristotle.position.x <= 100){
     aristotle.setSpeed(0,0);
 }
    if (aristotle.position.y <= 100){
    aristotle.setSpeed(0,0);
    } 
    if (aristotle.position.y >= 590){
        aristotle.setSpeed(0,0);
    }
         
     }

function getCoin(aristotle, coin){
    coin.remove();
    score +=1;
    }
function keyPressed() {
    if (keyCode == RIGHT_ARROW) {
        aristotle.setSpeed(1.5, 0);
    }
    else if (keyCode == DOWN_ARROW) {
        aristotle.setSpeed(1.5, 90);
    }
    else if (keyCode == LEFT_ARROW) {
        aristotle.setSpeed(1.5, 180);
    }
    else if (keyCode == UP_ARROW) {
        aristotle.setSpeed(1.5, 270);
    }
    else if (key == ' '){
        aristotle.setSpeed(0,0);
}
    return false;
    
}
