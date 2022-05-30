/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { TypedErrors } from '../../../main/errors-type/TypedErrors'
import { Controller } from '../../../main/protocols/controller'
import { CreateUsuarioUseCase } from './CreateUsuarioUseCase'

export class CreateUsuarioController implements Controller {
  constructor (private createUsuarioUseCase: CreateUsuarioUseCase) { }

  async handle (req: Request, res: Response): Promise<Response> {
    try {
      await this.createUsuarioUseCase.execute(req.body)

      return res.status(201).json({})
    } catch (error) {
      console.log(error)
      if (error instanceof TypedErrors) return res.status(400).json(error)
      return res.status(500).json(error)
    }
  }
}
