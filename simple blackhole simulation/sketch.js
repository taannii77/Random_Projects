const c = 30;
const G = 3.54;
const particles=[];
const dt=0.1;  //delta time step
let m87;
let s, e;

function setup() {
  createCanvas(windowWidth, windowHeight);   //height,width
  ellipseMode(RADIUS);
  m87 = new Blackhole(width / 2, height / 2, 10000);
  
   s=height/2;  //start
   e=height/2 - m87.rs*2.6;  //end
  
  for(let y=0; y<s; y+=10){
    particles.push(new Photon(width-20,y));  //adding elements to array
  }

}

function draw() {
  background(255);
  m87.show();
  
  //for path
  stroke(0);
  strokeWeight(1);
  line(0,s,width,s);
  line(0,e,width,e);
  
  
  //showing the movement of particles, for every photon in particles
  for(let p of particles ) {
    m87.pull(p);  //pull a particle
    p.update();
    p.show();
  } 
  
  m87.show();
}