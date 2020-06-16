// calculando o IMC
const peso = 75
const altura = 1.7
const nome = 'Hildegard'

const imc = peso / (altura * altura)

if (imc >= 30) {
    console.log('Hildegard você está obeso')
} else {
    console.log('Hildegard seu peso é normal')
}