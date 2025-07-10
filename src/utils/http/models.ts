import { HttpStatusCode } from "@/constants/http";

type IStatus = {
  readonly code: HttpStatusCode;
};

type IRedirect = IStatus & {
  readonly cause?: unknown;
};

type IError = IStatus & {
  readonly message: string;
  readonly cause?: unknown;
};

export abstract class BaseStatus implements IStatus {
  public readonly code: IStatus["code"];

  public constructor(code: IStatus["code"]) {
    this.code = code;
  }
}

export abstract class BaseRedirect extends BaseStatus implements IRedirect {
  public readonly cause?: IRedirect["cause"];

  public constructor(code: IRedirect["code"], cause: IRedirect["cause"]) {
    super(code);
    this.cause = cause;
  }
}

export class TemporaryRedirect extends BaseRedirect {
  public constructor(cause: IRedirect["cause"]) {
    super(HttpStatusCode.TemporaryRedirect, cause);
  }
}

export class PermanentRedirect extends BaseRedirect {
  public constructor(cause: IRedirect["cause"]) {
    super(HttpStatusCode.PermanentRedirect, cause);
  }
}

export abstract class BaseError extends BaseStatus implements IError {
  public readonly message: IError["message"];

  public readonly cause?: IError["cause"];

  public constructor(message: IError["message"], code: IError["code"], cause: IError["cause"]) {
    super(code);
    this.message = message;
    this.cause = cause;
  }

  public log(): void {
    console.error(this);
  }

  public reportToSentry(): void {
    // Sentry.captureException(this);
  }
}

export class NotFoundError extends BaseError {
  public constructor(message?: IError["message"], cause?: IError["cause"]) {
    super(message ?? "Not Found", HttpStatusCode.NotFound, cause);
  }
}

export class BadRequestError extends BaseError {
  public constructor(message?: IError["message"], cause?: IError["cause"]) {
    super(message ?? "Bad Request", HttpStatusCode.BadRequest, cause);
  }
}

export class UnauthorizedError extends BaseError {
  public constructor(message?: IError["message"], cause?: IError["cause"]) {
    super(message ?? "Unauthorized", HttpStatusCode.Unauthorized, cause);
  }
}

export class ForbiddenError extends BaseError {
  public constructor(message?: IError["message"], cause?: IError["cause"]) {
    super(message ?? "Forbidden", HttpStatusCode.Forbidden, cause);
  }
}

export class InternalServerError extends BaseError {
  public constructor(message?: IError["message"], cause?: IError["cause"]) {
    super(message ?? "Internal Server Error", HttpStatusCode.InternalServerError, cause);
  }
}
