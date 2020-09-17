let sporgsmol_nummer = 0;
let point = 0;
let sporgsmol = ['Er hjulet rundt?', 'Er elefantsnot fra elefanter?', 'Er jorden rund?' , 'Er rundetårn firkantet?','Er Grønland et land?','Er solen varm?','Er Nepoleon død?','Drikker køer mælk?'];
let svar = ['ja','nej','ja','nej','nej','ja','ja','nej'];
const antal_sporgsmal = sporgsmol.length;
let svar_givet = false;

function setup() {
createCanvas(windowWidth, windowHeight);
}


function draw() {


  // Ja knap
  fill(0,200,0);
  ellipse(250,350,200,200);
  fill(0);
  textSize(32);
  text('ja', 240, 360);
  // Nej knap
  fill(200,0,0);
  ellipse(1000,350,200,200);
  fill(0);
  textSize(32);
  text('nej', 980, 360);
  // Viser spørgsmål
  print_sporgsmal(sporgsmol_nummer);

  fill(300,300,300);
  square(480,220,50);

  print_point(point);
}

// Printe spørgsmålet
function print_sporgsmal(sporgsmol_nummer) {
  fill(0);
  textSize(32);
  text(sporgsmol[sporgsmol_nummer], 480, 390);

}

//Printe score
function print_point(point) {
  fill(0);
  textSize(32);
  text(point, 490, 250);
}



function keyPressed(){
  // Videre til næste spørgsmål hvis mellemtasten trykkes
  if (keyCode == 32) {
    sporgsmol_nummer += 1;
    background(255)
    svar_givet = false;
    // Hvis sidste spørgsmål gå tilbage til første
    if (sporgsmol_nummer === antal_sporgsmal){
      sporgsmol_nummer = 0;
    }
  }
  if (keyCode === LEFT_ARROW && svar_givet === false) {
    if (svar[sporgsmol_nummer] === 'ja') {
      text('hurra',500,200);
      svar_givet = true;
      point += 1;

    }
    else {
      text('øv',500,200);
      svar_givet = true;
      point += -1;

    }
  }
  if (keyCode === RIGHT_ARROW && svar_givet === false) {
    if (svar[sporgsmol_nummer] === 'nej') {
      text('hurra',500,200);
      svar_givet = true;
      point += 1;

    }
    else {
      text('øv',500,200);
      svar_givet = true;
      point += -1;
    }
  }
}
