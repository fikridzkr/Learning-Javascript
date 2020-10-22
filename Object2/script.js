// membuat object
// 1. object literal
var siswa1 = {
    nama : 'Fikri Dzakir',
    nis : '21212121',
    email : 'fikridzakir179@gmail.com',
    jurusan : 'Teknik Informatika'
}

var siswa2 = {
    nama : 'Carlos Tevez',
    nis : '12121212',
    email : 'tevez@gmail.com',
    jurusan : 'Teknik Informatika'
}


// 2. function Declaration
function buatObjectSiswa(nama, nis, email,jurusan){
    var siswa = {};
    siswa.nama = nama;
    siswa.nis = nis;
    siswa.email = email;
    siswa.jurusan = jurusan;
    return siswa;
}

var siswa3 = buatObjectSiswa(
    'Karim Benzema',
    '43434343',
    'karim@gmail.com',
    'Teknik Pangan'
    );


// 3. Constructor
function  Siswa(nama, nis, email, jurusan) {
    this.nama = nama;
    this.nis = nis;
    this.email = email;
    this.jurusan = jurusan;
}

var siswa4 = new Siswa(
    'Paul Pogba',
    '65656565',
    'paul@yahoo.com',
    'Teknik Komputer'
);


