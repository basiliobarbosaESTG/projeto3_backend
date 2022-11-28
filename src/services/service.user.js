const connection = require('../../database');

let users = [
    {
        nome: "gabriel"
    },
    {
        nome: "basilio"
    }
]

let userService = {
    getAllUsers: function(){
        return users
    }
}

module.exports = userService