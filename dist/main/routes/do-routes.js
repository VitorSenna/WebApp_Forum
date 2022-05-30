"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Usuario_model_1 = require("../../infra/sequelize/models/Usuario-model");
module.exports = (router) => {
    router.get('/do', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        // await sequelize.sync({ force: true })
        try {
            yield Usuario_model_1.UsuarioModel.sync({ force: true });
            return res.json({ message: 'Async true' });
        }
        catch (error) {
            console.log(error);
            return res.status(500);
        }
    }));
};
