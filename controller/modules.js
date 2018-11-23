const bcrypt = require('bcrypt');
const config = require('../config/conf');
module.exports = {
    checkUser: async (username, password, database) => {
        const result = await database.find({
            username
        });
        if (result.length == 0) {
            return false;
        } else {
            const hashedPass = result[0].password;
            const match = await bcrypt.compare(password, hashedPass);
            if (match) {
                return result[0].id
            } else {
                return false
            }
        }
    },
    hashingPass: async (password) => {
        const saltRounds = config.salt;
        const hashedPassword = await new Promise((resolve, reject) => {
            bcrypt.hash(password, saltRounds, function (err, hash) {
                if (err) reject(err)
                resolve(hash)
            });
        })
        return hashedPassword
    }
}