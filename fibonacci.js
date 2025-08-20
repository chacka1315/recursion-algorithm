#!/usr/bin/env node

//return an array of fibonacci n elements on iterrative way
function fibo(n) {
  let fibo_arr = [0, 1];
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return fibo_arr;
  let i = 2;
  while (n > 2 && i < n) {
    fibo_arr[i] = fibo_arr[i - 1] + fibo_arr[i - 2];
    i++;
  }
  return fibo_arr;
}

//return the single th(n) element of fibonacci on recursive way
function fiboRec1(n) {
  if (n <= 0) return [];
  if (n === 1) return 0;
  if (n === 2) return 1;
  return fiboRec1(n - 1) + fiboRec1(n - 2);
}

//return an array of fibonacci n elements on recursive way
function fiboRec2(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  let fibo_arr = fiboRec2(n - 1);
  fibo_arr.push(fibo_arr[fibo_arr.length - 2] + fibo_arr[fibo_arr.length - 1]);
  return fibo_arr;
}

console.log(fibo(8)); // Expected output : [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fiboRec1(8)); //Expected output : 13
console.log(fiboRec2(8)); // Expected output : [0, 1, 1, 2, 3, 5, 8, 13]
