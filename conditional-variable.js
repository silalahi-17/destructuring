const umur = 30;

const keterangan = umur > 50 ? 'sudah tua' : 'masih muda';
console.log(keterangan);

// assign variable dengan pengecekan kondisi terlebih dahulu

const kondisiAnd = umur < 50 && "masih"; //jika kondisi true maka akan me return masih muda
const kondisiOr = umur > 50 || "hello";
console.log(kondisiAnd);
console.log(kondisiOr);

// list objek dalam array

const listBuku = [
    {
        judul: 'Harry Potter',
        harga: 20000
    },
    {
        judul: 'Naruto',
        harga: 30000
    },
    {
        judul: 'One Piece',
        harga: 40000
    }
];

//penggunaan map

const listJudul = listBuku.map((value)=>value.judul); //menampilkan judul
const listHarga = listBuku.map((value)=>value.harga+20000); //menampilkan harga + memodifikasi harga
console.log(listJudul);
console.log(listHarga);

const bukuMahal = listBuku.filter((buku)=>buku.harga > 30000);
console.log(bukuMahal);