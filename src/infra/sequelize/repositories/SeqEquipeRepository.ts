import { Equipe } from '../../../entities/Equipe'
import { IEquipeRepository } from '../../seqInterfaces/IEquipeRepository'
import { EquipeModel } from '../models/Equipe-model'
import { UsuarioModel } from '../models/Usuario-model'
import { UsuarioEquipeModel } from '../models/UsuarioEquipe-model'
import { SeqUsuarioRepository } from './SeqUsuarioRepository'

export class SeqEquipeRepository implements IEquipeRepository {
  private usuarioRepository = new SeqUsuarioRepository()
  async save (equipe: Equipe, idUser: number): Promise<void> {
    const equipeData = await EquipeModel.create({
      ...equipe
    })
    await UsuarioEquipeModel.create({
      idEquipe: equipeData.id,
      idUser
    })
  }

  async findAll (idUser: number): Promise<Equipe[]> {
    const usuarioEquipesModel = await EquipeModel.findAll({
      include: [
        {
          model: UsuarioModel,
          as: 'usuarioEquipe',
          through: { attributes: [] },
          where: {
            id: idUser
          }
        }
      ]
    })
    const usuarioEquipes = usuarioEquipesModel.map(usuarioEquipeModel => {
      const usuarioEquipe = new Equipe(usuarioEquipeModel)
      return usuarioEquipe
    })
    return usuarioEquipes
  }

  async findById (idEquipe: number, idUser: number): Promise<Equipe> {
    const equipeModel = await EquipeModel.findOne({
      include: [
        {
          model: UsuarioModel,
          as: 'usuarioEquipe',
          where: {
            id: idUser
          }
        }
      ],
      where: {
        id: idEquipe
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

  async update (equipe: Equipe, idUser: number): Promise<void> {
    await EquipeModel.update({ ...equipe },
      {
        where: {
          id: equipe.id
        }
      })
  }
}
