// this

// membuat objek

// cara 1 - function declarations
// function halo(){
// console.log(this);
// console.log('Halo');
// }
// this.halo();
// this mengembalikan object global


// cara 2 - Object Literal
// var obj = {};
// obj.halo = function(){
//    console.log(this);
//    console.log('Halo');
// }
// obj.halo();
// this mengembalikan object yang bersangkutan


// cara 3 - Constructor
// function Halo(){
//     console.log(this);
//     console.log('Halo');
// }
// var obj1 = new Halo();
// var obj2 = new Halo();
// this mengembalikan object yang baru dibuat