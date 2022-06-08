/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { TypedErrors } from '../../../main/errors-type/TypedErrors'
import { Controller } from '../../../main/protocols/controller'
import { GetEquipesByIdUseCase } from './GetEquipesByIdUseCase'

export class GetEquipesByIdController implements Controller {
  constructor (private getEquipeByIdUseCase: GetEquipesByIdUseCase) {}

  async handle (req: Request, res: Response): Promise<Response> {
    try {
      const id = Number(req.params.id)
      if (!id) return res.status(400).json({ message: `Invalid Param: ${id}` })

      const equipe = await this.getEquipeByIdUseCase.execute(id)

      return res.status(200).json({ equipe })
    } catch (error) {
      if (error instanceof TypedErrors) return res.status(400).json(error)
      return res.status(500).json({ message: 'server error' })
    }
  }
}
