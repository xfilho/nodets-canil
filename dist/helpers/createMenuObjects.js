"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMenuObject = void 0;
const createMenuObject = (activeMenu) => {
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    };
    if (activeMenu !== '') { //testa se activeMenu tem algum valor
        returnObject[activeMenu] = true; //Transforma o valor enviado em true
    }
    return returnObject;
};
exports.createMenuObject = createMenuObject;
