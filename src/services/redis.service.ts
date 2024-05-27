import { RedisClientType, createClient } from "redis";

export class RedisService {
    private client!: RedisClientType;

    constructor() {
        this.initService();
    }

    private async initService(): Promise<void> {
        console.log('init redis connection');
        const { REDIS_PROTOCOL: protocol, REDIS_HOST: hostname, REDIS_PORT: port } = process.env;
        const redisUrl = `${protocol}://${hostname}:${port}`;

        this.client = createClient({ url: redisUrl });

        await this.client.connect();
        console.log('redis connection done');
    }

    public async put(key: string, value: string, ttl?: number): Promise<string | null> {
        console.log(`Updating redis client key ${key}`);

        if (ttl) {
            return this.client.set(key, value, { EX: ttl });
        }
        return this.client.set(key, value);
    }

    public get(key: string): Promise<string | null> {
        console.log(`Getting key ${key}`);
        return this.client.get(key);
    }
}
