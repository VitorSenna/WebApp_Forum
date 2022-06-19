/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { TypedErrors } from '../../main/errors-type/TypedErrors'
import { Controller } from '../../main/protocols/controller'
import { AuthUseCase } from './AuthUseCase'

export class AuthController implements Controller {
  constructor (private authUseCase: AuthUseCase) {}

  async handle (req: Request, res: Response): Promise<Response> {
    try {
      const token = await this.authUseCase.execute({ ...req.body })
      return res.status(200).json({ token })
    } catch (error) {
      if (error instanceof TypedErrors) return res.status(401).json(error)
      return res.status(500).json({ message: 'Server Error' })
    }
  }
}
