// primative types => value types number,boolean,string '' || ""
// complex types => reference types, object,regex,function,array
// variables var keyword ile tanımlanır.

var n1 = 1;
var name = 'ali';
let surname = 'kaan';
const age = 15;

console.log(typeof n1); // string

if (typeof 5 === typeof n1) {
	var name = 'hakan';
	console.log('name-1', name);
	let surname = 'filiz';
	console.log('surname1', surname);
	// age = 45;
}

console.log('surname2', surname);
console.log('name2', name); // cansu
// let surname = 'fahri';

// Not: Const kullandığımız diğer durum, referans değerlerin referanslarının yanlışlık ile kod bloğunda güncellenmesinide önüne geçer.

// value type değerlerde değişken değerleri genelde güncellenecek ise let, referans type değerlerde yanlış referans sorunlarının önüne geçmek için ise const kullanırız. dizi tanımlarında da const tercih ederiz.

const person = { name: 'ali', surname: 'can' };
var person2 = { name: 'ali', surname: 'kaan' };

// var object referans güncellemey izin verdi
person2 = { name: 'fahri' };

console.log('person2', person2);

// assigment hatası
// person = { name: 'tansu' };
// console.log('person', person);

person.name = 'tarık';

console.log('person', person);

// Const dizilerde kullanımı
//const arr1 = [1, 2, 3];
// arr1 = [2, 3]; Hatalı kullanımı referans değiştirilemez

let arr2 = [4, 5, 6];
arr2 = [8, 9];

console.log('arr2', arr2);

// undefined type
// değiken ismi tanımlanmış ama değişkene herhangi bir değer ataması yapılmamış demek
let size = 5;
console.log('size', size);

console.log('type-of-size', typeof size);
console.log('size-value', size);

// size değer olarak 5 eşit ve aynı zamanda 5 tipine eşit mi tip ve değer kontrolü
// genelde === öneriyoruz.
if (size === 5) {
	console.log('size değer ve tip olarak 5 eşit');
}

if (size == 5) {
	console.log('size değer olarak 5 eşit');
}

if (size == '5') {
	console.log('size değer olarak string 5 eşit');
}

let y; // undefined

if (y === undefined) {
	// doğru undefined kontrolü
	console.log('y tanımsız');
}
