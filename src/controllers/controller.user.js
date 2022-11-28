const userService = require("../services/service.user")

let userController = {
    getAllUsers: function(req,res){
        return res.status(200).json(userService.getAllUsers())
    }
}

module.exports = userController