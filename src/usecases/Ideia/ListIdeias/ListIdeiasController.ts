/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { TypedErrors } from '../../../main/errors-type/TypedErrors'
import { Controller } from '../../../main/protocols/controller'
import { ListIdeiasUseCase } from './ListIdeiasUseCase'

export class ListIdeiasController implements Controller {
  constructor (private listIdeiasUseCase: ListIdeiasUseCase) {}

  async handle (req: Request, res: Response): Promise<Response> {
    try {
      const idUser = req.idUser
      const idEquipe = Number(req.params.idEquipe)
      if (!idEquipe) return res.status(400).json({ message: 'Invalid Param ID' })

      const ideias = await this.listIdeiasUseCase.execute({ idEquipe, idUser })

      return res.status(200).json(ideias)
    } catch (error) {
      if (error instanceof TypedErrors) return res.status(400).json({ message: error.message })
      return res.status(500).json(error)
    }
  }
}
