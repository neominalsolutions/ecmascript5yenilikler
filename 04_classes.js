// function construction ile class tanımla ES5
// ES 6 ile birlikte React tarafında kulandığımız Class yapıları geldi. Bunula birlikte Class Component geliştirme geldi.

function Person(name, surname) {
	this.name = name;
	this.surname = surname;
	this.getFullName = function () {
		return `${this.name} ${this.surname.toUpperCase()}`;
	};
}

// extension
Person.prototype.getName = function () {
	return this.name.toUpperCase();
};

// Kullanım kısmı
const person = new Person('Ali', 'Tan');
console.log('fullname', person.getFullName());
console.log('getName', person.getName());
console.log('p', person);

// ES6

class Human {
	name;
	surname; // public
	#age = 18; // private
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}

	// js veya ts de ikinci bir constructor değeri yok.

	getFullName() {
		// debugger;
		return `${this.name} ${this.surname}`;
	}

	// default public olarak çalışıyor
	get Name() {
		return this.name;
	}

	set Name(value) {
		this.name = value;
	}
}

const human = new Human('Filiz', 'Can');
human.Name = 'Cansu';
console.log('h1', human.getFullName());
console.log('h', human);

class Employee extends Human {
	sicilNo;
	constructor(sicilNo, name, surname) {
		// super(name, surname); // c# base ile contructor kalıtım alınan nesneye değer aktarımı
		super(name, surname);
		this.sicilNo = sicilNo;
	}

	// kalıtım alınan sınıflarda aynı isimde method kalıtım alan sınıf tarafından ezilir.
	getFullName() {
		// debugger;
		// super ile base sınıftaki methodu tetikleyebilir ama bunu manuel olarak yapıyorum
		console.log('super.getFullName()', super.getFullName());
		return `${this.sicilNo} / ${this.name} ${this.surname}`;
	}
}

const e = new Employee(13232, 'Hakan', 'Can');
console.log('e', e);
console.log('emp' + e.getFullName());

// JS kalıtım var ama polimorphism yok

// JS Generic Class Yok
// Interface Yok
// Abstract Class Yok
// Access Modifiers (private,public,protected) yok

class Settings {
	static getUrl = 'uri';
}

console.log('uri', Settings.getUrl);
