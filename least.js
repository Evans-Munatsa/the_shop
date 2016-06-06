var fs = require('fs');

exports.least = function(obj) {
    var min = 54;
    var mostpop = {};

    for (var prop in obj) {

        if (obj[prop] < min) {
            min = obj[prop];

            mostpop = {

                amount: min,
                item: prop
            };

        }
    }
    return mostpop
}