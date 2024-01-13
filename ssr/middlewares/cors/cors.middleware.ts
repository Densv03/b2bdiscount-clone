const whitelist = ['http://localhost:4000', 'http://localhost:4200', 'https://dev.globy.com', 'https://globy.com', 'https://api-dev.globy.com', 'https://api.globy.com']

export const corsOptions = {
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'device-remember-token', 'Access-Control-Allow-Origin', 'Origin', 'Accept']
}
