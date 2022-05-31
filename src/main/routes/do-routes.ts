import { Router } from 'express'
import { sequelize } from '../../infra/sequelize'
import { EquipeModel } from '../../infra/sequelize/models/Equipe-model'

export = (router: Router) => {
  router.get('/do', async (req, res) => {
    await sequelize.sync({ force: true })
    try {
      await EquipeModel.sync({ force: true })
      return res.json({ message: 'Async true' })
    } catch (error) {
      console.log(error)
      return res.status(500)
    }
  })
}
