import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/httpHelper'

export class SignUpController {
  handle (httpResquet: HttpRequest): HttpResponse {
    if (!httpResquet.body.name) {
      return badRequest(new MissingParamError('name'))
    }
    if (!httpResquet.body.email) {
      return badRequest(new MissingParamError('email'))
    }
  }
}
