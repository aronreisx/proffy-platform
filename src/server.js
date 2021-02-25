const {pageLanding, pageStudy, pageGiveClasses, saveClasses, pageSuccess} = require('./pages');

const express = require('express');
const server = express();
const port = 5500;

// chamando as funções estruturais de cada página

const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    noCache: true // guardando arquivos em cache, deixando mais rápida a navegação
});

server
.use(express.urlencoded({ extended: true }))
.use(express.static('public'))
.get('/', pageLanding)
.get('/study', pageStudy)
.get('/give-classes', pageGiveClasses)
.get('/success', pageSuccess)
.post('/success', saveClasses)
.listen(port)