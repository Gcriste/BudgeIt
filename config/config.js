module.exports = {
    development: {
        username:process.env.DB_USERNAME,
        password:process.env.DB_PASSWORD,
        database:process.env.DB_DATABASE,
        host:process.env.DB_HOST,
        dialect:'mongodb',
        logging:false
    },
   test: {
        username:process.env.DB_USERNAME,
        password:process.env.DB_PASSWORD,
        database:process.env.DB_DATABASE,
        host:process.env.DB_HOST,
        dialect:'mongodb',
        logging:false
    },
    production: {
        username:process.env.DB_USERNAME,
        password:process.env.DB_PASSWORD,
        database:process.env.DB_DATABASE,
        host:process.env.DB_HOST,
        dialect:'mongodb',
        logging:false
    }
}