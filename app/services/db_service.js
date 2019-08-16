var db = require("redis").createClient();
db.on('connect', function() {console.log('Redis client connected');});
db.on('error', function (err) {console.log('Something went wrong ' + err);});

module.exports = {
    save: (key, value) => {
        db.set(key, value, function(err) {
            if(err){
                res.send({'error':'An error has occured'});
                throw err
            }
        })
    },
    retrieve: (key) => {
        return new Promise((resolve, reject) => {
            db.get(key, (err, value) => {
                if (err){
                    return reject(err)
                }
                else{
                    return resolve(JSON.parse(value))
                }
            })
        })
    }
}