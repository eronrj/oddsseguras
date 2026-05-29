
function runScan(){
 const p=70+Math.floor(Math.random()*25);
 const m=72+Math.floor(Math.random()*25);
 const a=75+Math.floor(Math.random()*20);
 document.getElementById('poisson').innerText=p+'%';
 document.getElementById('mc').innerText=m+'%';
 document.getElementById('ab').innerText=a;
 document.getElementById('status').innerText=a>=80?'🟢 VERDE':'🟡 AMARELO';
 const jogos=[['Flamengo x Vitória',92],['Palmeiras x Sport',88],['Real Madrid x Oviedo',90]];
 document.getElementById('ranking').innerHTML=jogos.map(j=>`<tr><td>${j[0]}</td><td>${j[1]}</td></tr>`).join('');
}
