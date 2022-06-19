/* eslint-disable no-use-before-define */
import { Association, DataTypes, Model, Optional, Sequelize } from 'sequelize'
import { IdeiaModel } from './Ideia-model'
import { UsuarioEquipeModel } from './UsuarioEquipe-model'

interface AreaIdeiaAttributes {
    id?: number
    descricao: string
}

export interface AreaIdeiaCreateAttributes extends Optional<AreaIdeiaAttributes, 'id'> { }

export class AreaIdeiaModel extends Model<AreaIdeiaAttributes, AreaIdeiaCreateAttributes> implements AreaIdeiaAttributes {
  public id?: number
  public descricao: string

  declare static associations: {
    equipe: Association<AreaIdeiaModel, UsuarioEquipeModel>
  }
}

export const init = (sequelize: Sequelize) => {
  AreaIdeiaModel.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'id_area_ideia'
    },
    descricao: {
      type: DataTypes.STRING(100),
      field: 'descricao'
    }
  },
  {
    tableName: 'area_ideia',
    sequelize
  })
}

export const associate = (sequelize: any) => {
  AreaIdeiaModel.hasMany(IdeiaModel, {
    foreignKey: 'id_area_ideia'
  })
}
