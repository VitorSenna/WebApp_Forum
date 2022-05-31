type EquipeConstructor = {
  id?: number
  nome: string
  descricao: string
}

export class Equipe {
  id?: number
  nome: string
  descricao: string

  constructor ({ id = null, nome, descricao }: EquipeConstructor) {
    this.id = id
    this.nome = nome
    this.descricao = descricao
  }
}
