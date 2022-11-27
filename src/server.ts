//Importações necessárias
import express from "express";
import dotenv from "dotenv"
import mustache from "mustache-express"
import path from "path";
import mainRoutes from "./routes/index"

//Inicializar o dotenv apontando o caminho do .env
dotenv.config({path: path.join(__dirname,'.env')})

//Iniciando o servidor
const server = express()

//Configurar o mustache(template engine) e apontar a pasta views
server.set('view engine', 'mustache')
server.set('views', path.join(__dirname,'views'));
server.engine('mustache', mustache());

//Configurar a pasta public para uso dos arquivos estaticos
server.use(express.static(path.join(__dirname,'../public')))

//Rotas
server.use(mainRoutes)

//Configuração página não encontrada 404
server.use((req, res) => {
    res.send('Página não encontrada')
})


//Inicializar o servidor na porta definida no .env
server.listen(process.env.PORT)
