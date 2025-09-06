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




// //                                                                 FN1




// function getOddDividersSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0 && i % 2 === 1) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// let n = 30;
// console.log(getOddDividersSum(n))



// //                                                                 FN2


// function search(arr, str) {
//   str = str.toLowerCase();
//   return arr.filter(name => name.toLowerCase().includes(str));
// }

// let arr = ["Abdulaziz", "Shahobiddin", "Shohrux", "Shukurjon", "Azamat", "Rahmatulla"];
// let str = "az";

// console.log(search(arr, str)); 



// //                                                                 FN3


// function getDividers(arr, n) {
//   let res = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % n === 0) {
//       res += arr[i]
//     }
//   }
//   return res
// }

// let arr = [2, 5, 7, 10, 0, 18, 15];
// let n = 5;

// console.log(getDividers(arr, n)); 



// //                                                                 FN4


// function checkSentence(str) {
//   if (!str || str.length === 0) return false;
//   return str[0] === str[0].toUpperCase() && str.endsWith(".");
// }

// let str = "Abdulaziz programmer is full-stack developer.";

// console.log(checkSentence(str)); 



// //                                                                 FN5


// function getNumberOfCases(str) {
//   let upperCases = 0
//   let lowerCases = 0
//   if (!str || str.length === 0) return false;
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (/[A-Z]/.test(char)) {
//       upperCases++;
//     } else if (/[a-z]/.test(char)) {
//       lowerCases++;
//     }
//   }
//   return `  upperCases:${upperCases} \n  lowerCases:${lowerCases}`
// }

// let str = "Abdulaziz Programmer";

// console.log(getNumberOfCases(str)); 



// //                                                                 FN6


// function changeObjToString(obj) {
//   let keys = Object.keys(obj).join("");
//   let values = Object.values(obj).join("");

//   return keys + values;

// }

// let obj = {a: 1, b: 2, c: 3};

// console.log(changeObjToString(obj)); 



// //                                                                 FN7


// const products = [
//   { id: 1, name: 'Bike', price: 100 },
//   { id: 2, name: 'TV', price: 400 },
//   { id: 3, name: 'Album', price: 800 },
//   { id: 4, name: 'Book', price: 600 },
//   { id: 5, name: 'Phone', price: 500 },
//   { id: 6, name: 'Computer', price: 1000 },
//   { id: 7, name: 'Skate', price: 300 },
//   { id: 8, name: 'Keyboard', price: 200 },
//   { id: 9, name: 'Bottle', price: 700 },
// ];

// function getProductsSum(...ids) {
//   return ids.reduce((sum, id) => {
//     const product = products.find(p => p.id === id);
//     return product ? sum + product.price : sum;
//   }, 0);
// }

// console.log(getProductsSum(4, 6, 9));



// //                                                                 FN8


// const products = [
//   { id: 1, name: 'Bike', price: 100 },
//   { id: 2, name: 'TV', price: 400 },
//   { id: 3, name: 'Album', price: 800 },
//   { id: 4, name: 'Book', price: 600 },
//   { id: 5, name: 'Phone', price: 500 },
//   { id: 6, name: 'Computer', price: 1000 },
//   { id: 7, name: 'Skate', price: 300 },
//   { id: 8, name: 'Keyboard', price: 200 },
//   { id: 9, name: 'Bottle', price: 700 },
// ];

// function getTopProducts(products ,n) {
//   const sorted = [...products].sort((a, b) => b.price - a.price);

//   return sorted.slice(0, n).map(p => p.name);
// }

// let n = 3;

// console.log(getTopProducts(products, n));



// //                                                                 FN9


// let str = "Abdulaziz Programmer"

// String.prototype.count = function (char) {
//   let count = 0;
//   for (let i = 0; i < this.length; i++) {
//     if (this[i] === char) {
//       count++;
//     }
//   }
//   return count;
// }

// let char = 'a';

// console.log(str.count(char));



// //                                                                 FN10


// function Product(name, company, price, discount) {
//   this.name = name
//   this.company = company
//   this.price = price
//   this.discount = discount
// }

// Product.prototype.getInfo = function () {
//   console.log(`${this.company} kompaniyasi tomonidan ishlab chiqarilgan ${this.name} ning asl narxi ${this.price}$. Aksiyadagi narxi esa ${this.discount}$`);
// }

// let p1 = new Product("Iphone 15", "Apple", 1500, 1200);
// let p2 = new Product("S22", "Samsung", 1200, 800);

// p1.getInfo();
// p2.getInfo();











// //                                                                New FN1


// function getSum(n) {
//   let oddProduct = 1;
//   let evenProduct = 1;
//   for (let i = 1; i <= 2 * n; i++) {
//     if (i % 2 === 0) {
//       evenProduct *= i;
//     } else {
//       oddProduct *= i;
//     }
//   }
//   return oddProduct + evenProduct;
// }

// let n = 3;
// console.log(getSum(n));



// //                                                                New FN2


// function getHighestNumberOfDigits(arr) {
//   return arr.reduce((maxNum, current) => {
//     return String(current).length > String(maxNum).length ? current : maxNum;
//   });
// }

// let arr = [1589, 31851, 512, 180975, 78];

// console.log(getHighestNumberOfDigits(arr));



// //                                                                New FN3


// function getStringArr(arr) {
//   let newArr = []
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === String(arr[i])) {
//       newArr.push(arr[i])
//     }
//   }
//   return newArr
// }

// let arr = [1, "Abdulaziz", "Elbek", false, [], "Jurabek", {}];

// console.log(getStringArr(arr));



// //                                                                New FN4


// function getStringArr(arr) {
//   let count = 0
//   let trueAnswers = ['!', ',', '.', ':', ';', '?'];
//   for (const v of arr) {
//     for (let i = 0; i < trueAnswers.length; i++) {
//       if (v === trueAnswers[i]) {
//         count++
//       }
//     }
//   }
//   return count
// }

// const punctuationSigns = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', "'"];

// console.log(getStringArr(punctuationSigns));



// //                                                                New FN5


// function switchLetters(str) {
//   let newArr = []
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i]
//     if (/[a-z]/.test(char)) {
//       newArr.push(char.toUpperCase())
//     } else if (/[A-Z]/.test(char)) {
//       newArr.push(char.toLowerCase())
//     } else {
//       newArr.push(char)
//     }
//   }

//   return newArr.join("")
// }

// const arr = "Abdulaziz Programmer"
// console.log(switchLetters(arr)) 



// //                                                                New FN6

// function changeObjToArr(obj) {
//   return Object.entries(obj).map(([key, value]) => key + value)
// }

// let obj = { a: 1, b: 2, c: 3 }

// console.log(changeObjToArr(obj));



// //                                                                New FN7

// function seperateStudents(students) {
//   let result = {
//     grant: [],
//     contract: []
//   }

//   for (let student of students) {
//     if (student.isGrant) {
//       result.grant.push(student.name)
//     } else {
//       result.contract.push(student.name)
//     }
//   }

//   return result
// }

// let students = [
//   { name: "Jurabek", isGrant: false },
//   { name: "Elbek", isGrant: true },
//   { name: "Shamshod", isGrant: false },
//   { name: "Kamola", isGrant: false },
//   { name: "Gulnoza", isGrant: true },
//   { name: "Savlatbek", isGrant: false },
// ]

// console.log(seperateStudents(students))



// //                                                                New FN8

// function getTotalPages(books) {
//   let result = 0

//   for (let book of books) {
//     if (book.isReadFinished) {
//       result += book.pages
//     }
//   }

//   return result
// }

// const books = [
//   { name: "The Great Gatsby", pages: 180, isReadFinished: true },
//   { name: "To Kill a Mockingbird", pages: 336, isReadFinished: false },
//   { name: "Atom habits", pages: 328, isReadFinished: true },
//   { name: "Pride and Prejudice", pages: 432, isReadFinished: false },
//   { name: "The Catcher in the Rye", pages: 224, isReadFinished: true },
//   { name: "The Hobbit", pages: 310, isReadFinished: false },
//   { name: "The Lord of the Rings", pages: 1178, isReadFinished: true },
//   { name: "Harry Potter", pages: 320, isReadFinished: true },
//   { name: "Fahrenheit 451", pages: 249, isReadFinished: false },
//   { name: "To the Lighthouse", pages: 209, isReadFinished: true }
// ];

// console.log(getTotalPages(books));



// //                                                                New FN9

// Object.prototype.keys = function () {
//   console.log(Object.keys(this))
// }

// let obj = { a: 1, b: 2, c: 3 }
// obj.keys()



// //                                                                New FN10

// function Student(firstName, lastName, university, course, totalYears, isGrant) {
//   this.firstName = firstName
//   this.lastName = lastName
//   this.university = university
//   this.course = course
//   this.totalYears = totalYears
//   this.isGrant = isGrant
// }

// Student.prototype.getInfo = function () {
//   let restYears = this.totalYears - this.course
//   let checkGrant = this.isGrant ? 'grant' : 'kontrakt'
//   return `${this.firstName} ${this.lastName} ${this.university} universitetida ${this.course}-kursda ${checkGrant} asosida o'qiydi. ${restYears} yildan keyin universitetidan qutuladi.`
// }

// let student = new Student("Abdulaziz", "Programmer", "TATU", 3, 4, true);

// console.log(student.getInfo());
