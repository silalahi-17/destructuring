//latihan map dengan sample data
const data = [
    {
        id: 1,
        nama: "Budi",
        hobi: ["Membaca", "Menulis", "Berenang"]
    },
    {
        id: 2,
        nama: "Siti",
        hobi: ["Memasak", "Menyanyi", "Melukis"]
    },
    {
        id: 3,
        nama: "Andi",
        hobi: ["Bersepeda", "Fotografi", "Mendaki"]
    },
    {
        id: 4,
        nama: "Rina",
        hobi: ["Menari", "Bermain piano", "Menggambar"]
    },
    {
        id: 5,
        nama: "Joko",
        hobi: ["Sepak bola", "Basket", "Bermain catur"]
    },
    {
        id: 6,
        nama: "Dewi",
        hobi: ["Menulis puisi", "Belanja", "Berkebun"]
    },
    {
        id: 7,
        nama: "Anton",
        hobi: ["Game online", "Badminton", "Coding"]
    }
];

const id = data.map((value) => value.id); //menampilkan id
const nama = data.map((value) => value.nama);//menampilkan nama
const hobi = data.map((value) => value.hobi);//menampilkan hobi

const ide = data.filter((value) => value.id > 5);//penggunaan filter untuk id diatas 5

console.log(id)
console.log(nama)
console.log(ide)
console.log(hobi)