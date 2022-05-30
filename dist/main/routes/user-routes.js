"use strict";
const CreateUsuario_1 = require("../../usecases/Usuario/CreateUsuario");
module.exports = (router) => {
    router.post('/users', (req, res) => CreateUsuario_1.createUsuarioController.handle(req, res));
};
// const routerUser = Router()
// routerUser.post('/users', (req, res) => createUsuarioController.handle(req, res))
// export default routerUser
