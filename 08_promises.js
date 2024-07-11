// Network işlemleri yaparken client istemcini (react,angular,vue) server sunucu ile etkileşime girebilmesi için promise yapıları kullanılacaktır.
// Asenkron programa tekniği ile geliyor.

// ES6 ile pirlikte geçildi.

// Promise 2 farklı state ile çalışır, sözü tutarsa resolve olur, yada sözü tutamaz reject olur.
// pending state ise sunucu resolve yada rejected response lardan birini dönene kadar promise işlendiği süre.

// backend.js

const getUserById = function (userId) {
	console.log('getUserById');
	// api/users
	const promise1 = new Promise((resolve, reject) => {
		const data = [
			{ name: 'ali', id: 1 },
			{ name: 'can', id: 2 },
		];

		setTimeout(() => {
			const user = data.find((x) => x.id === userId);
			if (user) {
				resolve(user);
			} else {
				reject({ message: 'UserNotFound' });
			}
		}, 3000);
	});

	return promise1;
};

const getUserRoles = function (userId) {
	console.log('getUserRoles');

	const roles = [
		{ name: 'admin', userId: 1, name: 'manager', userId: 3 },
		{ name: 'supervisor', userId: 1 },
	];

	const promise = new Promise((resolve, reject) => {
		const userRoles = roles.filter((x) => x.userId === userId);

		if (userRoles.length > 0) {
			setTimeout(() => {
				resolve(userRoles);
			}, 1000);
		} else {
			resolve({ message: 'Kullanıcıya ait rol yok' });
		}
	});

	return promise;
};

// front.js

// promise1();
/*
getUserById(1)
	.then((response) => {
		// resolve edilen değer reponse olarak then blogu içinde dönüyor
		console.log('users', response);
	})
	.catch((err) => {
		console.log('err', err);
	});

getUserRoles(1)
	.then((response) => {
		console.log('user-roles', response);
	})
	.catch((err) => {
		console.log('err', err);
	});

    */

// yukarıdaki asenkron kod blogunu senkron yazabilmek için aşağıdaki tekniği uygulamak gerekir.

/*
getUserById(1)
	.then((response) => {
		// resolve edilen değer reponse olarak then blogu içinde dönüyor
		console.log('users-v2', response);
		getUserRoles(1)
			.then((response) => {
				console.log('user-roles-v2', response);
			})
			.catch((err) => {
				console.log('err', err);
			});
	})
	.catch((err) => {
		console.log('err', err);
	});

*/

// eğer yukarıdaki gibi yazmak ile vakit kaybetmek istemez isek yada okunurluğundan dolayı yukarı yöntemi karışık bulursak

// frontend.js
const getUserByIdWithRoles = (userId) => {
	const data = {
		user: {},
		roles: [],
	};

	const func1 = async () => {
		return getUserById(userId).then((user) => {
			data.user = { ...user };

			return data;
		});
	};

	const func2 = async  () => {
		return getUserRoles(userId).then((roles) => {
			data.roles = [...roles];

			return data;
		});
	};

	return func1().then(func2); // Promise Chain
};

getUserByIdWithRoles(1)
	.then((data) => {
		console.log('İşlem Bitti', data);
	})
	.catch((err) => {
		console.log('err', err);
	});
