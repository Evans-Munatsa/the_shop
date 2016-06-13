var fs = require('fs');

exports.leastSoldCategory = function(obj){
	var min = 54;
    var leastpop = {};

    for (var prop in obj) {
        if (obj[prop] < min) {
            min = obj[prop];

            leastpop = {

                amount: min,
                category: prop
            };
        }
    }
    console.log(leastpop)
    return leastpop
}