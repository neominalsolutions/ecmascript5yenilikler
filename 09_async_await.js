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

// ES7 ile birlikte birbirini bekleyen async kod blokları yazılmış

const getUserByIdWithRoles = async (userId) => {
	const data = {
		user: {},
		roles: [],
	};

	try {
		// sıralı işlem ise async await mantıklı ha sıralı işlem değilse paralel olarak then catch yönetmi çekmek birbirin bağımsız kod blokları olarak hareket etmek daha mantıklı.
		data.user = await getUserById(userId);
		data.roles = await getUserRoles(userId);

		console.log('data', data);
	} catch (error) {}
};

getUserByIdWithRoles(1)
	.then((data) => {
		console.log('İşlem Bitti', data);
	})
	.catch((err) => {
		console.log('err', err);
	});
