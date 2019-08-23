var db = require("../services/db_service")
module.exports = (app) => {
    app.post('/budget', (req, res) => {
        db.save('str', req.body[''])
        res.send(req.body)
    })

    app.get('/budget', (req, res) => {

    })
    app.get('/month/:key', (req, res) => {
        db.retrieve(req.params.key)
        .then((result) => {
            res.send({"result": result})
        })
        .catch((err) => {
            console.log(err)
        })
    })
};