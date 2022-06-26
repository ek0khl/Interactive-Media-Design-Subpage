// 리본
var colors = [
    '#CBDBEE',
    '#E9CDE3',
    '#F9DD92',
    '#CDFEBD',
    '#D5F8F8'
];
var lines;

function setup() {
  createCanvas(windowWidth, windowHeight*4.2);
 // 리본   
  lines = new Array(15).fill(0).map(l => new Line());
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = 5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = 'rgba(0,0,0,0.250)';
  
  navbar = loadImage('hologram.png');
  logo = loadImage('logo.png');
  search = loadImage('search.png');
  title = loadImage('title.png');
  mililmeter = loadImage('mililmeter.png');
  plant = loadImage('plant.png');
  hangit = loadImage('hangit.png');
  holess = loadImage('holess.png');
  bello = loadImage('bello.png');
  vizero = loadImage('vizero.png');
  sumsei = loadImage('sumsei.png');
  balancemouse = loadImage('balancemouse.png');
  mask = loadImage('mask.png');
  cuckoo = loadImage('cuckoo.png');
  moiswish = loadImage('moiswish.png');
  firstpetdryer = loadImage('firstpetdryer.png');
  groom = loadImage('groom.png');
  bell = loadImage('bell.png');
  time = loadImage('time.png');
  handifan = loadImage('handifan.png');
  footer = loadImage('footer.png');
  contact = loadImage('contact.png');
  pan = loadImage('pan.png');
}

function draw() {
  background('white');
  drawingContext.shadowColor = 'rgba(0,0,0,0.250)';
  if (mouseY < height/5) {
     lines.forEach(l => {
       if (l.ready) {
         l.init();
         l.anim();
       }
     });
    lines.forEach(l => l.display());
 }
  
  //네비게이션바
  drawingContext.shadowColor = 'rgba(0,0,0,0)';
  image(navbar,0,0,windowWidth,navbar.height);
  stroke(255);
  strokeWeight(1);
  line(0,56,windowWidth,56);
  image(logo,100,8,logo.width/22,logo.height/22);
  if (mouseIsPressed) {
     if (dist(mouseX, mouseY, 170, 8) < logo.width/34 && logo.height/22) {
     location.reload();
     location.href='https://editor.p5js.org/s_jiyeon/full/ZYfjE8_BB';
     }}
  fill(255);
  textSize(20);
  text("NEWS",windowWidth/3*2+50,36);
  text("PEOPLE",windowWidth/3*2+150,36);
  text("CONTACT",windowWidth/3*2+260,36);
  text("RECRUIT",windowWidth/3*2+390,36);
  
  
  //카테고리 탭
  drawingContext.shadowColor = 'rgba(0,0,0,0)';
  fill(0);
  textSize(16);
  text("ALL",100,110);
  
  fill(112,112,112);
  text("시각",100+60,110);
  text("산업",100+60*2,110);
  text("건축",100+60*3,110);
  text("건축",100+60*4,110);
  text("패션",100+60*5,110);
  text("공예",100+60*6,110);
  text("예술",100+60*7,110);
  text("영상",100+60*8,110);
  text("게임",100+60*9,110);
  
  stroke(112,112,112);
  strokeWeight(0.3);
  line(0,130,windowWidth,130);
  stroke(0);
  line(90,130,135,130);
  
  
  //검색하기
  drawingContext.shadowColor = 'rgba(0,0,0,0)';
  strokeWeight(1);
  noFill();
  stroke(0,0,0,20);
  ellipse(windowWidth/3*2+50,105,25,25);
  ellipse(windowWidth/3*2+460,105,25,25);
  
  fill(255);
  noStroke();
  rect(windowWidth/3*2+50,93,410,24);
  
  stroke(0);
  strokeWeight(0.1);
  line(windowWidth/3*2+50,92,windowWidth/3*2+460,93);
  line(windowWidth/3*2+50,118,windowWidth/3*2+460,118);
  fill(112,112,112);
  textSize(12);
  text("검색하기",windowWidth/3*2+60,110);
  text("찾고 있는 작품이 있다면 검색해보세요!",windowWidth/3*2+220,110);
  image(search,windowWidth/3*2+450,100)
  
  //타이틀
  drawingContext.shadowColor = 'rgba(0,0,0,0.255)';
  image(title,windowWidth/2-(title.width/2),250);
  
  //작품 1열
  drawingContext.shadowColor = 'rgba(0,0,0,0.255)';
  image(mililmeter,windowWidth/2-(plant.width*2+15*3),title.height+400);
  image(plant,windowWidth/2-(plant.width+15),title.height+400);
  image(hangit,windowWidth/2+15,title.height+400);
  image(holess,windowWidth/2+(plant.width+15*3),title.height+400);
  
  textAlign(CENTER);
  textSize(20);
  fill(53,53,53);
  text("MILILMETER",windowWidth/2-(plant.width*2+15*3)+plant.width/2,(title.height+400)+plant.height+30);
  text("PLANT",windowWidth/2-(plant.width+15)+plant.width/2,(title.height+400)+plant.height+30);
  text("HANG IT",windowWidth/2+15+plant.width/2,(title.height+400)+plant.height+30);
  text("HOLESS",windowWidth/2+(plant.width+15*3)+plant.width/2,(title.height+400)+plant.height+30);
  
  textSize(14);
  text("홍길동",windowWidth/2-(plant.width*2+15*3)+plant.width/2,(title.height+400)+plant.height+50);
  text("홍길동",windowWidth/2-(plant.width+15)+plant.width/2,(title.height+400)+plant.height+50);
  text("홍길동",windowWidth/2+15+plant.width/2,(title.height+400)+plant.height+50);
  text("홍길동",windowWidth/2+(plant.width+15*3)+plant.width/2,(title.height+400)+plant.height+50);
  
  
  
  
  
  //작품 2열
  drawingContext.shadowColor = 'rgba(0,0,0,0.255)';
  image(bello,windowWidth/2-(plant.width*2+15*3),title.height+400+500);
  image(vizero,windowWidth/2-(plant.width+15),title.height+400+500);
  image(sumsei,windowWidth/2+15,title.height+400+500);
  image(balancemouse,windowWidth/2+(plant.width+15*3),title.height+400+500);
  
  textAlign(CENTER);
  textSize(20);
  fill(53,53,53);
  text("BELLO",windowWidth/2-(plant.width*2+15*3)+plant.width/2,(title.height+400)+plant.height+30+500);
  text("VIZERO",windowWidth/2-(plant.width+15)+plant.width/2,(title.height+400)+plant.height+30+500);
  text("SUMSEI",windowWidth/2+15+plant.width/2,(title.height+400)+plant.height+30+500);
  text("BALANCE MOUSE",windowWidth/2+(plant.width+15*3)+plant.width/2,(title.height+400)+plant.height+30+500);
  
  textSize(14);
  text("홍길동",windowWidth/2-(plant.width*2+15*3)+plant.width/2,(title.height+400)+plant.height+50+500);
  text("홍길동",windowWidth/2-(plant.width+15)+plant.width/2,(title.height+400)+plant.height+50+500);
  text("홍길동",windowWidth/2+15+plant.width/2,(title.height+400)+plant.height+50+500);
  text("홍길동",windowWidth/2+(plant.width+15*3)+plant.width/2,(title.height+400)+plant.height+50+500);
    
  
  
  
  
  //작품 3열
  drawingContext.shadowColor = 'rgba(0,0,0,0.255)';
  image(mask,windowWidth/2-(plant.width*2+15*3),title.height+400+500*2);
  image(cuckoo,windowWidth/2-(plant.width+15),title.height+400+500*2);
  image(moiswish,windowWidth/2+15,title.height+400+500*2);
  image(firstpetdryer,windowWidth/2+(plant.width+15*3),title.height+400+500*2);
  
  textAlign(CENTER);
  textSize(20);
  fill(53,53,53);
  text("MASK",windowWidth/2-(plant.width*2+15*3)+plant.width/2,(title.height+400)+plant.height+30+500*2);
  text("CUCKOO",windowWidth/2-(plant.width+15)+plant.width/2,(title.height+400)+plant.height+30+500*2);
  text("MOIS WISH",windowWidth/2+15+plant.width/2,(title.height+400)+plant.height+30+500*2);
  text("FIRST PET DRYER",windowWidth/2+(plant.width+15*3)+plant.width/2,(title.height+400)+plant.height+30+500*2);
  
  textSize(14);
  text("홍길동",windowWidth/2-(plant.width*2+15*3)+plant.width/2,(title.height+400)+plant.height+50+500*2);
  text("홍길동",windowWidth/2-(plant.width+15)+plant.width/2,(title.height+400)+plant.height+50+500*2);
  text("홍길동",windowWidth/2+15+plant.width/2,(title.height+400)+plant.height+50+500*2);
  text("홍길동",windowWidth/2+(plant.width+15*3)+plant.width/2,(title.height+400)+plant.height+50+500*2);
    
  
  
  
  
  //작품 4열
  drawingContext.shadowColor = 'rgba(0,0,0,0.255)';
  image(groom,windowWidth/2-(plant.width*2+15*3),title.height+400+500*3);
  image(bell,windowWidth/2-(plant.width+15),title.height+400+500*3);
  image(time,windowWidth/2+15,title.height+400+500*3);
  image(handifan,windowWidth/2+(plant.width+15*3),title.height+400+500*3);
  
  textAlign(CENTER);
  textSize(20);
  fill(53,53,53);
  text("GROOM",windowWidth/2-(plant.width*2+15*3)+plant.width/2,(title.height+400)+plant.height+30+500*3);
  text("BELL",windowWidth/2-(plant.width+15)+plant.width/2,(title.height+400)+plant.height+30+500*3);
  text("TIME",windowWidth/2+15+plant.width/2,(title.height+400)+plant.height+30+500*3);
  text("HANDI FAN",windowWidth/2+(plant.width+15*3)+plant.width/2,(title.height+400)+plant.height+30+500*3);
  
  textSize(14);
  text("홍길동",windowWidth/2-(plant.width*2+15*3)+plant.width/2,(title.height+400)+plant.height+50+500*3);
  text("홍길동",windowWidth/2-(plant.width+15)+plant.width/2,(title.height+400)+plant.height+50+500*3);
  text("홍길동",windowWidth/2+15+plant.width/2,(title.height+400)+plant.height+50+500*3);
  text("홍길동",windowWidth/2+(plant.width+15*3)+plant.width/2,(title.height+400)+plant.height+50+500*3);
  
  
  
  //풋터
  drawingContext.shadowColor = 'rgba(0,0,0,0)';
  image(footer,0,2700,windowWidth,footer.height);
  image(logo,windowWidth/2-(logo.width/15)/2,2750,logo.width/15,logo.height/15);
  image(contact,0,2820,windowWidth,contact.height*1.2);
  stroke(255);
  strokeWeight(1);
  line(0,2900,windowWidth,2900);
  image(logo,100,2950,logo.width/22,logo.height/22);
  
  noStroke();
  fill(255);
  textAlign(LEFT);
  text("개인정보처리방침 | 개인정보목적외이용제공대장 | 정보보호실천수칙",100,3050);
  text("15073 경기도 시흥시 산기대학로 237 (정왕동) 한국공학대학교 공학관 A동",100,3100);
  text("학부 행정실: 031-8041-0660 | 학교대표전화: 031-8041-1000 | 입학안내: 1588-2036",100,3120);
  text("Copyright© 2022 TUKOREA DESIGN ENGINEERING. ALL RIGHTS RESERVED.",100,3170);
  textSize(16);
  text("ABOUT",windowWidth/3*2,2970);
  text("TU KOREA",windowWidth/3*2,3010);
  text("RECRUIT",windowWidth/3*2,3050);
  
  if (mouseIsPressed) {
     if (mouseY > height/5 && mouseY < height/5*1.4) {
     image(pan, mouseX, mouseY, pan.width/8, pan.height/8);
     }}
  
  if (mouseIsPressed) {
     if (mouseY > height/5*1.8 && mouseY < height/5*2.2) {
     image(pan, mouseX, mouseY, pan.width/8, pan.height/8);
     }}
  
  if (mouseIsPressed) {
     if (mouseY > height/5*2.55 && mouseY < height/5*3) {
     image(pan, mouseX, mouseY, pan.width/8, pan.height/8);
     }}
  
  if (mouseIsPressed) {
     if (mouseY > height/5*3.45 && mouseY < height/5*3.8) {
     image(pan, mouseX, mouseY, pan.width/8, pan.height/8);
     }}
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function Line(x1, y1, x2, y2) {
    this.init(x1, y1, x2, y2);
}

Line.prototype.init = function(x1, y1, x2, y2) {
    this.x1 = this.x2 = x1 || random(-100, width + 100);
    this.y1 = this.y2 = y1 || random(-100, height + 100);
    this.tx = x2 || random(-100, width + 100);
    this.ty = y2 || random(-100, height + 100);
    this.c = ~~random(1, colors.length);
    this.ready = true;
    this.sw = random(20, 400);
};

Line.prototype.display = function() {
    stroke(colors[this.c]);
    strokeCap(SQUARE);
    strokeWeight(this.sw);
    line(this.x1, this.y1, this.x2, this.y2);
};

Line.prototype.anim = function() {
    this.ready = false;

    var tx = this.tx,
        ty = this.ty;

    var step2 = function() {
        TweenMax.to(this, 0.3, {
            x1: tx,
            y1: ty,
            delay: 2 + random(1),
            onComplete: setReady
        });
    }.bind(this);

    var setReady = function() {
        this.ready = true;
    }.bind(this);

    TweenMax.to(this, 0.3, {
        x2: tx,
        y2: ty,
        delay: random(1),
        onComplete: step2
    });
};