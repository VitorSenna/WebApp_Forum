import { Sequelize } from 'sequelize'
import env from '../main/config/env'
import fg from 'fast-glob'


export const sequelize = new Sequelize({
  dialect: 'mysql',
  host: env.dbHost,
  username: env.dbUser,
  password: env.dbPassword,
  database: env.dbName,
  define: {
    timestamps: false,
    freezeTableName: true
  },
  logging: false
})

fg.sync('**src/infra/sequelize/models/**model.ts').forEach(file => {
  import(`../../${file}`).then(v => {
    v.init(sequelize)
  })
})

fg.sync('**src/infra/sequelize/models/**model.ts').forEach(file => {
  import(`../../${file}`).then(v => {
    v.associate(sequelize)
  })
})