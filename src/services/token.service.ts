import crypto from 'crypto';
import { isEmail } from 'class-validator';
import { validateCardNumber } from '../utils/validate-card-number';
import { RedisService } from './redis.service';
import { BadRequestError } from '../errors/bad-request.error';
import { NotFoundError } from '../errors/not-found.error';
import { TokenDataDto } from '../dto/response/token-data.dto';

export class TokenService {
    constructor(private readonly redisService: RedisService) { }

    async createToken(card: { card_number: number, cvv: number, expiration_month: string, expiration_year: string, email: string }): Promise<string> {
        console.log('Starting Service');

        const { card_number, email } = card;

        if (!isEmail(email)) {
            throw new BadRequestError('Invalid email');
        }

        validateCardNumber(card_number);

        const token = this.generateToken();

        await this.redisService.put(token, JSON.stringify(card), 15 * 60);

        return token;
    }

    async getTokenData(token: string) {
        const tokenData = await this.redisService.get(token);

        if (!tokenData) {
            throw new NotFoundError('Token not found or expired');
        }

        const { card_number, expiration_month, expiration_year, email } = JSON.parse(tokenData);

        return new TokenDataDto(
            card_number,
            expiration_month,
            expiration_year,
            email,
        );
    }

    private generateToken(): string {
        return crypto.randomBytes(8).toString('hex');
    }
}
