export abstract class BaseError extends Error {
    abstract statusCode: number;
}
