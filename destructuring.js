// latihan penggunaan destructuring

// destruturing in array
const motorList = ["Honda Supra", "Yamaha NMAX", "Kawasaki Ninja", "Suzuki GSX", "Ducati Panigale", "Harley-Davidson Sportster", "KTM Duke", "BMW S1000RR"];

//penggunaan destructur
const [merk1, merk2, ...merkLainnya] = motorList;
console.log(merk1, merk2, merkLainnya); // Honda Supra Yamaha


//contoh penggunaan destructur di objek
const motor = {
    merk: "Yamaha",
    model: "NMAX",
    tahun: 2023,
    warna: "Hitam",
    harga: 32000000,
    spesifikasi: {
        kapasitasMesin: "155cc",
        jenisMesin: "SOHC, Liquid Cooled",
        tenagaMaksimal: "15 hp",
        transmisi: "CVT"
    }
};

// destructur
const { merk, model, ...etc} = motor;
console.log(merk, model, etc);

// penggunaa destructuring
// function printInfoBuku2(judul, harga, halaman) {
//     console.log(judul, harga, halaman)
// }
// printInfoBuku2(buku)

//destructur di function parameter
// function detailMtr(merk, model, tahun) {
//     console.log(merk, model, tahun);
// }
// detailMtr(motor)
const mobil = {
    merk: "Toyota",
    model: "Fortuner",
    tahun: 2023,
    warna: "Hitam",
    mesin: {
        tipe: "Diesel",
        kapasitas: "2.4L",
        tenaga: "148 HP"
    },
    fitur: ["Airbag", "ABS", "Sunroof", "GPS Navigation"],
    harga: "Rp 600.000.000",
};

function detailMobil({merk, tahun, harga}) {
    console.log(merk, tahun, harga)

}
detailMobil(mobil)


//default value dan luas
const buku = {
    judul: 'Harry Potter',
    harga: 50000,
    halaman:  1000, // misal halaman diganti alias sebagai hlm di param 
    bab: 200,
    pengarang: {
        nama: 'J.K Rowling',
        negara: 'Inggris',
    },
    penerbit: "Ki Hajar Dewantara"// 
};

function printBuku({judul,halaman:hlm,  harga, bab, penerbit = " gramedia"}) { //misl ditambah default nilai dari penerbit di dalm param
    console.log(judul,hlm, harga, bab, penerbit);//tetapi jika kita tambah penerbit di dalam objek akan menampilkan nilaidari objek di alias
}
printBuku(buku)

//pemanggilan dari halaman juga harus menggunakan value dari alias tadi yaitu hml