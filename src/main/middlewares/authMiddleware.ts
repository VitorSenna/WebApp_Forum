import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

type TokenPayloadJWT = {
  id: number
  iat: number
  exp: number
}

export default function AuthMiddleware (req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers
  if (!authorization) {
    return res.status(401).json({ message: 'not authorized' })
  }

  const token = authorization.replace('Bearer', '').trim()

  try {
    const data = jwt.verify(token, 'token')

    const { id } = data as TokenPayloadJWT
    req.idUser = id
    return next()
  } catch (error) {
    return res.status(401).json({ message: 'not authorized' })
  }
}
