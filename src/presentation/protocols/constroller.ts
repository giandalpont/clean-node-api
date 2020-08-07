import { httpRequest, httpResponse } from './http'

export interface Controller {
  handle: (httpResquest: httpRequest) => httpResponse
}
