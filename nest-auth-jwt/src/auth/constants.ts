export const jwtConstants = {
    secret: 'secretKey',
    expiresIn: '60s'
};

// Fehler -> to .env ConfigModule -> configService.get<string>('JWT_SECRET')