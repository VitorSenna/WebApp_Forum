/* eslint-disable no-use-before-define */
import { Association, DataTypes, Model, Optional, Sequelize } from 'sequelize'
import { EquipeModel } from './Equipe-model'
import { IdeiaModel } from './Ideia-model'
import { UsuarioEquipeModel } from './UsuarioEquipe-model'

interface UsuarioAttributes {
    id?: number
    email: string
    nome: string
    sobrenome: string
    username: string
    senha: string
    dataCadastro: Date
}

export interface UsuarioCreateAttributes extends Optional<UsuarioAttributes, 'id'> { }

export class UsuarioModel extends Model<UsuarioAttributes, UsuarioCreateAttributes> implements UsuarioAttributes {
  public id?: number
  public email: string
  public nome: string
  public sobrenome: string
  public username: string
  public senha: string
  public dataCadastro: Date

  public readonly equipes: EquipeModel[]

  declare static associations: {
    equipe: Association<UsuarioModel, UsuarioEquipeModel>
  }
}

export const init = (sequelize: Sequelize) => {
  UsuarioModel.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'id_usuario'
    },
    email: {
      type: DataTypes.STRING(30),
      field: 'email'
    },
    nome: {
      type: DataTypes.STRING(100),
      field: 'nome'
    },
    sobrenome: {
      type: DataTypes.STRING(100),
      field: 'sobrenome'
    },
    username: {
      type: DataTypes.STRING(100),
      field: 'username'
    },
    senha: {
      type: DataTypes.STRING(100),
      field: 'senha'
    },
    dataCadastro: {
      type: DataTypes.DATEONLY,
      field: 'data_cadastro'
    }
  },
  {
    tableName: 'usuario',
    sequelize
  })
}

export const associate = (sequelize: any) => {
  UsuarioModel.belongsToMany(EquipeModel,
    {
      through: UsuarioEquipeModel,
      foreignKey: 'idUser',
      as: 'equipe'
    })
  UsuarioModel.hasMany(IdeiaModel,
    {
      foreignKey: 'id_usuario',
      as: 'usuario'
    })
}
