/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { TypedErrors } from '../../../main/errors-type/TypedErrors'
import { Controller } from '../../../main/protocols/controller'
import { DeleteUsuarioUseCase } from './DeleteUsuarioUseCase'

export class DeleteUsuarioController implements Controller {
  constructor (private deleteUsuarioUseCase: DeleteUsuarioUseCase) {}

  async handle (req: Request, res: Response): Promise<Response> {
    try {
      const id = Number(req.params.id)
      if (!id) res.status(400).json({ message: `invalid Param: ${id}` })

      await this.deleteUsuarioUseCase.execute(id)

      return res.status(200).json({ message: 'ok' })
    } catch (error) {
      if (error instanceof TypedErrors) return res.status(400).json({ message: error.message })
      return res.status(500).json({ message: 'server error' })
    }
  }
}
