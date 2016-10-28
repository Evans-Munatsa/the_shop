var bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    console.log(hash)
    bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
        console.log(res)
    });
});