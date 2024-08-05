let alpha = ['x', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];

for (let i = 1; i <= 10; i++) {
    let k = ''
    for (let j = 1; j<=i; j++) {
        k += alpha[j]
    }
    console.log(i,k);
  }