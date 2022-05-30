import { Router } from 'express'
import { createUsuarioController } from '../../usecases/Usuario/CreateUsuarios'
import { getUsuariosByIdController } from '../../usecases/Usuario/GetUsuariosById'
import { listUsuariosController } from '../../usecases/Usuario/ListUsuarios'

export = (router: Router) => {
  router.post('/users', (req, res) => createUsuarioController.handle(req, res))
  router.get('/users', (req, res) => listUsuariosController.handle(req, res))
  router.get('/users/:id', (req, res) => getUsuariosByIdController.handle(req, res))
}

// const routerUser = Router()

// routerUser.post('/users', (req, res) => createUsuarioController.handle(req, res))

// export default routerUser
