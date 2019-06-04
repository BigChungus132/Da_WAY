let xch;let ych;
let t1;


function lines(n,len,t1){
for(let j=0;j<2*n+1;j++){lin[j]=[];}
for(let j=0;j<n;j++){
	//print(t1);
t1.fd(len);
xch=t1.xpos();ych=t1.ypos();
lin[j].push(xch);lin[j].push(ych);
lin[j].push(0);
}

t1.bk(len*n);t1.rt(90);

for(let j=n+1;j<2*n+1;j++){
t1.fd(len);
xch=t1.xpos();ych=t1.ypos();
lin[j].push(xch);lin[j].push(ych);
lin[j].push(0);
}
t1.bk(len*n);t1.lt(90);
for(let j=0;j<n;j++){
	line(lin[n-j-1][0],lin[n-j-1][1],lin[n-j-1][2],lin[n+1+j][0],lin[n+1+j][1],lin[n+1+j][2]);
}
}

function myCheckedEvent() {
  if (this.checked()) {
    console.log('Checking!');
  } else {
    console.log('Unchecking!');
  }
}
