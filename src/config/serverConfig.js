const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT || 3000,
    GMAIL: process.env.GMAIL,
    GMAIL_PASS: process.env.GMAIL_PASS
}

