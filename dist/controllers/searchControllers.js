"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const createMenuObjects_1 = require("../helpers/createMenuObjects"); //Importa função createMenuObject para auxiliar no menu
const pet_1 = require("../models/pet"); //Importa função Pet com o retorno das funções
const search = (req, res) => {
    let query = req.query.q; //Pega da QueryString o que o usuário digitou
    let list = pet_1.Pet.getFromName(query);
    if (!query) { //Se não tiver nada digitado no  query e apertar enter
        res.redirect('/'); // redireciona para a pagina principal
        return;
    }
    res.render('pages/page', {
        menu: (0, createMenuObjects_1.createMenuObject)(''),
        list,
        query
    });
};
exports.search = search;
