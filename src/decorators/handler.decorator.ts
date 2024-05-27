import { APIGatewayProxyEvent } from 'aws-lambda';
import { BaseError } from '../errors/base.error';

export function Handler<T extends (event: APIGatewayProxyEvent) => ReturnType<T>>(fn: T): T {
    return (async (event: APIGatewayProxyEvent): Promise<ReturnType<T> | { statusCode: number; body: unknown }> => {
        try {
            return await fn(event);
        } catch (error) {
            if (error instanceof BaseError) {
                return {
                    statusCode: error.statusCode,
                    body: JSON.stringify({ error: error.message }),
                };
            }

            return {
                statusCode: 500,
                body: JSON.stringify({ error: 'Internal Server Error' }),
            };
        }
    }) as T;
}
