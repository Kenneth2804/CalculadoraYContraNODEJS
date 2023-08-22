const readline = require ('readline');

const rl =readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Ingrese el primer número: ', (num1) =>{
rl.question('Ingrese el segundo número: ', (num2) =>{
rl.question('Seleccione la operación (+, -, *, /): ', (oper) =>{
	let result;
	switch(oper){
		case '+':
		result = parseFloat(num1) + parseFloat(num2);
		break;
		case '-':
		result = parseFloat(num1) - parseFloat(num2);
		break;
		case '*':
		result = parseFloat(num1) * parseFloat(num2);
		break;	
		case '/':
		result = parseFloat(num1) / parseFloat(num2);
		break;
		default:
		result = "Operación inválida";
}
console.log('Resultado:', result)
rl.close();
})
})

})