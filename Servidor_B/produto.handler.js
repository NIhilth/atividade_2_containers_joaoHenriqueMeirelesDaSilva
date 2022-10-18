const {
    save,
    get,
    getById,
    remove
} = require("./firebase")
const nomeTabela = "Products"

async function saveProduct(body){
    return await save(nomeTabela,null,body)
}

async function findAllProducts(){
    return await get(nomeTabela)
}

async function getProductById(id){
    return await getById(nomeTabela,id)
}

module.exports = {
    saveProduct,
    findAllProducts,
    getProductById
}