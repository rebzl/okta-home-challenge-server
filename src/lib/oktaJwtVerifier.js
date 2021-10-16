// Get the enviroment var
const OktaJwtVerifier = require("@okta/jwt-verifier");
require("dotenv").config();
const OKTA_DOMAIN = process.env.OKTA_DOMAIN;
const AUTH_SERVER_ID = process.env.AUTH_SERVER_ID;
exports.oktaJwtVerifier = new OktaJwtVerifier({
    issuer: `https://${OKTA_DOMAIN}/oauth2/${AUTH_SERVER_ID}`, // required
});
