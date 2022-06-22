import { Equipe } from '../../entities/Equipe'
import { Usuario } from '../../entities/Usuario'

export interface IEquipeRepository {
    save(equipe: Equipe, idUser: number): Promise<void>
    findAll(idUser: number): Promise<Equipe[]>
    findByIdOwner(idEquipe: number, idUser: number): Promise<Equipe>
    findByName(nome: string, idUser:number): Promise<Equipe>
    delete(id: number, idUser: number): Promise<void>
    update(equipe: Equipe, idUser: number): Promise<void>

    addUserToEquipe(usuario: Usuario, idEquipe: number): Promise<void>
    userAlreadyRegistered(usuario: Usuario, idEquipe: number): Promise<boolean>
    findAllUsersByEquipe(idEquipe: number, idUser: number): Promise<Usuario[]>
}
