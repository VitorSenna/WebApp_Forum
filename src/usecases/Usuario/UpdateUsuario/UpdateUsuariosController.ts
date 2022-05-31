/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { TypedErrors } from '../../../main/errors-type/TypedErrors'
import { Controller } from '../../../main/protocols/controller'
import { UpdateUsuariosUseCase } from './UpdateUsuariosUseCase'

export class UpdateUsuariosController implements Controller {
  constructor (private updateUsuarioUseCase: UpdateUsuariosUseCase) {}

  async handle (req: Request, res: Response): Promise<Response> {
    try {
      const id = Number(req.params.id)
      if (!id) return res.status(400).json({ message: `invalid Param ${id}` })
      await this.updateUsuarioUseCase.execute({ ...req.body, id })

      return res.status(200).json({})
    } catch (error) {
      if (error instanceof TypedErrors) return res.status(400).json({ error })
      return res.status(500).json(error)
    }
  }
}
