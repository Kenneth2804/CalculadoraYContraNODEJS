const readline = require('readline');
const crypto = require('crypto');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
rl.question('Ingrese la longuitud de la contraseña: ', (length) =>{
	const password = crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
	console.log('Contraseña Generada:', password);
	rl.close();
})