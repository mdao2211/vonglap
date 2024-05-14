//1. Tìm số nguyên dương nhỏ nhất sao cho 1 + 2 + ... + n > 1000
//for
// var soCanTim = 0;
// var tong = 0;
// for (var i = 1; i < 100; i++) {
//   tong += i;
//   if (tong > 1000 || tong == 1000) {
//     soCanTim = i - 1;
//     break;
//   }
// }

// console.log(soCanTim);
//while
// var soCanTim = 0;
// var tong = 0;
// var i = 1;
// while (i < 100) {
//   tong += i;
//   if (tong > 1000 || tong == 1000) {
//     soCanTim = i - 1;
//     break;
//   }
//   i++;
// }

// console.log(soCanTim);
//do while
// var soCanTim = 0;
// var tong = 0;
// var i = 1;
// do {
//   tong += i;
//   if (tong > 1000 || tong == 1000) {
//     soCanTim = i - 1;
//     break;
//   }
//   i++;
// } while (i < 100);

// console.log(soCanTim);
//2. Nhap x, n tinh S = x + x^2 + ... + x^n
//for
// let x = Number(prompt("Nhap x: "));
// let n = Number(prompt("Nhap n: "));
// var tong = 0;

// for (var i = 1; i <= n; i++) {
//   var tich = 1; // Reset tich for each term in the series
//   for (var j = 1; j <= i; j++) {
//     tich *= x; // Calculate each term x^i
//   }
//   tong += tich; // Add the term to the sum
// }

// for (var i = 1; i <= n; i++) {
//   var term = Math.pow(x, i);
//   tong += term;
// }

// console.log(tong);
//while

// let x = Number(prompt("Nhap x: "));
// let n = Number(prompt("Nhap n: "));

// var tong = 0;
// var i = 1;
// while (i <= n) {
//   var term = Math.pow(x, i);
//   tong += term;
//   i++;
// }

// console.log(tong);

//do while

// let x = Number(prompt("Nhap x: "));
// let n = Number(prompt("Nhap n: "));

// var tong = 0;
// var i = 1;
// do {
//   var term = Math.pow(x, i);
//   tong += term;
//   i++;
// } while (i <= n);

// console.log(tong);

//3. Tinh tong giai thua khi nhap n: 1.2.3...n;

// let n = Number(prompt("Nhập vào một số nguyên dương không âm: "));

// var tong = 1;
// for (var x = 1; x <= n; x++) {
//   tong *= x;
// }
// console.log(tong);
//
// let n = Number(prompt("Nhập vào một số nguyên dương không âm: "));

// var tong = 1;
// var x = 1;
// while (x <= n) {
//   tong *= x;
//   x++;
// }
// console.log(tong);
//
// let n = Number(prompt("Nhập vào một số nguyên dương không âm: "));

// var tong = 1;
// var x = 1;
// do {
//   tong *= x;
//   x++;
// } while (x <= n);
// console.log(tong);

// 4. in chan le 10 div xanh do

// document.getElementById("clickhere").addEventListener("click", function () {
//   const container = document.getElementById("container");
//   container.innerHTML = "";

// Using for loop
// for (let i = 1; i <= 10; i++) {
//   let div = document.createElement('div');
//   div.textContent = 'Div ' + i;
//   if (i % 2 === 0) {
//     div.style.backgroundColor = 'red';
//   } else {
//     div.style.backgroundColor = 'blue';
//   }
//   container.appendChild(div);
// }

// Using while loop

// let i = 1;
// while (i <= 10) {
//   let div = document.createElement("div");
//   div.textContent = "Div " + i;
//   if (i % 2 === 0) {
//     div.style.backgroundColor = "red";
//   } else {
//     div.style.backgroundColor = "blue";
//   }
//   container.appendChild(div);
//   i++;
// }

// Using do-while loop
/*
  let i = 1;
  do {
    let div = document.createElement('div');
    div.textContent = 'Div ' + i;
    if (i % 2 === 0) {
      div.style.backgroundColor = 'red';
    } else {
      div.style.backgroundColor = 'blue';
    }
    container.appendChild(div);
    i++;
  } while (i <= 10);
  */
// });

// 5. In snt

document.getElementById("click").onclick = function () {
  var inputValue = parseInt(document.getElementById("number").value);
  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = ""; // Clear previous results

  // Function to check if a number is prime
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
  }

  // Using for loop

  for (let i = 1; i <= inputValue; i++) {
    if (isPrime(i)) {
      let div = document.createElement("div");
      div.textContent = i;
      resultDiv.appendChild(div);
    }
  }

  // Using while loop
  /*
  let i = 1;
  while (i <= inputValue) {
    if (isPrime(i)) {
      let div = document.createElement('div');
      div.textContent = i;
      resultDiv.appendChild(div);
    }
    i++;
  }
  */

  // Using do-while loop
  /*
  let i = 1;
  if (inputValue > 0) {
    do {
      if (isPrime(i)) {
        let div = document.createElement('div');
        div.textContent = i;
        resultDiv.appendChild(div);
      }
      i++;
    } while (i <= inputValue);
  }
  */
};
