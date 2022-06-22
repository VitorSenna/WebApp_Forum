type EquipeConstructor = {
  id?: number
  nome: string
  descricao: string
  dataCriacao: Date
  isPrivate: boolean
}

export class Equipe {
  id?: number
  nome: string
  descricao: string
  dataCriacao: Date
  isPrivate: boolean

  constructor ({ id = null, nome, descricao, dataCriacao = new Date(), isPrivate }: EquipeConstructor) {
    this.id = id
    this.nome = nome
    this.descricao = descricao
    this.dataCriacao = dataCriacao
    this.isPrivate = isPrivate
  }
}
