require('dotenv').config();

CONFIG = {};
CONFIG.environment = process.env.APP;
CONFIG.db_dialect = process.env.DB_DIALECT;
CONFIG.db_host = process.env.DB_HOST;
CONFIG.db_port = process.env.DB_PORT;
CONFIG.db_name = process.env.DB_NAME;
CONFIG.db_user = process.env.DB_USER;
CONFIG.db_password = process.env.DB_PASSWORD;
// CONFIG.secretKey = "zen";
// CONFIG.jwt_encryption = "hello";
// CONFIG.jwt_expiration = 25000000;
// CONFIG.user = "pradeepery141@gmail.com";
// CONFIG.pass = "awepoeyemfikxogr";
