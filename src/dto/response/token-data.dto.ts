export class TokenDataDto {
    constructor(
        public cardNumber: number,
        public expirationMonth: string,
        public expirationYear: string,
        public email: string,
    ) {}
}
