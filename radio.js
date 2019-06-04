let rad;
function burrito(){
let rad = createRadio();
rad.position(20,20);
rad.option('rotateX',1);
rad.option('rotateY',2);
rad.option('rotateZ',3);
}

function drawburrito(){
var val = rad.value();
switch(val){
	case '1': rx();break;
	case '2': ry();break;
	case '3': rz();break;
}
}

function rx(){
rotateX(ang*PI/15);
torus(20,10);
ang++;
poly(txy,12,40);
}

function ry(){
rotateY(ang*PI/15);
torus(20,10);
ang++;
poly(txy,12,40);
}

function rz(){
rotateZ(ang*PI/15);
torus(20,10);
ang++;
poly(txy,12,40);
}
