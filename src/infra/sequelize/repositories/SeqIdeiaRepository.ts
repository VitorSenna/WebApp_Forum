import { AreaIdeia } from '../../../entities/AreaIdeia'
import { Ideia } from '../../../entities/Ideia'
import { IIdeiaRepository } from '../../seqInterfaces/IIdeiaRepository'
import { IdeiaModel } from '../models/Ideia-model'

export class SeqIdeiaRepository implements IIdeiaRepository {
  async save (ideia: Ideia, idUser: number): Promise<void> {
    await IdeiaModel.create({
      ...ideia,
      idEquipe: ideia.equipe.id,
      idAreaIdeia: ideia.areaIdeia.id,
      idUser
    })
  }

  async findAll (idEquipe: number, idUser: number): Promise<Ideia[]> {
    const ideiasData = await IdeiaModel.findAll({
      include: ['equipe', 'areaIdeia'],
      where: {
        idEquipe,
        idUser
      }
    })
    const ideias = ideiasData.map(ideiaData => {
      const ideia = new Ideia(ideiaData)
      if (ideiaData.areaIdeia) ideia.areaIdeia = new AreaIdeia(ideiaData.areaIdeia)

      return ideia
    })
    return ideias
  }

  async findById (idEquipe: number, idUser: number, idIdeia: number): Promise<Ideia> {
    const ideiaData = await IdeiaModel.findOne({
      include: ['equipe', 'areaIdeia'],
      where: {
        idEquipe,
        idUser,
        id: idIdeia
      }
    })

    if (!ideiaData) return null

    const ideia = new Ideia(ideiaData)
    if (ideiaData.areaIdeia) ideia.areaIdeia = new AreaIdeia(ideiaData.areaIdeia)
    return ideia
  }

  async delete (idEquipe: number, idUser: number, idIdeia: number): Promise<void> {
    await IdeiaModel.destroy({
      where: {
        id: idIdeia,
        idEquipe,
        idUser
      }
    })
  }
}
