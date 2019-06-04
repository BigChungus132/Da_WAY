let ar=[];let lin=[];
let pts=[];let str;let cnt=0;
function poly(t,n,len){
	for(let j=0;j<n;j++){
t.fd(len);t.rt(360/n);
}
}

function chgRate(){r=5;frameRate(5);
document.getElementById("whatisR").innerHTML=r;}

function info(){
	let str=document.getElementById("inp1").value;

	ar=str.split(';')
	document.getElementById("par1").innerHTML=ar[0];
	document.getElementById("par2").innerHTML=ar[1];
	document.getElementById("par3").innerHTML=ar[2];
	document.getElementById("par4").innerHTML=ar[3];
	num1=floor(ar[0]);len1=floor(ar[1]);num2=floor(ar[2]);
	len2=floor(ar[3]);
	r=random(floor(50));
	frameRate(r);
}

function chgImage(){
	switch(cnt%2){
	case 0:document.getElementById("but2").value="origImage";ch=0;
	break;
	case 1:document.getElementById("but2").value="newImage";ch=1;
	break;	
	}
cnt++;
}



function logoPtsXY(n,len,t){
for(let j=0;j<n;j++){pts[j]=[];}
for(let j=0;j<n;j++){t.fd(len);t.rt(360/n);
xch=t.xpos();ych=t.ypos();
pts[j].push(xch);pts[j].push(ych);pts[j].push(0);
}
for(let j=0;j<n;j++){
for(let k=0;k<n;k++){
	line(pts[j][0],pts[j][1],pts[j][2],pts[k][0],pts[k][1],pts[k][2]);
}
}
}

