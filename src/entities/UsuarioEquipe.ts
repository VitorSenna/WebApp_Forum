import { Equipe } from './Equipe'
import { Usuario } from './Usuario'

type UsuarioEquipeConstructor = {
  idUser?: number
  idEquipe?: number
}
export class UsuarioEquipe {
  usuario?: Usuario
  equipe?: Equipe
  idUser?: number
  idEquipe?: number

  constructor ({ idUser, idEquipe }: UsuarioEquipeConstructor) {
    this.idEquipe = idEquipe
    this.idUser = idUser
  }
}
