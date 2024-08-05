let alpha = ['x', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i','j','k'];

for (
    let i = 1; // 1. deklarasi nilai i = 1
    i <= 10; // 2. jika hasil TRUE, code di dalam {} kuning akan dieksekusi. jika FALSE, lanjut ke baris setelah end code kuning
    i++ // 3. setelah code dieksekusi, i akan di increment. kembali ke nomor 2 for kuning
) {
    let k = ''
    for (
        let j = 1; // 1. deklarasi nilai j = 1
        j<=i; // 2. jika hasil TRUE, code di dalam {} ungu akan dieksekusi. jika FALSE, lanjut ke baris setelah end code ungu
        j++ // 3. setelah code dieksekusi, j akan di increment. kembali ke nomor 2 for ungu
    ) {
        k += alpha[j]
    } // kembali ke nomor 3 for ungu
    console.log(i,k);
  } // kembali ke nomor 3 for kuning