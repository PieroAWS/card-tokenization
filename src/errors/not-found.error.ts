import { BaseError } from "./base.error";

export class NotFoundError extends BaseError {
    statusCode = 404;
}
