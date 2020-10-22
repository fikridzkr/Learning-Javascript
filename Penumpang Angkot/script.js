var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang){
    // jika angkot kosong
    if (penumpang.length == 0) {
        // tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari function
        return penumpang;
    } else {
        // telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length;i++){
            // jika ada kursi kosong
            if(penumpang[i] == undefined) {
                // tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;
                // kemalikan isi array & keluar dari function
                return penumpang;
            } 
            // jika sudah ada nama yg sama
            else if(penumpang[i] == namaPenumpang){
                // tampilkan pesan kesalahan
                console.log(namaPenumpang + ' Sudah Ada dalam Angkot');
                // kembalikan isi array & keluar dari function
                return penumpang;
            }else if( i == penumpang.length - 1 ) {
                // tambah penumpang di akhir array
                penumpang.push(namaPenumpang);
                // kemablikan isi array & keluar dari function
                return penumpang;
            }
        }
    }
}

var hapusPenumpang = function(namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
        console.log('Angkot Masih Kosong');
    }else{
        for( var i = 0; i < penumpang.length;i++) {
            if(penumpang[i] == namaPenumpang){
                penumpang[i] = undefined;
                return penumpang;
            }else if( i == penumpang.length - 1 ){
                console.log(namaPenumpang + ' Tidak Ada Dalam Angkot');
                return penumpang;
            }
        }
    }
    return penumpang;
}





















