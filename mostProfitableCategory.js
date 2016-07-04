var fs = require('fs');

exports.categoriesMap = function(category) {
    var category = fs.readFileSync(category, 'utf-8');
    var cuts = category.split('\n');

    var arr = {}
    for (i = 0; i < cuts.length; i++) {
        cuts[i] = cuts[i].split(",");
        arr[cuts[i][0]] = cuts[i][1];
    }
    return arr
}
