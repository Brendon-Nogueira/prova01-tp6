const myDatabase = []

const getAll = () => myDatabase

const create = c => {
    myDatabase.push(c)
}

const update = () => {
      
}

const remove = r => {
    
    myDatabase.splice(index, 1)
}

module.exports = {
    getAll,
    create,
    update,
    remove
}