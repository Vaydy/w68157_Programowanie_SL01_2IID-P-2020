const tab= [1, 3, 34, 51, 19];
const suma = tab.reduce((a, b) => a + b, 0);
window.alert(suma);

const t13 = [1, 2, 3, 4, 5];
const przefiltrowanaTablica = t13.filter(element => element % 2 === 0);
console.log(przefiltrowanaTablica); 



const tablica = [1, 3, 34, 51, 19];
const newtablica = tablica.map(element => element * 3);
console.log(newtablica);


let table = [1,23,34,57,13]
table.push(68157);
const index = table.indexOf(68157);
console.log(index);

let table1 = [1, 23, 34, 57, 13, 121];
let sum = table1.reduce((a, b) => a + b, 0);
let average = sum / table1.length;
console.log("Średnia w tej tablicy wynosi: " + average);

let table2 = [1, 23, 34, 57, 13, 121];
let maxNumber = Math.max(...table2);
console.log("Największa liczba w tablicy: " + maxNumber);
