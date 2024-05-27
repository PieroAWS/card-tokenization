import { BaseError } from "./base.error";

export class BadRequestError extends BaseError {
    statusCode = 400;
}
