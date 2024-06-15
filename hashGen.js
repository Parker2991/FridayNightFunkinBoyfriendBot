function hashGen () {
	const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890`~!@#$%^&*()-_+={}[]\\|;:,.<>/?';
	let username = '';
	for (let i = 0; i < 16; i++ ) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		 username += characters[randomIndex];
			             }
	              return username;
	   }
console.log(hashGen())
