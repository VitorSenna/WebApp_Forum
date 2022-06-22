import { Equipe } from '../../../entities/Equipe'
import { Usuario } from '../../../entities/Usuario'
import { IEquipeRepository } from '../../seqInterfaces/IEquipeRepository'
import { EquipeModel } from '../models/Equipe-model'
import { UsuarioModel } from '../models/Usuario-model'
import { UsuarioEquipeModel } from '../models/UsuarioEquipe-model'

export class SeqEquipeRepository implements IEquipeRepository {
  async save (equipe: Equipe, idUser: number): Promise<void> {
    const equipeData = await EquipeModel.create({
      ...equipe,
      idUserOwner: idUser
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

  async findByIdOwner (idEquipe: number, idUser: number): Promise<Equipe> {
    const equipeModel = await EquipeModel.findOne({
      where: {
        id: idEquipe,
        idUserOwner: idUser
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

  async addUserToEquipe (usuario: Usuario, idEquipe: number): Promise<void> {
    await UsuarioEquipeModel.create({
      idEquipe,
      idUser: usuario.id
    })
  }

  async userAlreadyRegistered (usuario: Usuario, idEquipe: number): Promise<boolean> {
    const data = await UsuarioEquipeModel.findOne({
      where: {
        idUser: usuario.id,
        idEquipe
      }
    })

    return !!data
  }

  async findAllUsersByEquipe (idEquipe: number, idUser: number): Promise<Usuario[]> {
    const usersData = await UsuarioModel.findAll({
      include: [
        {
          model: EquipeModel,
          as: 'equipe',
          through: { attributes: [] },
          where: {
            id: idEquipe
          }
        }
      ]
    })

    const users = usersData.map(userData => {
      const user = new Usuario(userData)

      return user
    })

    return users
  }
}
