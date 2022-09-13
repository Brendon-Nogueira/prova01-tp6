const service = require('../service/provatp6.service')

const getAll = (req, res) => {
    res.send(service.getAll())
}

const create = (req, res) => {
    service.create(req.body)
    res.send('')
}

const update = (req, res) => {
    service.update(req.params.id, req.body)
    res.send('')
}

const remove = (req, res) => {
    service.remove(req.params.id)
    res.send('')
}

module.exports = {
    getAll,
    create,
    update,
    remove
}