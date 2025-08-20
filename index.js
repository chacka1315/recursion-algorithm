#!/usr/bin/env node

function mergeSort(arr) {
  let l = arr.length;
  let mid = Math.floor(l / 2);
  if (l === 1) {
    return arr;
  } else {
    let tab1 = mergeSort(arr.slice(0, mid));
    let tab2 = mergeSort(arr.slice(mid, l + 1));
    let tabMerged = [];
    let i = 0;
    let j = 0;

    while (i < tab1.length && j < tab2.length) {
      tab1[i] < tab2[j] ? tabMerged.push(tab1[i++]) : tabMerged.push(tab2[j++]);
    }

    for (; i < tab1.length; i++) {
      tabMerged.push(tab1[i]);
    }

    for (; j < tab2.length; j++) {
      tabMerged.push(tab2[j]);
    }
    return tabMerged;
  }
}

const arr = [3, 2, 1, 13, 8, 5, 0, 1];
const arrSorted = mergeSort(arr); // expected output [0, 1, 1, 2, 3, 5, 8, 13]
console.log(arrSorted);

//trying optimization

// function mergeSort2(arr, low = 0, l = arr.length) {
//   let mid = Math.floor(l / 2);

//   if (l === 1) {
//     return;
//   } else {
//     mergeSort2(arr, low, mid), mergeSort2(arr, mid, l - 1);
//     let tabMerged = [];
//     let i = 0;
//     let j = 0;
//     console.log("merging");

//     while (i < mid && j < l) {
//       if (arr[i] < arr[j]) {
//         tabMerged.push(arr[i]);

//         i++;
//       } else {
//         tabMerged.push(arr[j]);

//         j++;
//       }
//     }

//     for (; i < mid; i++) {
//       tabMerged.push(arr[i]);
//     }

//     for (; j < low; j++) {
//       tabMerged.push(arr[j]);
//     }

//     return tabMerged;
//   }
// }
