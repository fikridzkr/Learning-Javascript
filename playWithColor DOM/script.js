const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.addEventListener('click', function(){
    document.body.classList.toggle('purple');
})


const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type','button');
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click' , function (){
    const red = Math.round(Math.random() * 255 + 1);
    const green = Math.round(Math.random() * 255 + 1);
    const blue = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
})


const sMerah = document.querySelector('input[name=sMerah');
const sHijau = document.querySelector('input[name=sHijau');
const sBiru = document.querySelector('input[name=sBiru');

sMerah.addEventListener('input' , function(){
    const red = sMerah.value;
    const green = sHijau.value;
    const blue = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ red + ',' + green + ',' + blue + ')';
})

sHijau.addEventListener('input' , function(){
    const red = sMerah.value;
    const green = sHijau.value;
    const blue = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ red + ',' + green + ',' + blue + ')';
})

sBiru.addEventListener('input' , function(){
    const red = sMerah.value;
    const green = sHijau.value;
    const blue = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ red + ',' + green + ',' + blue + ')';
})


// document.body.addEventListener('mousemove' , function(event){
//     // posisi mouse 
//     const xpos = Math.round((event.clientX / window.innerWidth) * 255);
//     const ypos = Math.round((event.clientY / window.innerHeight) * 255);
//     document.body.backgroundColor ='rgb('+ xpos +','+ ypos +',100)';
// });