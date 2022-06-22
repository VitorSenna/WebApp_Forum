/* eslint-disable no-useless-constructor */
import { Response } from 'express'
import { Request } from 'express-serve-static-core'
import { TypedErrors } from '../../../main/errors-type/TypedErrors'
import { Controller } from '../../../main/protocols/controller'
import { UpdateEquipesUseCase } from './UpdateEquipesUseCase'

export class UpdateEquipesController implements Controller {
  constructor (private updateEquipesUseCase: UpdateEquipesUseCase) {}

  async handle (req: Request, res: Response): Promise<Response> {
    try {
      const id = Number(req.params.id)
      if (!id) return res.status(400).json({ message: 'Invalid Param' })

      await this.updateEquipesUseCase.execute({ ...req.body, id, idUser: req.idUser })

      return res.status(200).json({ message: 'ok' })
    } catch (error) {
      if (error instanceof TypedErrors) return res.status(400).json({ message: error.message })
      return res.status(500).json(error)
    }
  }
}
