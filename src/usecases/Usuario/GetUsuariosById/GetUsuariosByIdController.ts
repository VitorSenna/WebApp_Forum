import { Request, Response } from 'express'
import { TypedErrors } from '../../../main/errors-type/TypedErrors'
import { Controller } from '../../../main/protocols/controller'
import { GetUsuariosByIdUseCase } from './GetUsuariosByIdUseCase'

export class GetUsuariosByIdController implements Controller {
  // eslint-disable-next-line no-useless-constructor
  constructor (private getUsuariosByIdUseCase: GetUsuariosByIdUseCase) {}

  async handle (req: Request, res: Response): Promise<Response> {
    try {
      const id = Number(req.params.id)
      if (!id) return res.status(400).json({ Message: `Invalid Param: ${id}` })

      const usuario = await this.getUsuariosByIdUseCase.execute(id)

      return res.status(200).json(usuario)
    } catch (error) {
      console.log(error)
      if (error instanceof TypedErrors) return res.status(400).json({ message: error.message })
      return res.status(500).json(error)
    }
  }
}
