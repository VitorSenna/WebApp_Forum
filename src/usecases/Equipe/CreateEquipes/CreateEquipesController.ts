/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { TypedErrors } from '../../../main/errors-type/TypedErrors'
import { Controller } from '../../../main/protocols/controller'
import { CreateEquipesUseCase } from './CreateEquipesUseCase'

export class CreateEquipesController implements Controller {
  constructor (private createEquipesUseCase: CreateEquipesUseCase) {}

  async handle (req: Request, res: Response): Promise<Response> {
    try {
      await this.createEquipesUseCase.execute({ ...req.body, idUser: req.idUser })

      return res.status(201).json({ message: 'ok' })
    } catch (error) {
      if (error instanceof TypedErrors) return res.status(400).json({ message: error.message })
      return res.status(500).json(error)
    }
  }
}
