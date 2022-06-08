import { Equipe } from '../../entities/Equipe'

export interface IEquipeRepository {
    save(equipe: Equipe): Promise<void>
    findAll(): Promise<Equipe[]>
    findById(id: number): Promise<Equipe>
    findByName(nome: string): Promise<Equipe>
    delete(id: number): Promise<void>
}
