const jwt = require("jsonwebtoken");
const models = require("../models");

const authenticateUser = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.redirect("/tenant/loginTenant?message=SessionExpired");
    }

    try {
        const decoded = jwt.verify(token, "secretKey");

        // Find tenant by primary key
        const tenant2 = await models.tenant.findByPk(decoded.id);
        if (!tenant2) {
            return res.redirect("/tenant/loginTenant?message=UserNotFound");
        }

        req.tenant2 = tenant2; // Attach tenant data to request
        next();
    } catch (error) {
        return res.redirect("/tenant/loginTenant?message=InvalidToken");
    }
};

module.exports = { authenticateUser };
