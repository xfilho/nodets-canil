import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObjects" //Importa função createMenuObject para auxiliar no menu
import { Pet } from "../models/pet" //Importa função Pet com o retorno das funções

export const search = (req: Request, res: Response) => {
    let query = req.query.q as string; //Pega da QueryString o que o usuário digitou

    let list = Pet.getFromName(query)

    if (!query) { //Se não tiver nada digitado no  query e apertar enter
        res.redirect('/') // redireciona para a pagina principal
        return
    }

    res.render('pages/page', {
        menu: createMenuObject(''),
        list,
        query


    })
}
