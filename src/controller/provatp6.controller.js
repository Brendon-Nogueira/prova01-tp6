const service = require('../controller/provatp6.controller')

const create = (req, res) => {
    const movie = req.body
        service.create(movie)
        if(movie){
            res.status(201).send('Movie created successfully')
        } else{
            res.status(404).send('Invalid data supplied')
        }
        
}

const getAll = (req, res) => {
    res.status(200).send(service.getAll())
}

const getById = (req, res) => {
    const movie = service.getById(req.params.id)
    if (movie) {
        res.status(200).send(movie)
    } else {
        res.status(404).send('Movie not found')
    }
}

const update = (req, res) => {
    const movie = service.getById(req.params.id)
    if (movie) {
        if (isValidBody(res, movie)) {
            service.update(req.params.id, req.body)
            res.status(200).send('Movie updated successfully')
        }
    } else {
        res.status(404).send('Movie not found')
    }
}

const remove = (req, res) => {
    const movie = service.getById(req.params.id)
    if (movie) {
        service.remove(req.params.id)
        res.status(204).send('No content')
    } else {
        res.status(404).send('Movie not found')
    }
}


module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
}