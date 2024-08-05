// // variable
// // 1. Var = Old School [ akan memunculkan banyak bug ]  >> MENERIMA DUPLIKASI
// var x = 0
// x = 15

// console.log(x)


// // Variable modern
// // 1. let = data dinamis ( bisa berubah )  >> TIDAK MENERIMA DUPLIKASI
// let z = 10
// x = 5

// // let 0 // tidak boleh pakai angka
// let z0 = 10 
// let Z = 15 
// let _a = test 
// let $a = 10 
// // let a* = 10 
// let isCarBroken = true

// console.log(z)


// // 2. const = konstanta > data yg tidak bisa dirubah (Contoh warna merah)
// const COLOR_RED = "red";
// const y = 5
// y = 7

// console.log(y)


// SENIN, 5 AGUSTUS 2024

// Type Data
// Data yg bisa dioleh di .js

// PRIMITIVE
let text = "lorem ipsum" // string
let number = 0 // number
let kosong = null // kosong
let undef // undefined
let undef2 = undefined
let isMorning = true // boolean
let isEvening = false

// NON-PRIMITIVE
// 1. Object >> deskriptif
const zenix = {
    brand: 'Toyota',
    mesin: 'Hybrid',
    warna: 'Black',
    spec: {     // Nested
        mesin: '2.0l',
        rangka: 'TNGA'
    }
}



console.log(zenix)
console.log(zenix.mesin)
zenix.mesin = 'Diesel'
console.log(zenix)
// zenix = {
//     brand: 'Toyota',
//     mesin: 'Hybrid',
// }


// 2. Array >> list
const mobilToyota = ['GR Yaris', 'Reborn', 'Supra']

console.log(mobilToyota[2])
mobilToyota[1] = 'Innova Reborn'
console.log(mobilToyota[1])

const mobil = [  // Array di dalam object
    {
        nama: 'GR Yaris',
        mesin: 'Hybrid',
        warna: 'Black',
    },

    {
        nama: 'Innova Zenix',
        mesin: 'Hybrid',
        warna: 'Black', 
    }
]
console.log(mobil[0].nama)

// Operator +&*%/!
// 1. Aritmatika
const tambah = 1 + 1;
const kali = 2 * 2;
const hasilBagi = 2 % 2;
const pangkat = 2**2;
const pembagian = 4 / 2;

// 2. String concatenation = untuk menggabungkan 2 buah string
const a = 'a'
const b = 'b'
const newText = a + b;
console.log(newText)
console.log('10' + ['car', 'pipi'])

// 3. Assignment
let seribu = 1000
seribu = seribu + 500
seribu += 500
console.log(seribu) // Output 2000

// 4. Logical >, <, <=, >=, ==, ===, !==, !=
const x1 = 1;
const x2 = 2;
const result = x2 > x1;
console.log(result)

// sama dengan / equality
console.log(1 === 1) // true
console.log('1' == 1) // true
console.log('1' === 1) // false

// tidak sama dengan / not equal
console.log(1 !== 1)
console.log('2' != 2)


