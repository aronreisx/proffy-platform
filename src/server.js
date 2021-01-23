const proffys = [
    {
        name: "Aron Reis",
        avatar: "images/aron_reis.jpg",
        whatsapp: "915392891",
        bio: "Entusiasta das melhores tecnologias de química avançada. <br><br>Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "70",
        weekday: [2],
        time_from: [1100],
         time_to: [2300]
    },
    {
        name: "Daday Poty",
        avatar: "images/daday_poty.jpg",
        whatsapp: "912483781",
        bio: "Amante das artes renascentista e pós moderna. <br><br>Adora passar tempo produzindo e editando imagens no Photoshop através das suas técnicas avançadas em pintura digital.",
        subject: "Artes",
        cost: "70",
        weekday: [4],
        time_from: [8000],
        time_to: [3000]
    },
    {
        name: "Sofia Sales",
        avatar: "images/sofia_sales.jpg",
        whatsapp: "912483859",
        bio: "Adora viajar e conhecer novas culturas.<br><br>Nas horas vagas Sofia gosta de escrever e publicar textos relatando os aspectos históricos e culturais de todos os lugares por onde passou.",
        subject: "História",
        cost: "70",
        weekday: [4],
        time_from: [8000],
        time_to: [3000]
    },

]

const subjects = [
   'Artes',
   'Biologia',
   'Ciências',
   'Educaç ão Física',
   'Física',
   'Geografia',
   'História',
   'Matemática',
   'Português',
   'Química',
]

const weekdays = [
   'Domingo',
   'Segunda-feira',
   'Terça-feira',
   'Quarta-feira',
   'Quinta-feira',
   'Sexta-feira',
   'Sábado',
]


//Funcionalidades

function getSubject (subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}

function pageIndex(req, res) {
    return res.render('index.html')
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render('study.html', { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {

    const data = req.query

    const isNotEmpty = Object.keys(data).length > 0

    if (isNotEmpty) {
        //estou enviando o valor retornado por meu metodo getSubject para dentro do atributo 'subject' do objeto 'data'
        data.subject = getSubject(data.subject)

        //adiciona o conteúdo da variável data para o array de objetos "proffys"
        proffys.push(data)

        //Após o processo de cadastro (envio de formulário e execução do push), o usuário é redirecionado para a página study
        return res.redirect('/study')
    }
    //como um return já é executado no escopo mais interno (if) este return não é executado
    return res.render('give-classes.html', { subjects, weekdays })
}

// Servidor
const express = require('express')
const server = express()


// Configuração Nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

// Início server config
server
// traça uma rota da pasta 'public' para o root, fazendo com que arquivos estáticos (css, scripts, images) possam ser chamandos diretamento desta forma => '/images/logo.jpg' ainda que a rota real seja '/public/images/logo.jpg', desta forma não é preciso alterar o link de todos os arquivos no documentos html.
.use(express.static('public'))
// Estabelece rotas da aplicação
.get('/', pageIndex)
.get('/study', pageStudy)
.get('/give-classes', pageGiveClasses)
// Start do servidor na porta definida
.listen(5500)