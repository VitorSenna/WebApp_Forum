/* eslint-disable no-use-before-define */
import { Association, DataTypes, Model, Optional, Sequelize } from 'sequelize'
import { IdeiaModel } from './Ideia-model'
import { UsuarioModel } from './Usuario-model'
import { UsuarioEquipeModel } from './UsuarioEquipe-model'

interface EquipeAttributes {
    id?: number
    nome: string
    descricao: string
    dataCriacao: Date
}

export interface EquipeCreateAttributes extends Optional<EquipeAttributes, 'id'> { }

export class EquipeModel extends Model<EquipeAttributes, EquipeCreateAttributes> implements EquipeAttributes {
  public id?: number
  public nome: string
  public descricao: string
  public dataCriacao: Date

  public readonly usuarios: UsuarioModel[]

  declare static associations: {
    equipe: Association<EquipeModel, UsuarioEquipeModel>
  }
}

export const init = (sequelize: Sequelize) => {
  EquipeModel.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'id_equipe'
    },
    nome: {
      type: DataTypes.STRING(50),
      field: 'nome'
    },
    descricao: {
      type: DataTypes.STRING(100),
      field: 'descricao'
    },
    dataCriacao: {
      type: DataTypes.DATEONLY,
      field: 'data_criacao'
    }
  },
  {
    tableName: 'equipe',
    sequelize
  })
}

export const associate = (sequelize: any) => {
  EquipeModel.belongsToMany(UsuarioModel,
    {
      through: UsuarioEquipeModel,
      foreignKey: 'idEquipe',
      as: 'usuarioEquipe'
    })

  EquipeModel.hasMany(IdeiaModel,
    {
      foreignKey: 'id_equipe',
      as: 'equipe'
    })
}
