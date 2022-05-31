import { Equipe } from '../../../entities/Equipe'
import { IEquipeRepository } from '../../seqInterfaces/IEquipeRepository'
import { EquipeModel } from '../models/Equipe-model'

export class SeqEquipeRepository implements IEquipeRepository {
  async save (equipe: Equipe): Promise<void> {
    await EquipeModel.create({
      ...equipe
    })
  }
}
