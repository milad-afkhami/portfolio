enum HTTPStatusCodes {
  Ok = 200,
  Created = 201,
  Accepted = 202,
  ResolvedNoContent = 204,
  MultipleChoices = 300,
  MovedPermanently = 301,
  Found = 303,
  TemporaryRedirect = 307,
  PermanentRedirect = 308,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  RequestTimeout = 408,
  TooManyRequests = 429,
  InternalServerError = 500,
  BadGateway = 502,
  ServiceUnavailable = 503,
  GatewayTimeout = 504,
}

export default HTTPStatusCodes;
