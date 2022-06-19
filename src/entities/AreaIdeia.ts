interface AreaIdeiaConstructor{
  id?: number
  descricao: string
}

export class AreaIdeia {
  id: number
  descricao: string

  constructor ({ id = null, descricao = '' }: AreaIdeiaConstructor) {
    this.id = id
    this.descricao = descricao
  }
}
