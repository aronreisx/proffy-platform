// dados do fomulário de matérias dos formulários dos professores
const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

// dados do fomulário de semanas dos formulários dos professores
const weekdays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
]

// transformando o número do array de matérias em texto
function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}

// convertendo horas em minutos
function convertHoursToMinutes(time) {
    const [hour, minutes] = time.split(":")
    return Number((hour * 60) + minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}