/* eslint-disable no-useless-constructor */
import { Response } from 'express'
import { Request } from 'express-serve-static-core'
import { TypedErrors } from '../../../main/errors-type/TypedErrors'
import { Controller } from '../../../main/protocols/controller'
import { DeleteAreaIdeiaUseCase } from './DeleteAreaIdeiaUseCase'

export class DeleteAreaIdeiaController implements Controller {
  constructor (private deleteAreaIdeiaUseCase: DeleteAreaIdeiaUseCase) {}

  async handle (req: Request, res: Response): Promise<Response> {
    try {
      const id = Number(req.params.id)
      if (!id) return res.status(400).json({ message: 'Invalid Param ID' })

      const idUser = req.idUser

      const areaIdeia = await this.deleteAreaIdeiaUseCase.execute({ id, idUser })

      return res.status(200).json(areaIdeia)
    } catch (error) {
      if (error instanceof TypedErrors) return res.status(400).json({ message: error.message })
      return res.status(500).json(error)
    }
  }
}
