/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { TypedErrors } from '../../../main/errors-type/TypedErrors'
import { Controller } from '../../../main/protocols/controller'
import { DeleteEquipesUseCase } from './DeleteEquipesUseCase'

export class DeleteEquipesController implements Controller {
  constructor (private deleteEquipesUseCase: DeleteEquipesUseCase) {}

  async handle (req: Request, res: Response): Promise<Response> {
    try {
      const id = Number(req.params.id)
      if (!id) return res.status(400).json({ message: 'Invalid Param' })

      await this.deleteEquipesUseCase.execute(id)

      return res.status(200).json({})
    } catch (error) {
      if (error instanceof TypedErrors) return res.status(400).json({ message: error.message })
      return res.status(500).json(error)
    }
  }
}
