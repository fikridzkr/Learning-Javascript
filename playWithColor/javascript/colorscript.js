// random color
const randomColor = document.getElementById('random');
randomColor.addEventListener('click',function(){
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    document.body.style.backgroundColor = 'rgb('+red+','+green+','+blue+')';
});

// range dengan rgb

// tangkap element html
const rangeRed = document.getElementById('rangeRed');
const rangeGreen = document.getElementById('rangeGreen');
const rangeBlue = document.getElementById('rangeBlue');

rangeRed.addEventListener('input' , function (){
    const red = rangeRed.value;
    const green = rangeGreen.value;
    const blue = rangeBlue.value;
    document.body.style.backgroundColor = 'rgb('+red+','+green+','+blue+')';
})

rangeGreen.addEventListener('input' , function (){
    const red = rangeRed.value;
    const green = rangeGreen.value;
    const blue = rangeBlue.value;
    document.body.style.backgroundColor = 'rgb('+red+','+green+','+blue+')';
})

rangeBlue.addEventListener('input' , function (){
    const red = rangeRed.value;
    const green = rangeGreen.value;
    const blue = rangeBlue.value;
    document.body.style.backgroundColor = 'rgb('+red+','+green+','+blue+')';
})