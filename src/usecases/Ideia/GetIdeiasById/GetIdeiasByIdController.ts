/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { TypedErrors } from '../../../main/errors-type/TypedErrors'
import { Controller } from '../../../main/protocols/controller'
import { GetIdeiaByIdUseCase } from './GetIdeiasByIdUseCase'

export class GetIdeiasByIdController implements Controller {
  constructor (private getIdeiasByIdUseCase: GetIdeiaByIdUseCase) {}

  async handle (req: Request, res: Response): Promise<Response> {
    try {
      const idUser = req.idUser
      const idEquipe = Number(req.params.idEquipe)
      const idIdeia = Number(req.params.idIdeia)
      if (!idEquipe) return res.status(400).json({ message: 'Invalid Param ID' })

      const ideia = await this.getIdeiasByIdUseCase.execute({ idEquipe, idUser, idIdeia })

      return res.status(200).json(ideia)
    } catch (error) {
      if (error instanceof TypedErrors) return res.status(400).json({ message: error.message })
      return res.status(500).json(error)
    }
  }
}
