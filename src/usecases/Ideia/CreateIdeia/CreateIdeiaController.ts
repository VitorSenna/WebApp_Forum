/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { TypedErrors } from '../../../main/errors-type/TypedErrors'
import { Controller } from '../../../main/protocols/controller'
import { CreateIdeiaUseCase } from './CreateIdeiaUseCase'

export class CreateIdeiaController implements Controller {
  constructor (private createIdeiaUseCase: CreateIdeiaUseCase) {}

  async handle (req: Request, res: Response): Promise<Response> {
    try {
      const idUser = req.idUser
      const idEquipe = Number(req.params.idEquipe)
      if (!idEquipe) return res.status(400).json({ message: 'Invalid Param ID' })

      await this.createIdeiaUseCase.execute({ ...req.body, idUser, idEquipe })

      return res.status(201).json({ message: 'ok' })
    } catch (error) {
      if (error instanceof TypedErrors) return res.status(400).json(error)
      return res.status(500).json(error)
    }
  }
}
