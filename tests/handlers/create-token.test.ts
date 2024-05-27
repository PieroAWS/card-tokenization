import { handler } from '../../src/handlers/create-token';
import { makeEventMock } from '../__mocks__/utils/make-event-mock.util';

describe('Create Token handler', () => {
    it('Should return 200 and a string token', async () => {
        const event = makeEventMock({
            email: 'gian.corzo@gmail.com',
            card_number: '4111111111111111',
            cvv: '123',
            expiration_year: '2025',
            expiration_month: '09',
        });

        const response = await handler(event);
        const { token } = JSON.parse(response.body);
        
        expect(response.statusCode).toBe(200);
        expect(typeof token).toBe('string');
    });

    it('Should return 400 and a Invalid email error message', async () => {
        const event = makeEventMock({
            email: 'gian.corzogmail.com',
            card_number: '4111111111111111',
            cvv: '123',
            expiration_year: '2025',
            expiration_month: '09',
        });

        const response = await handler(event);
        const { error } = JSON.parse(response.body);
        
        expect(response.statusCode).toBe(400);
        expect(error).toBe('Invalid email');
    });

    it('Should return 400 and a Invalid card number error message', async () => {
        const event = makeEventMock({
            email: 'gian.corzo@gmail.com',
            card_number: '41111111111111',
            cvv: '123',
            expiration_year: '2025',
            expiration_month: '09',
        });

        const response = await handler(event);
        const { error } = JSON.parse(response.body);
        
        expect(response.statusCode).toBe(400);
        expect(error).toBe('Invalid card number');
    });
});
