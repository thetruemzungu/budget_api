const monthRoutes = require('./month_routes')

module.exports = (app, db) => {
    monthRoutes(app,db);
}