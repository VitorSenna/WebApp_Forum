import { Router } from 'express'
import { sequelize } from '../../infra/sequelize'
import { AreaIdeiaModel } from '../../infra/sequelize/models/AreaIdeia-model'
import { IdeiaModel } from '../../infra/sequelize/models/Ideia-model'

export = (router: Router) => {
  router.get('/do', async (req, res) => {
    await sequelize.sync({ force: true })
    try {
      await AreaIdeiaModel.sync({ force: true })
      await IdeiaModel.sync({ force: true })
      return res.json({ message: 'Async true' })
    } catch (error) {
      console.log(error)
      return res.status(500)
    }
  })
}
