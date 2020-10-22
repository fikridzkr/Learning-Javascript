// const card = document.getElementsByClassName('card')[0];
// const close = document.getElementsByClassName('close')[0];

// close.addEventListener('click',function(){
//     card.style.display = 'none';
// });

// // DOM TRAVERSAL
// const close = document.querySelectorAll('.close');

// // for (let i = 0; i < close.length; i++){
// //     close[i].addEventListener('click', function(e){
// //         // close[i].parentElement.style.display = 'none';
// //         e.target.parentElement.style.display = 'none';
// //     });
// // }

// close.forEach(function(el){
//     el.addEventListener('click', function(e){
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault();
//         e.stopPropagation();
//     });
// });
// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card){
//     card.addEventListener('click',function(e){

//     })
// });

const container = document.querySelector('.container');

container.addEventListener('click', function(e){
    if(e.target.className = 'close'){
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
});

























