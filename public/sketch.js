var bubbles;
var table;
var a=0;
var b=0;
var c=0;
var pg;
var bb=0;
var f=0;
var aa=0;
var scene1 = true;
var scene2 = false;
var scene3 = false;

function preload() {
table = loadTable("data.csv", "header");
}

function setup() {
createCanvas(windowWidth, windowHeight, WEBGL);
pg = createGraphics(256,256);
socket.on('mouse',
// When we receive data
function(data) {
  console.log("Got: " + data.a1);
  b = 1;
  scene1 = false;
  scene2 = true;
  aa = aa+1;
  if (aa >= 10) {
    bb = bb+1;
}
}
);

loadData();
loadPics();

}

function draw() {
background(250);

if (aa < 10) {
      translate(0,0,150);
      push();
      pg.background(250);
      pg.textSize(18);
      pg.text('<--look over there, bro', 10, 150);
      //pass graphics as texture
      texture(pg);
      rotateZ((.1*sin(f)));
      f=frameCount*.05;
      plane(400);
      pop();
      translate(0,0,-150);
}
if (aa == 10) {
    translate(0,0,150);
    push();
    pg.background(250);
    pg.textSize(18);
    pg.text('ok, now shit boutta happen', 10, 150);
    //pass graphics as texture
    texture(pg);
    rotateZ((.1*sin(f)));
    f=frameCount*.05;
    plane(400);
    pop();
    translate(0,0,-150);
}

if (bb>=1) {
    for (var i=0; i < (bb-1); i++) {
        bubbles[i].display();
        }
}

if (scene1 == true) {
    if (a==0) {
    translate(0,0,150);
    push();
    pg.background(250);
    pg.textSize(24);
    pg.text('dont press a key', 10, 150);
    //pass graphics as texture
    texture(pg);
    rotateZ((.1*sin(f)));
    f=frameCount*.05;
    plane(400);
    pop();
    translate(0,0,-150);
    }
    if (a==1) {
    translate(0,0,150);
    push();
    background(250,0,0);
    pg.background(250,0,0);
    pg.textSize(24);
    pg.text('come on.. i said not to', 10, 150);
    //pass graphics as texture
    texture(pg);
    rotateZ((.1*sin(f)));
    f=frameCount*.05;
    plane(400);
    pop();
    translate(0,0,-150);
    }
    if (a==2) {
    translate(0,0,150);
    push();
    background(0,250,0);
    pg.background(0,250,0);
    pg.textSize(24);
    pg.text('seriously...?', 10, 150);
    //pass graphics as texture
    texture(pg);
    rotateZ((.1*sin(f)));
    f=frameCount*.05;
    plane(400);
    pop();
    translate(0,0,-150);
    }
    if (a==3) {
    translate(0,0,150);
    push();
    background(50,0,150);
    pg.background(50,0,150);
    pg.textSize(24);
    pg.text('hmm. ok, well...', 10, 150);
    //pass graphics as texture
    texture(pg);
    rotateZ((.1*sin(f)));
    f=frameCount*.05;
    plane(400);
    pop();
    translate(0,0,-150);
    }
    if (a==4) {
    translate(0,0,150);
    push();
    background(150,0,50);
    pg.background(150,0,50);
    pg.textSize(18);
    pg.text('for this year, lets say we have...', 10, 150);
    //pass graphics as texture
    texture(pg);
    rotateZ((.1*sin(f)));
    f=frameCount*.05;
    plane(400);
    pop();
    translate(0,0,-150);
    }
    if (a==5) {
        translate(0,0,150);
    push();
    background(150,250,150);
    pg.background(150,250,150);
    pg.textSize(18);
    pg.text('about a million Americans.', 10, 150);
    //pass graphics as texture
    texture(pg);
    rotateZ((.1*sin(f)));
    f=frameCount*.05;
    plane(400);
    pop();
    translate(0,0,-150);
    }
    if (a==6) {
    translate(0,0,150);
    push();
    background(250,150,140);
    pg.background(250,150,140);
    pg.textSize(24);
    pg.text('my question is...', 10, 150);
    //pass graphics as texture
    texture(pg);
    rotateZ((.1*sin(f)));
    f=frameCount*.05;
    plane(400);
    pop();
    translate(0,0,-150);
    }
    if (a==7) {
    translate(0,0,150);
    push();
    background(170,100,250);
    pg.background(170,100,250);
    pg.textSize(18);
    pg.text('how many will die traveling?', 10, 150);
    //pass graphics as texture
    texture(pg);
    rotateZ((.1*sin(f)));
    f=frameCount*.05;
    plane(400);
    pop();
    translate(0,0,-150);
    }
    if (a==8) {
    translate(0,0,150);
    push();
    background(190);
    pg.background(190);
    pg.textSize(24);
    pg.text('fun topic, right?', 10, 150);
    //pass graphics as texture
    texture(pg);
    rotateZ((.1*sin(f)));
    f=frameCount*.05;
    plane(400);
    pop();
    translate(0,0,-150);
    }
    if (a==9) {
    translate(0,0,150);
    push();
    background(250,180,100);
    pg.background(250,180,100);
    pg.textSize(24);
    pg.text('well here it is anyways!', 10, 150);
    //pass graphics as texture
    texture(pg);
    rotateZ((.1*sin(f)));
    f=frameCount*.05;
    plane(400);
    pop();
    translate(0,0,-150);
    }
}
if (scene2 == true) {
if (a>=1) {
    background(0);
    camera(mouseX, mouseY, (height/2) / tan(PI/6), width/2, height/2, 0, 0, 1, 0);
    translate(width/2, height/2, -100);
}
// Display all bubbles
if (c==1) {
    for (var q=(a-1); q < bubbles.length; q++) {
    bubbles[q].display();
    }
}
}
if (scene3 == true) {
    translate(300,250,150);
    push();
    background(0);
    pg.background(bpic6);
    pg.textSize(36);
    pg.text('that was fun!!!', 10, 150);
    //pass graphics as texture
    texture(pg);
    rotateZ((.1*sin(f)));
    f=frameCount*.05;
    plane(400);
    pop();
    translate(-300,-250,-150);
}
}

function keyPressed() {
a=(a+1);
c=1;
sendmouse(a);
if (scene1 == true) {
    if(a==10) {
    scene2 = true;
    scene1 = false;
    a=1;
    }
}
if (scene2 == true) {
    if(a==7) {
    scene2 = false;
    scene3 = true;
    }
}
}

//Socket stuff//
function sendmouse(valueA) {
    console.log("sendmouse: " + valueA);
    
    var data = {
      a1: valueA
    };
  
    socket.emit('mouse',data);
}

function loadData() {
// Load CSV file into a Table object
// "header" option indicates the file has a header row

// The size of the array of Bubble objects is determined by the total number of rows in the CSV
bubbles = [];

// You can access iterate over all the rows in a table
for (var i = 0; i < table.getRowCount(); i++) {
var row = table.getRow(i);
// You can access the fields via their column name (or index)
var x = row.get("x");
var y = row.get("y");
var z = row.get("z");
var w = row.get("width");
var h = row.get("height");
var d = row.get("depth");
var p = row.get("pin");
var spin = random(.01,.015);
// Make a Bubble object out of the data read
bubbles[i] = new Bubble(x, y, z, w, h, d, p, spin);
}
}

class Bubble {
constructor(x, y, z, w, h, d, p) {
this.x = Number(x);
this.y = Number(y);
this.z = Number(z);
this.width = Number(w);
this.height = Number(h);
this.depth = Number(d);
this.pin = Number(p);
this.spin = random(.01,.005);
}

// Display the Bubble
display() {

if (a>=1) {
if(this.pin==1) {
    translate(0,0,-280);
    push();
    texture(bpic1);
    rotateY(.15);
    rotateZ(frameCount * .01);
    plane(4000, 2000);
    rotateZ(frameCount * -.01);
    rotateY(-.15);
    pop();
    translate(0,0,280);
texture(pic1);
} else if(this.pin==2) {
    translate(0,0,-280);
    push();
    texture(bpic2);
    rotateX(.15);
    rotateZ(frameCount * .01);
    plane(4000, 2000);
    rotateZ(frameCount * -.01);
    rotateX(-.15);
    pop();
    translate(0,0,280);
texture(pic2);
} else if(this.pin==3) {
    translate(0,0,-320);
    push();
    rotateX(-.10);
    texture(bpic3);
    rotateZ(frameCount * -.005);
    plane(4000, 2000);
    rotateX(.10);
    rotateZ(frameCount * .005);
    pop();
    translate(0,0,320);
texture(pic3);
} else if(this.pin==4) {
    translate(0,0,-340);
    push();
    rotateX(.1);
    rotateY(.1)
    texture(bpic5);
    rotateZ(frameCount * .005);
    plane(4000, 2000);
    rotateX(-.1);
    rotateY(-.1);
    rotateZ(frameCount * -.005);
    pop();
    translate(0,0,340);
texture(pic4);
} else if(this.pin==5) {
    translate(0,0,-340);
    push();
    rotateX(-.07);
    rotateY(-.07)
    texture(bpic4);
    rotateZ(frameCount * .005);
    plane(4000, 2000);
    rotateX(.07);
    rotateY(.07);
    rotateZ(frameCount * -.005);
    pop();
    translate(0,0,340);
texture(pic5);
} else if(this.pin==6) {
    translate(0,0,-360);
    push();
    rotateX(-.05);
    rotateY(.05)
    texture(bpic6);
    rotateZ(frameCount * .005);
    plane(4000, 2000);
    rotateX(.05);
    rotateY(-.05);
    rotateZ(frameCount * -.005);
    pop();
    translate(0,0,360);
fill(250);
}
}

if (bb>=1) {
if(this.pin==1) {
    translate(0,0,-400);
    push();
    texture(pic1);
    rotateZ((.1*sin(f)));
    f=frameCount*.05;
    plane(1300, 1300);
    rotateZ(frameCount * -.01);
    pop();
    translate(0,0,400);
texture(rpic1);
} else if(this.pin==2) {
    translate(0,0,-399);
    push();
    texture(pic2);
    rotateZ((.1*sin(f)));
    f=frameCount*.05;
    plane(1300, 1300);
    rotateZ(frameCount * -.01);
    pop();
    translate(0,0,399);
texture(rpic2);
} else if(this.pin==3) {
    translate(0,0,-398);
    push();
    texture(pic3);
    rotateZ((.1*sin(f)));
    f=frameCount*.05;
    plane(1300, 1300);
    rotateZ(frameCount * -.01);
    pop();
    translate(0,0,398);
texture(rpic3);
} else if(this.pin==4) {
    translate(0,0,-397);
    push();
    texture(pic4);
    rotateZ((.1*sin(f)));
    f=frameCount*.05;
    plane(1300, 1300);
    rotateZ(frameCount * -.01);
    pop();
    translate(0,0,397);
texture(rpic4);
} else if(this.pin==5) {
    translate(0,0,-396);
    push();
    texture(pic5);
    rotateZ((.1*sin(f)));
    f=frameCount*.05;
    plane(1300, 1300);
    rotateZ(frameCount * -.01);
    pop();
    translate(0,0,396);
texture(rpic5);
}
}

translate(this.x, this.y, this.z);
push();
rotateZ(frameCount * this.spin);
rotateX(frameCount * this.spin);
rotateY(frameCount * this.spin);

box(this.width, this.height, this.depth);
pop();
translate(-(this.x),-(this.y),-(this.z));
}
}

function loadPics() {
    pic1 = loadImage("train.jpg");
    pic2 = loadImage("plane.jpg");
    pic3 = loadImage("walking.jpg");
    pic4 = loadImage("boat.jpg");
    pic5 = loadImage("car.jpg");
    rpic1 = loadImage("rtrain.png");
    rpic2 = loadImage("rplane.png");
    rpic3 = loadImage("rwalking.png");
    rpic4 = loadImage("rboat.png");
    rpic5 = loadImage("rcar.png");
    bpic1 = loadImage("bg1.png");
    bpic2 = loadImage("bg2.jpg");
    bpic3 = loadImage("bg3.png");
    bpic4 = loadImage("bg4.png");
    bpic5 = loadImage("bg5.jpg");
    bpic6 = loadImage("bg6.jpg");
}