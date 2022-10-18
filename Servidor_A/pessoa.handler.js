const {
    save,
    get,
    getById,
    remove
} = require("./firebase")
const nomeTabela = "Users"

async function saveUser(body){
    return await save(nomeTabela,null,body)
}

async function findAllUsers(){
    return await get(nomeTabela)
}

async function getUserById(id){
    return await getById(nomeTabela,id)
}


module.exports = {
    saveUser,
    findAllUsers,
    getUserById
}