// Manipulasi Array

// 1. menambah isi array
// var arr = [];
// arr[0] = "Sandhika";
// arr[1] = "Galih";
// arr[2] = "Innova";
// arr[3] = "Fikri";
// console.log(arr);


// 2. Menghapus isi ARRAY 
// var arr = ["Sandhika", "Galih", "Innova","Fikri"];
// arr[1] = undefined;
// console.log(arr);


// 3. Menampilkan Isi Array
// for (var i = 0; i < arr.length; i++) {
//     console.log('Mahasiswa ke-' + (i + 1) + ' : ' + arr[i]);
// }


// Method pada array
// 1. join
// console.log(arr.join(', '));

// 2. Push & Pop
// push = menambah elemen array diakhir array
// arr.push('Dzakir', 'Asyraf');
// console.log(arr.join(', '));

// pop = menghapus elemen array diakhir array
// arr.pop();
// console.log(arr.join(', '));


// 3.unshift & shift
// unshift = menambah elemen array diawal array
// arr.unshift('Ronaldo');
// console.log(arr.join(', '));

// Shift = Menghapus Elemen array diawal array
// arr.shift();
// console.log(arr.join(', '));

// 4. Splice
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
// arr.splice(2, 0,'Neymar', 'Fernandes');
// console.log(arr.join(', '));

// 5.Slice
//  slice(awal, akhir);
// var arr2 = arr.slice(1,4);
// console.log(arr.join(', '));
// console.log(arr2.join(', '));

// 6.foreach
// var angka = [1,2,3,4,5,6,7,8,9];
// var nama = ["Sandhika", "Galih", "Innova","Fikri"];
// nama.forEach(function (e, i) {
//     console.log('Mahasiswa ke- ' + (i+1) + ' adalah : ' + e);
// })

// 7.map
// var angka = [1,2,5,3,6,8,4];
// var angka2 = angka.map(function(e){
//     return e * 2;
// });
// console.log(angka2.join(' - '));

// 8.sort
// var angka = [1,2,10,5,8,4,20,30,3];
// angka.sort(function(a,b){
//     return a-b;
// });
// console.log(angka.join(' - '));

// 9.filter
var angka = [1,2,10,5,8,4,20,30,3];
var angka2 = angka.filter(function(x){
    return x > 5;
})
console.log(angka2.join(' - '));




