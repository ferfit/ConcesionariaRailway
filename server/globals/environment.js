"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIG = void 0;
exports.CONFIG = {
    PORT: process.env.PORT || 3000,
    //DATABASE:process.env.BD || 'mongodb+srv://fernandoPereyra:bo0GR2KygL6m95w4@tiendamean.q4mqjsd.mongodb.net/?retryWrites=true&w=majority',
    //fernando fernandopereyra
    DATABASE: process.env.BD || 'mongodb+srv://fernando:fernandopereyra@prd.pbu4mir.mongodb.net/concesionaria',
    SECRET: 'clPfckhuzYT1GwwabKnHtNqOLwMpFzzUxE3iHsSi5hJB2zn1uXsQfSt37ytkl8l78l7DRCDjBqV1M1OKKRnxdBJ1ba0rmdgeByuqg5cl1AdYOq3rziDjYX7t21buACuuGmRKQTgffFAVMOIGF2zYoIff3m4riIllO4Ev7qtQO65dxwUzDHAg9RXQmWpQ3O4UouIJ45cMAitmki6qtxUiS1mOKTv4yPNCU6JDnRi0eAGonl4CR',
    ACCESS_TOKEN_SECRET: 'ajlkqowie34t67ekme567yk5ek4rer45h3w4gh3w4gh3yhgeoi',
    REFRESH_TOKEN_SECRET: 'qo3h34hpwieiy34e67ke657ke567krh3w4hgy3w4gy34wyhgoque1',
    BCRYPT_SALT: 10,
    CLIENTE_URL: process.env.DOMINIO || 'localhost:4200',
    EMAIL_HOST: 'smtp.office365.com',
    EMAIL_USERNAME: 'notificacion@inxap.com',
    EMAIL_PORT: 587,
    EMAIL_PASSWORD: '1nx4p2o2i..',
    FROM_EMAIL: 'notificacion@inxap.com'
};
// mJJYvL4zC3LYTluw
//# sourceMappingURL=environment.js.map