import 'reflect-metadata';
import { ContainerBuilder } from 'node-dependency-injection'
import { TokenService } from '../services/token.service';
import { RedisService } from '../services/redis.service';

const container = new ContainerBuilder();

export const TOKEN_SERVICE_KEY = Symbol('TOKEN_SERVICE_KEY').toString();
export const REDIS_SERVICE_KEY = Symbol('REDIS_SERVICE_KEY').toString();

container.register(REDIS_SERVICE_KEY, RedisService);

const redisService = container.get(REDIS_SERVICE_KEY);

container
    .register(TOKEN_SERVICE_KEY, TokenService)
    .addArgument(redisService);

export { container };
