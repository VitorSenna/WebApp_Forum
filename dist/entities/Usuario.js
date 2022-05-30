"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
    // seguidores?: number
    // seguindo?: number
    constructor({ id, email, nome, sobrenome, username, senha, dataCadastro = new Date() }) {
        this.id = id;
        this.email = email;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.username = username;
        this.senha = senha;
        this.dataCadastro = dataCadastro;
    }
}
exports.Usuario = Usuario;
