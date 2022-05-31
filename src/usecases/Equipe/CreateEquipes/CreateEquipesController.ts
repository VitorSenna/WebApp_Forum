/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { Controller } from '../../../main/protocols/controller'
import { CreateEquipesUseCase } from './CreateEquipesUseCase'

export class CreateEquipesController implements Controller {
  constructor (private createEquipesUseCase: CreateEquipesUseCase) {}

  async handle (req: Request, res: Response): Promise<Response> {
    try {
      await this.createEquipesUseCase.execute({ ...req.body })

      return res.status(201).json({ message: 'ok' })
    } catch (error) {
      return res.status(500).json({ message: 'server error' })
    }
  }
}
