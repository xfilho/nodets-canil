import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObjects" //Importa função createMenuObject para auxiliar no menu
import { Pet } from "../models/pet" //Importa função Pet com o retorno das funções

export const home = (req: Request, res: Response) => {
    let list = Pet.getAll() //Retorna todos os animais

    res.render('pages/page', {
        list,
        menu: createMenuObject('all'), //Recebe o valor all como true da função createMenuObject
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        }
    })
}

export const dogs = (req: Request, res: Response) => {
    let list = Pet.getfromType('dog')
    res.render('pages/page', {
        list,
        menu: createMenuObject('dog'), //Recebe o valor dog como true da função createMenuObject
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        }
    })

}

export const cats = (req: Request, res: Response) => {
    let list = Pet.getfromType('cat')
    res.render('pages/page', {
        list,
        menu: createMenuObject('cat'), //Recebe o valor cat como true da função createMenuObject
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        }
    })
}

export const fishes = (req: Request, res: Response) => {
    let list = Pet.getfromType('fish')
    res.render('pages/page', {
        list,
        menu: createMenuObject('fish'), //Recebe o valor fish como true da função createMenuObject
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        }
    })
}
