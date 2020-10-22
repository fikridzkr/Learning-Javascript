function ubahWarnaP3() {
    p3.style.backgroundColor = 'lightblue';
}
function ubahWarnaP2() {
    p2.style.backgroundColor = 'lightblue';
}
const p3 = document.querySelector('.p3');
const p2 = document.querySelector('.p2');
const p4 = document.querySelector('section#b p');
p2.onclick = ubahWarnaP2;
p4.addEventListener('click',function(){
    alert('Klik Oke untuk memunculkan item baru !');
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('Item ini ditambahkan oleh javascript !');
    liBaru.appendChild(teksLiBaru);
    ul.appendChild(liBaru);
});