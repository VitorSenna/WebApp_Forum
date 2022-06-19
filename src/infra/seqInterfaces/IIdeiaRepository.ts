import { Ideia } from '../../entities/Ideia'

export interface IIdeiaRepository {
    save(ideia: Ideia, idUser: number): Promise<void>
    findAll(idEquipe: number, idUser: number): Promise<Ideia[]>
    findById(idEquipe: number, idUser: number, idIdeia: number): Promise<Ideia>
    delete(idEquipe: number, idUser: number, idIdeia: number): Promise<void>
}
