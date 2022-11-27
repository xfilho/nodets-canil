"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Importações necessárias
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mustache_express_1 = __importDefault(require("mustache-express"));
const path_1 = __importDefault(require("path"));
const index_1 = __importDefault(require("./routes/index"));
//Inicializar o dotenv apontando o caminho do .env
dotenv_1.default.config({ path: path_1.default.join(__dirname, '.env') });
//Iniciando o servidor
const server = (0, express_1.default)();
//Configurar o mustache(template engine) e apontar a pasta views
server.set('view engine', 'mustache');
server.set('views', path_1.default.join(__dirname, 'views'));
server.engine('mustache', (0, mustache_express_1.default)());
//Configurar a pasta public para uso dos arquivos estaticos
server.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
//Rotas
server.use(index_1.default);
//Configuração página não encontrada 404
server.use((req, res) => {
    res.render("pages/404");
});
//Inicializar o servidor na porta definida no .env
server.listen(process.env.PORT);
