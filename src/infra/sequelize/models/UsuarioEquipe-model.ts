/* eslint-disable no-use-before-define */
import { Association, DataTypes, Model, Sequelize } from 'sequelize'
import { EquipeModel } from './Equipe-model'
import { UsuarioModel } from './Usuario-model'

interface UsuarioEquipeAttributes {
    idUser: number
    idEquipe: number
}

export class UsuarioEquipeModel extends Model<UsuarioEquipeAttributes, UsuarioEquipeAttributes> implements UsuarioEquipeAttributes {
  public idUser: number
  public idEquipe: number

  public usuario: UsuarioModel
  public equipe: EquipeModel

  declare static associations: {
    usuario: Association<UsuarioEquipeModel, UsuarioModel>
    equipe: Association<UsuarioEquipeModel, EquipeModel>
  }
}

export const init = (sequelize: Sequelize) => {
  UsuarioEquipeModel.init({
    idUser: {
      type: DataTypes.INTEGER,
      references: { model: 'usuario', key: 'idUser' }
    },
    idEquipe: {
      type: DataTypes.INTEGER,
      references: { model: 'equipe', key: 'idEquipe' }
    }
  },
  {
    tableName: 'usuario_equipe',
    sequelize
  })
}

export const associate = () => {}
