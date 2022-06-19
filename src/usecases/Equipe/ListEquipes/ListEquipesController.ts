/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { Controller } from '../../../main/protocols/controller'
import { ListEquipesUseCase } from './ListEquipesUseCase'

export class ListEquipesController implements Controller {
  constructor (private listEquipesUseCase: ListEquipesUseCase) {}

  async handle (req: Request, res: Response): Promise<Response> {
    try {
      const equipes = await this.listEquipesUseCase.execute(req.idUser)

      return res.status(200).json(equipes)
    } catch (error) {
      console.log(error)
      return res.status(500).json(error)
    }
  }
}
