type UsuarioContructor = {
    id?: number
    email: string
    nome: string
    sobrenome: string
    username: string
    senha: string
    isPrivate: boolean
    dataCadastro: Date
    // seguidores?: number
    // seguindo?: number
}

export class Usuario {
  id?: number
  email: string
  nome: string
  sobrenome: string
  username: string
  senha: string
  isPrivate: boolean
  dataCadastro: Date
  // seguidores?: number
  // seguindo?: number

  constructor ({ id = null, email, nome, sobrenome, username, senha, isPrivate, dataCadastro = new Date() }: UsuarioContructor) {
    this.id = id
    this.email = email
    this.nome = nome
    this.sobrenome = sobrenome
    this.username = username
    this.senha = senha
    this.isPrivate = isPrivate
    this.dataCadastro = dataCadastro
  }
}
