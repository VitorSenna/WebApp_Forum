/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { TypedErrors } from '../../main/errors-type/TypedErrors'
import { Controller } from '../../main/protocols/controller'
import { AddUserToEquipeUseCase } from './AddUserToEquipeUseCase'

export class AddUserToEquipeController implements Controller {
  constructor (private addUserToEquipeUseCase: AddUserToEquipeUseCase) {}

  async handle (req: Request, res: Response): Promise<Response> {
    try {
      const idEquipe = Number(req.params.idEquipe)

      await this.addUserToEquipeUseCase.execute({ ...req.body, idEquipe, idUser: req.idUser })

      return res.status(200).json({ message: 'ok' })
    } catch (error) {
      if (error instanceof TypedErrors) return res.status(400).json({ message: error.message })
      return res.status(500).json(error)
    }
  }
}
