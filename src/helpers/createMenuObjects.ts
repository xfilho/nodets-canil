type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish' //O type MenuOptions só pode receber essas opções // A primeira é para a página do resultado da busca

export const createMenuObject = (activeMenu: MenuOptions) => { //A função vai receber o parâmetro activeMenu que pode ser all,dog,cat ou fish
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    }

    if (activeMenu !== '') { //testa se activeMenu tem algum valor
        returnObject[activeMenu] = true //Transforma o valor enviado em true
    }

    return returnObject

}