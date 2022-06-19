import { Association, DataTypes, Model, Optional, Sequelize } from 'sequelize'
import { AreaIdeiaModel } from './AreaIdeia-model'
import { EquipeModel } from './Equipe-model'
import { UsuarioModel } from './Usuario-model'

/* eslint-disable no-use-before-define */
interface IdeiaAttributes {
    id?: number
    idEquipe?: number
    idUser: number
    idAreaIdeia: number
    titulo: string
    descricao: string
    dataPublicacao: Date
}

export interface IdeiaCreateAttributes extends Optional<IdeiaAttributes, 'id'> { }

export class IdeiaModel extends Model<IdeiaAttributes, IdeiaCreateAttributes> implements IdeiaAttributes {
  public id?: number
  public idEquipe?: number
  public idUser: number
  public idAreaIdeia: number
  public titulo: string
  public descricao: string
  public dataPublicacao: Date

  declare readonly equipe: EquipeModel
  declare readonly areaIdeia: AreaIdeiaModel

  declare static associations: {
    ideia: Association<IdeiaModel, EquipeModel>
  }
}

export const init = (sequelize: Sequelize) => {
  IdeiaModel.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'id_ideia'
    },
    idEquipe: {
      type: DataTypes.INTEGER,
      field: 'id_equipe',
      allowNull: true
    },
    idUser: {
      type: DataTypes.INTEGER,
      field: 'id_usuario',
      allowNull: false
    },
    idAreaIdeia: {
      type: DataTypes.INTEGER,
      field: 'id_area_ideia',
      allowNull: false
    },
    titulo: {
      type: DataTypes.STRING,
      field: 'titulo',
      allowNull: false
    },
    descricao: {
      type: DataTypes.STRING,
      field: 'descricao',
      allowNull: false
    },
    dataPublicacao: {
      type: DataTypes.DATEONLY,
      field: 'data_publicacao'
    }
  },
  {
    tableName: 'ideias',
    sequelize
  })
}

export const associate = (sequelize: any) => {
  IdeiaModel.belongsTo(EquipeModel,
    {
      foreignKey: 'id_equipe',
      as: 'equipe'
    })
  IdeiaModel.belongsTo(UsuarioModel,
    {
      foreignKey: 'id_usuario',
      as: 'usuario'
    })
  IdeiaModel.belongsTo(AreaIdeiaModel,
    {
      foreignKey: 'id_area_ideia',
      as: 'areaIdeia'
    })
}
