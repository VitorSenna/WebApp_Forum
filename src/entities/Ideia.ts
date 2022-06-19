import { AreaIdeia } from './AreaIdeia'
import { Equipe } from './Equipe'

type IdeiaContructor = {
    id?: number
    titulo: string
    descricao: string
    dataPublicacao: Date
}

export class Ideia {
  id?: number
  equipe?: Equipe
  areaIdeia?: AreaIdeia
  titulo: string
  descricao: string
  dataPublicacao: Date

  constructor ({ id = null, titulo, descricao, dataPublicacao = new Date() }: IdeiaContructor) {
    this.id = id
    this.titulo = titulo
    this.descricao = descricao
    this.dataPublicacao = dataPublicacao
  }
}
