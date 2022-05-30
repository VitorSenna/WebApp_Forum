import { Request, Response } from 'express'
import { TypedErrors } from '../../../main/errors-type/TypedErrors'
import { Controller } from '../../../main/protocols/controller'
import { ListUsuariosUseCase } from './ListUsuariosUseCase'

export class ListUsuariosController implements Controller {
  // eslint-disable-next-line no-useless-constructor
  constructor (private listUsuariosUseCase: ListUsuariosUseCase) {}

  async handle (req: Request, res: Response): Promise<Response> {
    try {
      const usuarios = await this.listUsuariosUseCase.execute()

      return res.status(200).json(usuarios)
    } catch (error) {
      console.log(error)
      if (error instanceof TypedErrors) return res.status(400).json(error)
      return res.status(500).json(error)
    }
  }
}
