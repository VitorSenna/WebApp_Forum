import { AreaIdeia } from '../../../entities/AreaIdeia'
import { IAreaIdeiaRepository } from '../../seqInterfaces/IAreaIdeiaRepository'
import { AreaIdeiaModel } from '../models/AreaIdeia-model'

export class SeqAreaIdeiaRepository implements IAreaIdeiaRepository {
  async save (areaIdeia: AreaIdeia): Promise<void> {
    await AreaIdeiaModel.create({
      ...areaIdeia
    })
  }

  async findById (id: number): Promise<AreaIdeia> {
    const areaIdeiaModel = await AreaIdeiaModel.findOne({
      where: {
        id
      }
    })
    if (!areaIdeiaModel) return null

    const areaIdeia = new AreaIdeia(areaIdeiaModel)

    return areaIdeia
  }

  async delete (id: number): Promise<void> {
    await AreaIdeiaModel.destroy({
      where: {
        id
      }
    })
  }
}
