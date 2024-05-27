import { BadRequestError } from '../errors/bad-request.error';

export const validateCardNumber = (card_number: number): void => {
  const luhnCheck = (num: number): boolean => {
    const arr = (num + '').split('').reverse().map(x => parseInt(x));
    const lastDigit = arr.shift();

    if (!lastDigit) return false;

    const sum = arr.reduce((acc, val, idx) => idx % 2 !== 0 ? acc + val : acc + ((val * 2) % 9 || 9), 0);

    return (sum + lastDigit) % 10 === 0;
  };

  if (!luhnCheck(card_number)) {
    throw new BadRequestError('Invalid card number');
  }
};
