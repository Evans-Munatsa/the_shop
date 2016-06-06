var fs = require('fs');

exports.least = function(obj) {
    var min = 54;
    var leastpop = {};

    for (var prop in obj) {

        if (obj[prop] < min) {
            min = obj[prop];

            leastpop = {

                amount: min,
                item: prop
            };

        }
    }
    return leastpop
}