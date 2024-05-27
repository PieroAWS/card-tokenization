import { handler } from '../../src/handlers/get-token-data';
import { handler as handlerCreateToken } from '../../src/handlers/create-token';
import { makeEventMock } from '../__mocks__/utils/make-event-mock.util';

describe('Get Token Data handler', () => {
    it('Should return 200 and token data without cvv', async () => {
        const cardNumber = '4111111111111111';

        const eventCreateToken = makeEventMock({
            email: 'gian.corzo@gmail.com',
            card_number: cardNumber,
            cvv: '123',
            expiration_year: '2025',
            expiration_month: '09',
        });

        const responseCreateToken = await handlerCreateToken(eventCreateToken);
        const { token } = JSON.parse(responseCreateToken.body);

        const event = makeEventMock(undefined, 'GET', `/token/${token}`, { token });

        const response = await handler(event);
        const tokenData = JSON.parse(response.body);
        
        expect(response.statusCode).toBe(200);
        expect(tokenData.cardNumber).toBe(cardNumber);
        expect(tokenData.cvv).toBeUndefined();
    });

    it('Should return 404 and a Token not found or expired error message', async () => {
        const token = 'invalid token'
        const event = makeEventMock(undefined, 'GET', `/token/${token}`, { token });

        const response = await handler(event);
        const { error } = JSON.parse(response.body);
        
        expect(response.statusCode).toBe(404);
        expect(error).toBe('Token not found or expired');
    });
});
