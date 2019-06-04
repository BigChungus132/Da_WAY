function linesPart2(t2,n,len){
for(let j=0;j<2*n+1;j++){lin[j]=[];}


for(let k=0;k<n;k++){
t2.fd(len);
xch=t2.xpos();ych=t2.ypos();
lin[k].push(xch);lin[k].push(ych);
lin[k].push(0);
}

t2.bk(len*n);t2.rt(60);

for(let j=n+1;j<2*n+1;j++){
t2.fd(len);
xch=t2.xpos();ych=t2.ypos();
lin[j].push(xch);lin[j].push(ych);
lin[j].push(0);
}
t2.bk(len*n);t2.lt(60);
for(let j=0;j<n;j++){
	line(lin[n-j-1][0],lin[n-j-1][1],lin[n-j-1][2],lin[n+1+j][0],lin[n+1+j][1],lin[n+1+j][2]);
}
}