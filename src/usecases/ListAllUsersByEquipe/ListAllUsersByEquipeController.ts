/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { TypedErrors } from '../../main/errors-type/TypedErrors'
import { Controller } from '../../main/protocols/controller'
import { ListAllUsersByEquipeUseCase } from './ListAllUsersByEquipeUseCase'

export class ListAllUsersByEquipeController implements Controller {
  constructor (private listAllUsersByEquipeUseCase: ListAllUsersByEquipeUseCase) {}

  async handle (req: Request, res: Response): Promise<Response> {
    try {
      const idEquipe = Number(req.params.idEquipe)
      if (!idEquipe) return res.status(400).json({ message: 'Invalid Param ID' })

      const users = await this.listAllUsersByEquipeUseCase.execute({ idEquipe, idUser: req.idUser })

      return res.status(200).json(users)
    } catch (error) {
      if (error instanceof TypedErrors) return res.status(400).json({ message: error.message })
      return res.status(500).json(error)
    }
  }
}
