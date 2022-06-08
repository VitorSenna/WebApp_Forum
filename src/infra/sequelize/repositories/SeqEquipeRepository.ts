import { Equipe } from '../../../entities/Equipe'
import { IEquipeRepository } from '../../seqInterfaces/IEquipeRepository'
import { EquipeModel } from '../models/Equipe-model'

export class SeqEquipeRepository implements IEquipeRepository {
  async save (equipe: Equipe): Promise<void> {
    await EquipeModel.create({
      ...equipe
    })
  }

  async findAll (): Promise<Equipe[]> {
    const equipesModel = await EquipeModel.findAll()

    const equipes = equipesModel.map(equipeModel => {
      const equipe = new Equipe(equipeModel)
      return equipe
    })

    return equipes
  }

  async findById (id: number): Promise<Equipe> {
    const equipeModel = await EquipeModel.findOne({
      where: {
        id
      }
    })
    if (!equipeModel) return null

    const equipe = new Equipe(equipeModel)

    return equipe
  }

  async findByName (nome: string): Promise<Equipe> {
    const equipeModel = await EquipeModel.findOne({
      where: {
        nome
      }
    })
    if (!equipeModel) return null

    const equipe = new Equipe(equipeModel)

    return equipe
  }

  async delete (id: number): Promise<void> {
    await EquipeModel.destroy({
      where: {
        id
      }
    })
  }
}
