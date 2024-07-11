// EC Module System

export function getName() {
	return 'Ali';
}

export function getFullName() {
	return 'Ali Tan';
}

export class User {}

function MyButton() {
	return (
		<>
			<button>My Button</button>
		</>
	);
}

export default MyButton; // varsayılan olarak MyButton adında bu component dışarı çıksın.
// Bir js dosyasında sadece 1 adet export default tanımı olabilir.

// EC5 ile module.exports = app // export
// const app = require('app.js'); // import  COMMONJS Module System
