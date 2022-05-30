import { Router } from 'express'
import { sequelize } from '../../infra/sequelize'
import { UsuarioModel } from '../../infra/sequelize/models/Usuario-model'

export = (router: Router) => {
  router.get('/do', async (req, res) => {
    await sequelize.sync({ force: true })
    try {
      await UsuarioModel.sync({ force: true })
      return res.json({ message: 'Async true' })
    } catch (error) {
      console.log(error)
      return res.status(500)
    }
  })
}
