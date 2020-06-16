//saber se um número é par ou impar

let num = prompt('digite um número')

parouimpar = parseInt(num) % 2

if (parouimpar == 0) {
    console.log('Par')
} else {
    console.log('Impar')
}