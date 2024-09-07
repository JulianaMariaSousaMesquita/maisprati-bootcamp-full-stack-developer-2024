// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.
const classifiesAge = (age) => {
    if (age <= 11) {
        return 'Criança'
    } else if (age <= 18) {
        return 'Adolescente'
    } else if (age < 60) {
        return 'Adulto'
    } else {
        return 'Idoso'
    }
}

console.log(classifiesAge(10))
console.log(classifiesAge(20))
console.log(classifiesAge(50))
console.log(classifiesAge(80))