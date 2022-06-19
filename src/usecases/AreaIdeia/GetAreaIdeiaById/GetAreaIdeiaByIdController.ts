/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { TypedErrors } from '../../../main/errors-type/TypedErrors'
import { Controller } from '../../../main/protocols/controller'
import { GetAreaIdeiaByIdUseCase } from './GetAreaIdeiaByIdUseCase'

export class GetAreaIdeiaByIdController implements Controller {
  constructor (private getAreaIdeiaByIdUseCase: GetAreaIdeiaByIdUseCase) {}

  async handle (req: Request, res: Response): Promise<Response> {
    try {
      const id = Number(req.params.id)
      if (!id) return res.status(400).json({ message: 'Invalid Param ID' })
      const idUser = req.idUser

      const areaIdeia = await this.getAreaIdeiaByIdUseCase.execute({ id, idUser })

      return res.status(200).json(areaIdeia)
    } catch (error) {
      if (error instanceof TypedErrors) return res.status(400).json({ message: error.message })
      return res.status(500).json(error)
    }
  }
}
