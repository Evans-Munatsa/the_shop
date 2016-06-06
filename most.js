var fs = require('fs')

exports.most = function(obj) {
    var max = 0;
    var mostpop = {};

    for (var prop in obj) {

        if (obj[prop] > max) {
            max = obj[prop];

            mostpop = {

                amount: max,
                item: prop
            };

        }
    }
    return mostpop;
}