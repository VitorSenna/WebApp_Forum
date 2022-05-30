"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = exports.UsuarioModel = void 0;
const sequelize_1 = require("sequelize");
class UsuarioModel extends sequelize_1.Model {
}
exports.UsuarioModel = UsuarioModel;
const init = (sequelize) => {
    UsuarioModel.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'id_usuario'
        },
        email: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'email'
        },
        nome: {
            type: sequelize_1.DataTypes.STRING(100),
            field: 'nome'
        },
        sobrenome: {
            type: sequelize_1.DataTypes.STRING(100),
            field: 'sobrenome'
        },
        username: {
            type: sequelize_1.DataTypes.STRING(100),
            field: 'username'
        },
        senha: {
            type: sequelize_1.DataTypes.STRING(100),
            field: 'senha'
        }
    }, {
        tableName: 'usuario',
        sequelize
    });
};
exports.init = init;
