let can;let r=30;let ch=0;let t;
let txy;let num1=30,len1=80,num2=30,len2=15;
var slider;
function setup() {
checkbox = createCheckbox('label', false);
checkbox.changed(myCheckedEvent);
slider = createSlider(5,30,10);
slider.position(900,120);
slider.style('bdd');
can=createCanvas(700,500,WEBGL);
can.position(70,25);
can.class('bdd');
txy=new logoXY(0,0,0);
t=new logoXY(0,0,0);
frameRate(140);
strokeWeight(2);

}
let ang=0;
let val;
function draw() {
//clear();
background(200,160,120);
val = slider.value();
ang++;
switch(ch%2){
case 0:push();translate(-200,-200,0);lines(val,len2,t);pop();break;
case 1:
push();rotateX(ang*PI/15);translate(-50,-200,0);logoPtsXY(val,len1,t);pop();break;

}
torus(20,val);
}