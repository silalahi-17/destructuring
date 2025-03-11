const readlineSync = require("readline-sync");

let value = readlineSync.question("Masukkan angka : ");

//periksa angka positif atau negatif
let info = value > 0 ? 'angka positif' : 'angka negatif' 
console.log(info);

//cek nilai genap atau ganjil
let nilai = value % 2 == 0 ? 'genap' : 'ganjil'
console.log(nilai);

//cek kelulusan siswa
let nilaiAkhir = value >= 75 ? 'lulus' : 'tidak lulus'
console.log(nilaiAkhir)

//diskon berdasarkan total belanja
let totalBelanja = 600000;

let diskon = totalBelanja >= 500000 ? 20 : 
             totalBelanja >= 500000 ? 10 :
             0;
let totalBayar = totalBelanja - (totalBelanja * diskon / 100);
console.log("total diskon :"+diskon+"%");
console.log("total bayar :"+totalBayar) 


let Grade  = value >= 90 ? 'A' :
            value >= 80 ? 'B' :
            value >= 70 ? 'C' :
            value >= 60 ? 'D' :
            'E';

console.log(Grade)