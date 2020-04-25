import { HttpRequest, HttpResponse } from './http'

export interface Controller {
  handle (httpResquet: HttpRequest): Promise<HttpResponse>
}
