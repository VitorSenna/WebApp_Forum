import { Router } from 'express'
import { sequelize } from '../../infra/sequelize'
import { AreaIdeiaModel } from '../../infra/sequelize/models/AreaIdeia-model'
import { EquipeModel } from '../../infra/sequelize/models/Equipe-model'
import { IdeiaModel } from '../../infra/sequelize/models/Ideia-model'
import { UsuarioModel } from '../../infra/sequelize/models/Usuario-model'

export = (router: Router) => {
  router.get('/do', async (req, res) => {
    await sequelize.sync({ force: true })
    try {
      await UsuarioModel.sync({ force: true })
      await EquipeModel.sync({ force: true })
      return res.json({ message: 'Async true' })
    } catch (error) {
      console.log(error)
      return res.status(500)
    }
  })
}
