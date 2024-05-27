import 'dotenv/config';
import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import { TokenService } from '../services/token.service';
import { TOKEN_SERVICE_KEY, container } from '../dependency-injection';
import { Handler } from '../decorators/handler.decorator';

const tokenService = container.get<TokenService>(TOKEN_SERVICE_KEY);

export const handler = Handler(async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
    console.log('Starting handler')

    const { token } = event.pathParameters as { token: string };

    const tokenData = await tokenService.getTokenData(token);

    return {
        statusCode: 200,
        body: JSON.stringify(tokenData),
    };
});
