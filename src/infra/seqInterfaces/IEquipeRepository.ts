import { Equipe } from '../../entities/Equipe'

export interface IEquipeRepository {
    save(equipe: Equipe): Promise<void>
}
