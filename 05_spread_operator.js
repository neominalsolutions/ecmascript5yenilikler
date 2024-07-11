// {... data} [... arr]
// [...arr,2] [2,...arr] {...data,name:'jale'}

// 2. amaç doğrultusunda kullanılır.
// 1. kullanım dizi veya objeye yeni bir değer eklenmesi veya var olan değerin güncellenmesi durumlarında kullanılır
// 2.kullanım React,Angular,Vue gibi SPA  uygulamalarında en önemli artısı referans değerlerini değişimini sağlayarak virtual dom güncelemek yada ekranın yeniden re-render edileceğini anlamasını sağlamak
// Yanlış kullımda modelin arayüze yansıması gecikebilir veya model ile arayüz eşlenmeyebilir.

const data = { id: 1, name: 'test' };
const newData = { ...data, name: 'test-1' };
newData.id = 2;

console.log('data', data);
console.log('newData', newData);

const data1 = { id: 3, name: 'test-3' };
const data2 = data1;
data2.id = 4;

console.log('data1', data1);
console.log('data2', data2);

// EC5 göre eski yazım şekli
const data3 = {};
Object.assign(data3, data1); // obje referanslarını koparır.
data3.id = 5;

console.log('data1', data1);
console.log('data3', data3);

// Diziler ile çalışırken Spread Operatörü
const nm1 = [1, 2, 3];
const nm2 = nm1;
nm2.push(56);

console.log('n1', nm1);
console.log('n2', nm2);

// Eski yöntem ES5 Slice methodu ile dizi referansı koparılır
const nm3 = nm1.slice();
nm3.push(41);

console.log('nm3', nm3);
console.log('n1', nm1);

// ES6 ise spread operator yada map operator ile bu referans koparma işlemi yapılabilir.
const nm4 = [14, ...nm1, 78];
nm1.push(88);

console.log('nm4', nm4);
console.log('nm1', nm1);

const nm5 = nm1.map((item) => {
	return item;
});

nm5.push(77);
console.log('nm5', nm5);

console.log('nm1', nm1);
