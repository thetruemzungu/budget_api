var db = require("../services/db_service")
module.exports = (app) => {
    app.post('/biweeklyBudget', (req, res) => {
        console.log(req.body)
        if(req.body.hasOwnProperty('firstHalf')){
            db.save('firstHalf', req.body['firstHalf'])
            res.send(req.body)
        }
        else if(req.body.hasOwnProperty('secondHalf')){
            db.save('secondHalf', req.body['secondHalf'])
            res.send(req.body)
        }
        else {
            res.send({"message": "Not a valid key"})
        }
    })

    app.get('/months/:key', (req, res) => {
        db.retrieve(req.params.key)
        .then((result) => {
            console.log("good stuff right here: " + result)
            res.send({"result": result})
        })
        .catch((err) => {
            console.log(err)
        })
    })
};