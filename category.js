var fs = require('fs')
var products = require('./products')
exports.category = function(cat) {
    var obj = {};

    for (i in cat) {
        if (!obj.hasOwnProperty(cat[i])) {
            //put the category name in the Object    
            obj[cat[i]] = 0;
        }
    }
    return obj;
}