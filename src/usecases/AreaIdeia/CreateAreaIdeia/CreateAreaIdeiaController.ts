/* eslint-disable no-useless-constructor */

import { Request, Response } from 'express'
import { TypedErrors } from '../../../main/errors-type/TypedErrors'
import { Controller } from '../../../main/protocols/controller'
import { CreateAreaIdeiaUseCase } from './CreateAreaIdeiaUseCase'

export class CreateAreaIdeiaController implements Controller {
  constructor (private createAreaIdeiaUseCase: CreateAreaIdeiaUseCase) {}

  async handle (req: Request, res: Response): Promise<Response> {
    try {
      const idUser = req.idUser

      await this.createAreaIdeiaUseCase.execute({ ...req.body, idUser })

      return res.status(201).json({ message: 'ok' })
    } catch (error) {
      if (error instanceof TypedErrors) return res.status(400).json(error)
      return res.status(500).json(error)
    }
  }
}
