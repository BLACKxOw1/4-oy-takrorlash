// //                                                                  Array1

// Array.prototype.customMap = function (callback) {
//   const result = [];
//   for (let i = 0; i < this.length; i++) {
//     result.push(callback(this[i], i, this));
//   }
//   return result;
// };

// const arr = [1, 2, 3, 4, 5];

// console.log(arr.customMap(x => x * 2));


// //                                                                   Array2

// Array.prototype.customEvery = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     if (!callback(this[i], i, this)) {
//       return false;
//     }
//   }
//   return true;
// };

// const arr = [1, 2, 3, 4, 5];

// console.log(arr.customEvery(x => x > 0));


// //                                                                   Array3

// Array.prototype.customReduce = function (callback, initialValue) {
//   let accumulator = initialValue;
//   let startIndex = 0;

//   if (accumulator === undefined) {
//     accumulator = this[0];
//     startIndex = 1;
//   }

//   for (let i = startIndex; i < this.length; i++) {
//     accumulator = callback(accumulator, this[i], i, this);
//   }

//   return accumulator;
// };

// const arr = [1, 2, 3, 4, 5];

// console.log(arr.customReduce((a, b) => a + b, 0))


// //                                                                    Array4

// Array.prototype.customFindIndex = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this)) {
//       return i;
//     }
//   }
//   return -1;
// };

// const pp = [1, 2, 3, 4, 5];

// console.log(pp.customMap(x => x * 2));


// //                                                                    Array5

// Array.prototype.customSplice = function (start, deleteCount, ...items) {
//   const removed = [];
//   const result = [];

//   if (start < 0) start = this.length + start;
//   if (start < 0) start = 0;
//   if (start > this.length) start = this.length;

//   if (deleteCount === undefined) {
//     deleteCount = this.length - start;
//   }

//   if (deleteCount < 0) deleteCount = 0;

//   for (let i = start; i < start + deleteCount && i < this.length; i++) {
//     removed.push(this[i]);
//   }

//   for (let i = 0; i < start; i++) {
//     result.push(this[i]);
//   }

//   for (let i = 0; i < items.length; i++) {
//     result.push(items[i]);
//   }

//   for (let i = start + deleteCount; i < this.length; i++) {
//     result.push(this[i]);
//   }

//   this.length = 0;
//   for (let i = 0; i < result.length; i++) {
//     this.push(result[i]);
//   }

//   return removed;
// };

// const arr2 = [10, 20, 30, 40, 50];
// console.log(arr2.customSplice(1, 2, 99, 100));







// //                                                                STRING1

// String.prototype.trm = function () {
//   let str = this;
//   while (str.startsWith(" ")) {
//     str = str.slice(1);
//   }
//   while (str.endsWith(" ")) {
//     str = str.slice(0, -1);
//   }
//   return str;
// };

// let txt = "   hello world   ";

// console.log(txt.trm());


// //                                                                STRING2


// String.prototype.upperCase = function () {
//   let result = "";
//   for (let i = 0; i < this.length; i++) {
//     let code = this.charCodeAt(i);
//     if (code >= 97 && code <= 122) {
//       result += String.fromCharCode(code - 32);
//     } else {
//       result += this[i];
//     }
//   }
//   return result;
// };

// let txt = "   hello world   ";

// console.log(txt.upperCase());


// //                                                                STRING3


// String.prototype.has = function (substring) {
//   const mainStr = this.toString();
//   const subLen = substring.length;

//   if (subLen === 0) return true;

//   for (let i = 0; i <= mainStr.length - subLen; i++) {
//     let match = true;
//     for (let j = 0; j < subLen; j++) {
//       if (mainStr[i + j] !== substring[j]) {
//         match = false;
//         break;
//       }
//     }
//     if (match) return true;
//   }
//   return false;
// };

// let txt = "   hello world   ";

// console.log(txt.has("world"));


// //                                                                STRING4



// String.prototype.cut = function (start, end) {
//   let result = "";
//   if (end === undefined) end = this.length;
//   for (let i = start; i < end && i < this.length; i++) {
//     result += this[i];
//   }
//   return result;
// };

// let txt = "   hello world   ";

// console.log(txt.cut(3, 8));


// //                                                                STRING5



// String.prototype.rpt = function (count) {
//   let result = "";
//   for (let i = 0; i < count; i++) {
//     result += this;
//   }
//   return result;
// };


// let txt = "   hello world   ";

// console.log('hi'.rpt(3));






