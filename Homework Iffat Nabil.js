// Fungsi untuk mengisi array dengan 100 nilai acak antara 1 dan 50
function isiArrayRandom(array) {
    for (let i = 0; i < 100; i++) {
      array.push(Math.floor(Math.random() * 50) + 1);
    }
  }
  
  // Fungsi untuk membagi array menjadi array genap dan ganjil
  function pecahArray(array) {
    const arrayGenap = [];
    const arrayGanjil = [];
    
    for (let i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
        arrayGenap.push(array[i]);
      } else {
        arrayGanjil.push(array[i]);
      }
    }
    
    return [arrayGenap, arrayGanjil];
  }
  
  // Fungsi untuk menghitung nilai minimum
  function hitungMin(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
    }
    return min;
  }
  
  // Fungsi untuk menghitung nilai maksimum
  function hitungMax(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
    }
    return max;
  }
  
  // Fungsi untuk menghitung total
  function hitungTotal(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total;
  }
  
  // Fungsi untuk menghitung rata-rata
  function hitungRataRata(array) {
    const total = hitungTotal(array);
    return total / array.length;
  }
  
  // Fungsi untuk membandingkan dua array
  function bandingkanArray(array1, array2) {
    const min1 = hitungMin(array1);
    const max1 = hitungMax(array1);
    const total1 = hitungTotal(array1);
    const rataRata1 = hitungRataRata(array1);
    
    const min2 = hitungMin(array2);
    const max2 = hitungMax(array2);
    const total2 = hitungTotal(array2);
    const rataRata2 = hitungRataRata(array2);
    
    console.log("Array dengan jumlah index 100:", array);
    console.log("Array genap dengan jumlah index 50:", array1);
    console.log("Array ganjil dengan jumlah index 50:", array2);
    console.log("Min, Max, Total, Rata-rata pada Array Genap:");
    console.log("Min:", min1);
    console.log("Max:", max1);
    console.log("Total:", total1);
    console.log("Rata-rata:", rataRata1);
    console.log("Min, Max, Total, Rata-rata pada Array Ganjil:");
    console.log("Min:", min2);
    console.log("Max:", max2);
    console.log("Total:", total2);
    console.log("Rata-rata:", rataRata2);
    
    // Bandingkan nilai min, max, total, dan rata-rata
    if (min1 > min2) {
      console.log("Min lebih besar pada Array Genap");
    } else if (min1 < min2) {
      console.log("Min lebih besar pada Array Ganjil");
    } else {
      console.log("Min memiliki nilai yang sama pada kedua array");
    }
    
    if (max1 > max2) {
      console.log("Max lebih besar pada Array Genap");
    } else if (max1 < max2) {
      console.log("Max lebih besar pada Array Ganjil");
    } else {
      console.log("Max memiliki nilai yang sama pada kedua array");
    }
    
    if (total1 > total2) {
      console.log("Total lebih besar pada Array Genap");
    } else if (total1 < total2) {
      console.log("Total lebih besar pada Array Ganjil");
    } else {
      console.log("Total memiliki nilai yang sama pada kedua array");
    }
    
    if (rataRata1 > rataRata2) {
      console.log("Rata-rata lebih besar pada Array Genap");
    } else if (rataRata1 < rataRata2) {
      console.log("Rata-rata lebih besar pada Array Ganjil");
    } else {
      console.log("Rata-rata memiliki nilai yang sama pada kedua array");
    }
  }
  
  const array = [];
  isiArrayRandom(array);
  const [arrayGenap, arrayGanjil] = pecahArray(array);
  bandingkanArray(arrayGenap, arrayGanjil);
  