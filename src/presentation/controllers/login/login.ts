import { Controller, HttpRequest, HttpResponse } from '../../protocols'
import { badRequest } from '../../helpers/httpHelper'
import { MissingParamError } from '../../errors'

export class LoginController implements Controller {
  async handle (httpResquet: HttpRequest): Promise<HttpResponse> {
    if (!httpResquet.body.email) {
      return await new Promise(resolve => resolve(badRequest(new MissingParamError('email'))))
    }

    if (!httpResquet.body.password) {
      return await new Promise(resolve => resolve(badRequest(new MissingParamError('password'))))
    }
  }
}
