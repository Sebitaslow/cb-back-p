// Configuración de CORS
const corsConfig = {
    origin: function (origin, callback) {
        // Lista de orígenes permitidos
        const allowedOrigins = [
            'https://cb-front-lol.vercel.app',
            'http://localhost:3000',
            'http://localhost:5173',
            'http://localhost:4173',
            'http://127.0.0.1:5173',
            'http://127.0.0.1:4173'
        ];
        
        // Permitir requests sin origin (como aplicaciones móviles o Postman)
        if (!origin) return callback(null, true);
        
        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            console.log('CORS blocked origin:', origin);
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: [
        'Content-Type', 
        'Authorization', 
        'x-auth-token', 
        'Origin', 
        'Accept',
        'X-Requested-With'
    ],
    credentials: true,
    optionsSuccessStatus: 200,
    preflightContinue: false
};

export default corsConfig;
