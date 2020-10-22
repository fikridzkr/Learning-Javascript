var item = prompt('Masukkan Nama Makanan : \n cth: nasi, daging, susu, hamburger, softdrink ');

switch (item) {
    case 'nasi':
        alert('Makanan / Minuman Sehat !');
        break;
    case 'daging':
        alert('Makanan / Minuman  Sehat !');
        break;
    case 'susu':
        alert('Makanan / Minuman Sehat !');
        break;
    case 'hamburger':
        alert('Makanan / Minuman Tidak Sehat');
        break;
    case 'softdrink' :
        alert('Makanan / Minuman Tidak Sehat !');
        break;
    default :
        alert('anda memasukkan nama yg salah');
        break;
}