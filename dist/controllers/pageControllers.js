"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fishes = exports.cats = exports.dogs = exports.home = void 0;
const createMenuObjects_1 = require("../helpers/createMenuObjects"); //Importa função createMenuObject para auxiliar no menu
const pet_1 = require("../models/pet"); //Importa função Pet com o retorno das funções
const home = (req, res) => {
    let list = pet_1.Pet.getAll(); //Retorna todos os animais
    res.render('pages/page', {
        list,
        menu: (0, createMenuObjects_1.createMenuObject)('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        }
    });
};
exports.home = home;
const dogs = (req, res) => {
    let list = pet_1.Pet.getfromType('dog');
    res.render('pages/page', {
        list,
        menu: (0, createMenuObjects_1.createMenuObject)('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        }
    });
};
exports.dogs = dogs;
const cats = (req, res) => {
    let list = pet_1.Pet.getfromType('cat');
    res.render('pages/page', {
        list,
        menu: (0, createMenuObjects_1.createMenuObject)('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        }
    });
};
exports.cats = cats;
const fishes = (req, res) => {
    let list = pet_1.Pet.getfromType('fish');
    res.render('pages/page', {
        list,
        menu: (0, createMenuObjects_1.createMenuObject)('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        }
    });
};
exports.fishes = fishes;
