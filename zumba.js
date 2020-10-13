// Spiller 1
let tnr = 0;
let tal = ["orange","grøn","blå","lila","orange","grøn","blå","lila","orange","grøn","blå","lila","orange","grøn","blå","lila","orange","grøn","blå","lila","orange","grøn","blå","lila","orange","grøn","blå","lila","orange","grøn","blå","lila","orange","grøn","blå","lila"];
let svar = ["o","g","b","l","o","g","b","l","o","g","b","l","o","g","b","l","o","g","b","l","o","g","b","l","o","g","b","l","o","g","b","l","o","g","b","l","o","g","b","l","o","g","b","l","o","g","b","l"];
const a = tal.lenght;
let svar_givet = false;
let point = 0;
// Spiller 2
let tnr2 = 0;
let tal2 = ["Rød","Gul","Pink","Turkis","Rød","Gul","Pink","Turkis","Rød","Gul","Pink","Turkis","Rød","Gul","Pink","Turkis","Rød","Gul","Pink","Turkis","Rød","Gul","Pink","Turkis","Rød","Gul","Pink","Turkis","Rød","Gul","Pink","Turkis","Rød","Gul","Pink","Turkis","Rød","Gul","Pink","Turkis"];
let svar2 = ["rr","gg","pp","tt","rr","gg","pp","tt","rr","gg","pp","tt","rr","gg","pp","tt","rr","gg","pp","tt","rr","gg","pp","tt","rr","gg","pp","tt","rr","gg","pp","tt","rr","gg","pp","tt","rr","gg","pp","tt","rr","gg","pp","tt",];
const a2 = tal2.lenght;
let svar_givet2 = false;
let point2 = 0;

function setup() {
createCanvas(windowWidth, windowHeight);
}

function draw() {

//ELLIPSERNE
// SPILLER 1
// orange  LEFT_ARROW
fill(250,0,0);
textSize(20);
  text("venstre pil",200,300);
  fill(250,150,0);
  ellipse(250,200,150,150);
// lyse grøn RIGHT_ARROW
fill(250,0,0);
textSize(20);
  text("højre pil",450,300);
  fill(0,400,0);
  ellipse(500,200,150,150);
// blå DOWN_ARROW
fill(250,0,0);
textSize(20);
  text("nedad pil",200,400);
  fill(0,200,500);
  ellipse(250,500,150,150);
// Lila UP_ARROW
fill(250,0,0);
textSize(20);
  text("opad pil",450,400);
  fill(250,00,250);
  ellipse(500,500,150,150);
// SPILLER 2
// Rød
fill(250,0,0);
textSize(20);
  text("a knap",950,300);
fill(250,00,0);
ellipse(1000,200,150,150);
// Gul
fill(250,0,0);
textSize(20);
  text("w knap",1250,300);
fill(255,250,0);
ellipse(1300,200,150,150);
// pink
fill(250,0,0);
textSize(20);
  text("s knap",950,400);
fill(230,190,225);
ellipse(1000,500,150,150);
// Turkis
fill(250,0,0);
textSize(20);
  text("d knap",1250,400);
fill(34,152,156);
ellipse(1300,500,150,150);

//RECTANGLERNE
// Til højre
fill(0,0,0);
rect(50,10,300,100);
fill(300,100,100);
textSize(30);
text("Spiller 1",100,50);
// Til højre
fill(0,0,0);
rect(1100,10,300,100);
fill(300,100,100);
textSize(30)
text("Spiller 2",1200,50);

//spiller 1
print_point(point);
print_tal(tnr);
// Siller 2
print_point2(point2);
print_tal2(tnr2);
}
// function draw ends

// Printe SPørgsmål og POINT
      // Function print spørgsmål Spiller 1
function print_tal(tnr) {
  fill(29);
  textSize(40);
  text(tal[tnr],300,350);
}
    // Function Print spørgmsål Spiller 2
function print_tal2(tnr2){
  fill(29);
  textSize(40);
  text(tal2[tnr2],1000,350);
}

    // Function Point Spiller 1
function print_point(point) {
  fill(0);
  textSize(32);
  text(point, 500, 350);
}
    //Function Point Spiller 2
function print_point2(point2) {
  fill(0);
  textSize(32);
  text(point2, 1150, 350);
}
    //
// Færdig med at printe spørgsmål og point

// Spiller 1
function keyPressed(){
  // Spiller 1
  // Videre til næste spørgsmål hvis mellemtasten trykkes
  if (keyCode == 32) {
    tnr += 1;
    background(255)
    svar_givet = false;
    // Hvis sidste spørgsmål gå tilbage til første
    if (tnr === a){
      tnr = 0;
    }
  }
// ORANGE
  if (keyCode === LEFT_ARROW && svar_givet === false) {
    if (svar[tnr] === 'o') {
      svar_givet = true;
      point += 1;
    }
    else {
      svar_givet = true;
      point += -1;
    }
  }
// Grøn
  if (keyCode === RIGHT_ARROW && svar_givet === false) {
    if (svar[tnr] === 'g') {
      svar_givet = true;
      point += 1;
    }
    else {
      svar_givet = true;
      point += -1;
    }
  }
// BLÅ
  if (keyCode === DOWN_ARROW && svar_givet === false) {
  if (svar[tnr] === 'b') {
    svar_givet = true;
    point += 1;
  }
  else {
    svar_givet = true;
    point += -1;
  }
}
// LILA
  if (keyCode === UP_ARROW && svar_givet === false) {
  if (svar[tnr] === 'l') {
    svar_givet = true;
    point += 1;
  }
  else {
    svar_givet = true;
    point += -1;
  }
}
// turkis SPILLER 2
  if (keyCode === 68 && svar_givet2 === false) {
  if (svar2[tnr2] === 'tt') {
    svar_givet2 = true;
    point2 += 1;
  }
  else {
    svar_givet2 = true;
    point2 += -1;
  }
}

}
//
if (point == 10 ){
  fill(300,100,100);
  textSize(30);
  text("Yay Spiller 1 vandt",600,100);
  point = 0;
}
//

// SPILLER 2
function keyTyped(){
  // Videre til næste spørgsmål hvis mellemtasten trykkes
if (key === 'q') {
    tnr2 += 1;
    background(255)
    svar_givet2 = false;
    // Hvis sidste spørgsmål gå tilbage til første
    if (tnr2 === a2){
      tnr2 = 0;
    }
  }
  // Rød
if (key === "a" && svar_givet2 === false) {
    if (svar2[tnr2] === 'rr') {
      svar_givet2 = true;
      point2 += 1;
    }
    else {
      svar_givet2 = true;
      point2 += -1;
    }
  }
// Gul
if (key === "w" && svar_givet2 === false) {
  if (svar2[tnr2] === 'gg') {
    svar_givet2 = true;
    point2 += 1;
  }
  else {
    svar_givet2 = true;
    point2 += -1;
  }
}
// Pink
if (key === "s" && svar_givet2 === false) {
  if (svar2[tnr2] === 'pp') {
    svar_givet2 = true;
    point2 += 1;
  }
  else {
    svar_givet2 = true;
    point2 += -1;
  }
}
}
// end function key typed

if (point2 == 10){
  ill(300,100,100);
  textSize(30);
  text("Yay Spiller 2 vandt",600,100);
  point2 = 0;
  point = 0;
}
