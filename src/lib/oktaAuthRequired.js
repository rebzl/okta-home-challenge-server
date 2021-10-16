const { oktaJwtVerifier } = require("./oktaJwtVerifier"); // Get the enviroment var

exports.oktaAuthRequired = (req, res, next) => {
    const authHeader = req.headers.authorization || "";
    const match = authHeader.match(/Bearer (.+)/);
    console.log("qwe");
    if (!match) {
        res.status(401);
        return next("Unauthorized");
    }

    const accessToken = match[1]; // Bearer
    const audience = "api://default";
    return oktaJwtVerifier
        .verifyAccessToken(accessToken, audience)
        .then((jwt) => {
            console.log("then");
            req.jwt = jwt;
            next();
        })
        .catch((err) => {
            console.log("catch");
            res.status(401).send(err.message);
        });
};
