// default function

// function overload yok
// default functionlarda aynı isimde function oluşturmaya izin verilir budan bir sonraki aynı isimde function bir önceki function ezmesi anlamına gelir.

function sum(n1, n2, n3) {
	return n1 + n2 + n3;
}

function sum(n1, n2) {
	for (let index = 0; index < arguments.length; index++) {
		const element = arguments[index];
		console.log('argument', element);
	}

	return n1 + n2;
}

const r1 = sum(1, 3); // 4 NaN
console.log('r1', r1);
const r2 = sum(1, 2, 3); // 6
console.log('r2', r2);
const r3 = sum(); // parametresiz
console.log('r3', r3);

// Not: matematiksel işlem sonucunda bir sayısal değer üretilemez ise JS bunun NaN Not a Number olarak yorumlar.
if (isNaN(r3)) {
	console.log('sonuc numeric değil');
}

const r4 = sum('4', '5', '10'); // 4510
console.log('r4', r4);

const r5 = sum(1, 2, 3, 4, 6, 7, 8);

// arrow function kullanma sebebimiz bir js dosyası içinde aynı isimde değişken function ismi tanımlamayı engeller.
// Not arrow functionlar her zaman const tanımlanır. function referans hatalarını engeller.
// arguments ile dışarıdan functiona kontrolsüz değer gönderiminin önüne geçmiş olduk.
const sum1 = (n1, n2, n3) => {
	return n1 + n2 + n3;
};

// sum functionm başka bir function refere edilemez
const sum2 = (n3, n4) => {
	// yanlış kullanım
	// for (let index = 0; index < arguments.length; index++) {
	// 	const element = arguments[index];
	// 	console.log('argument', element);
	// }

	return n3 + n4;
};

sum2(4, 5, 6, 7, 8, 9);

// default parameters tanımı yapılabilir
const showMessage = (message = 'Hello') => alert(message);

showMessage();

// arrow function içerisine sonsuz parametrede değer geçmek istersem naparım ?
// rest operator
// params ile c# da method sonsuz paremetre kontrolü bir şekilde geçilebilir.
const multiply = (...numbers) => {
	let result = 1;
	for (let index = 0; index < numbers.length; index++) {
		const element = numbers[index];
		result *= element;
	}

	return result;
};

console.log(multiply(10, 23, 45, 67, 78));

const divide = (n1, n2) => n1 / n2; // tek satır için return görvi görür.
console.log('bölme', divide(10, 2));
