var fs = require('fs');

exports.mostSoldCategory = function(obj) {
	var max = 0;
    var mostpop = {};

    for (var prop in obj) {
        if (obj[prop] > max) {
            max = obj[prop];

            mostpop = {
                amount: max,
                category: prop
            };
        }
    }
    console.log(mostpop);
    return mostpop;
}