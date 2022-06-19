import { Equipe } from '../../entities/Equipe'

export interface IEquipeRepository {
    save(equipe: Equipe, idUser: number): Promise<void>
    findAll(idUser: number): Promise<Equipe[]>
    findById(idEquipe: number, idUser: number): Promise<Equipe>
    findByName(nome: string, idUser:number): Promise<Equipe>
    delete(id: number, idUser: number): Promise<void>
    update(equipe: Equipe, idUser: number): Promise<void>
}
