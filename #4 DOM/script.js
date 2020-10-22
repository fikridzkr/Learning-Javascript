// DOM Manipulation

// menggunakan appendchild
// buat elemen baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru dari Javacript');
// simpan tulisan dalam pragraf
pBaru.appendChild(teksPBaru);
// simpan pBaru diakhir section a
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);


// Menggunakan insert before
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item yang dibuat oleh Javascript');
liBaru.appendChild(teksLiBaru);
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('section#b ul li:nth-child(2)');
ul.insertBefore(liBaru, li2);


// menggunakan remove child
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);


// menggunakan replace child
const sectionB =document.getElementById('b');
const p4 = sectionB.querySelector('p');
const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul ini dibuat oleh Javascript'); 
h2Baru.appendChild(teksH2Baru);
sectionB.replaceChild(h2Baru,p4);


pBaru.style.backgroundColor = 'lightblue';
liBaru.style.backgroundColor = 'lightblue';
h2Baru.style.backgroundColor = 'lightblue';