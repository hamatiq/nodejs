const fs = require('fs');

var notes = function(fileName) {
    return fs.readFileSync('./' + fileName, 'utf8');
}

module.exports = notes;