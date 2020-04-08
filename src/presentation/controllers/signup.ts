import { HttpRequest, HttpResponse } from '../protocols/http'

export class SignUpController {
  handle (httpResquet: HttpRequest): HttpResponse {
    if (!httpResquet.body.name) {
      return {
        statusCode: 400,
        body: new Error('Missing param: name')
      }
    }
    if (!httpResquet.body.email) {
      return {
        statusCode: 400,
        body: new Error('Missing param: email')
      }
    }
  }
}
