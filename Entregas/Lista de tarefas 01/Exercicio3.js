// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const classifiesGrade = (grade) => {
    if (grade >= 7) {
        return 'Aprovado'
    } else if (grade >= 4) {
        return 'Recuperação'
    } else {
        return 'Reprovado'
    }
}

console.log(classifiesGrade(10))
console.log(classifiesGrade(6))
console.log(classifiesGrade(3))
console.log(classifiesGrade(0))
