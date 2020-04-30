import { Express } from 'express'
import { bodyParse } from '../middlewares/body-parse'

export default (app: Express): void => {
  app.use(bodyParse)
}
