import { Router } from 'express'
import fg from 'fast-glob'

export = async (app: any) => {
  const router = Router()
  app.use(router)
  fg.sync('**/src/main/routes/**routes.ts').forEach(file =>
    import(`../../../${file}`).then(v =>
      v.default(router))
  )
}
