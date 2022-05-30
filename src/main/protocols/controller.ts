import { Request, Response } from 'express'

export interface Controller{
    requiredParams?: string[]

    handle: (req: Request, res: Response) => Promise<Response>
}
