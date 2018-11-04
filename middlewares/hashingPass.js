let bcrypt = require('bcrypt');
const hashingFunc = {
    hashing: 
    async function hash(password) {
        var saltNumber = 10;
        const hashedPassword = await bcrypt.hash(password, saltNumber);
        return hashedPassword
    },

    comparing: (password, hashed) => {
        bcrypt.compareSync(password, hashed, function (err, res) {
            if (err) {
                console.log('comparing hased password error', err)
                return false
            }
            if (res) {
                console.log('password is correct 🔓')
                return true
            } else {
                console.log('password is not correct 🔒')
                return false
            }
        });
    }

}

module.exports = hashingFunc

