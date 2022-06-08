/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { Controller } from '../../../main/protocols/controller'
import { ListEquipesUseCase } from './ListEquipesUseCase'

export class ListEquipesController implements Controller {
  constructor (private listEquipesUseCase: ListEquipesUseCase) {}

  async handle (req: Request, res: Response): Promise<Response> {
    try {
      const equipes = await this.listEquipesUseCase.execute()

      return res.status(200).json({ equipes })
    } catch (error) {
      return res.status(500).json({ message: 'server error' })
    }
  }
}
