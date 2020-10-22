// alert
alert('Hello Javascript !');

// prompt
var nama = prompt('Masukkan Nama Anda :');
alert('Selamat Datang ! ' + nama);

// confirm
var test = confirm('Kamu Yakin ? '); 
if ( test === true) {
    alert('User Menekan OK !');
} else {
    alert('User Menekan CANCEL !');
}