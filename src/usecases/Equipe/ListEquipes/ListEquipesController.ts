/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { TypedErrors } from '../../../main/errors-type/TypedErrors'
import { Controller } from '../../../main/protocols/controller'
import { ListEquipesUseCase } from './ListEquipesUseCase'

export class ListEquipesController implements Controller {
  constructor (private listEquipesUseCase: ListEquipesUseCase) {}

  async handle (req: Request, res: Response): Promise<Response> {
    try {
      const equipes = await this.listEquipesUseCase.execute(req.idUser)

      return res.status(200).json(equipes)
    } catch (error) {
      if (error instanceof TypedErrors) return res.status(400).json({ message: error.message })
      return res.status(500).json(error)
    }
  }
}
