var productCtrl = require('./product.controller');
module.exports = function(app) {
    app.get("/product", productCtrl.get);
    app.post("/product/search", productCtrl.search)

};