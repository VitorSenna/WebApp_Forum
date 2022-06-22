/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { TypedErrors } from '../../../main/errors-type/TypedErrors'
import { Controller } from '../../../main/protocols/controller'
import { GetEquipesByIdUseCase } from './GetEquipesByIdUseCase'

export class GetEquipesByIdController implements Controller {
  constructor (private getEquipeByIdUseCase: GetEquipesByIdUseCase) {}

  async handle (req: Request, res: Response): Promise<Response> {
    try {
      const idEquipe = Number(req.params.id)
      if (!idEquipe) return res.status(400).json({ message: `Invalid Param: ${idEquipe}` })

      const idUser = req.idUser

      const equipe = await this.getEquipeByIdUseCase.execute({ idEquipe, idUser })

      return res.status(200).json({ equipe })
    } catch (error) {
      console.log(error)
      if (error instanceof TypedErrors) return res.status(400).json({ message: error.message })
      return res.status(500).json(error)
    }
  }
}
