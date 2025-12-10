const models = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// VIEW: Payment Page
const tenantPayment_view = (req, res) => {
    const tenant2 = req.tenant2.toJSON(); // Convert Sequelize instance to plain object
    res.render("tenant/tenantPayment", { tenant2 });
};

// VIEW: Message Page
const tenantMessage_view = (req, res) => {
    const tenant2 = req.tenant2.toJSON();
    res.render("tenant/tenantMessage", { tenant2 });
};
const history_view = (req, res) => {
    const tenant2 = req.tenant2.toJSON();
    res.render("tenant/history", { tenant2 });
};


// VIEW: Login Page
const loginTenant_view = (req, res) => {
    const message = req.query.message || null;
    res.render("tenant/loginTenant", { message });
};

// LOGIN: Tenant
const login_tenant = async (req, res) => {
    const { Username, Password } = req.body;

    try {
        const tenant2 = await models.tenant.findOne({ where: { Username } });

        if (!tenant2) {
            return res.render("tenant/loginTenant", { message: "User not found" });
        }

        const passwordMatch = bcrypt.compareSync(Password, tenant2.Password);
        if (!passwordMatch) {
            return res.render("tenant/loginTenant", { message: "Incorrect password" });
        }

        // Generate JWT
        const token = jwt.sign(
            { id: tenant2.Users_ID, Username: tenant2.Username },
            "secretKey",
            { expiresIn: "1h" }
        );

        res.cookie("token", token); // Set cookie
        res.redirect("/tenant/tenantPayment");
    } catch (error) {
        console.error("Login error:", error);
        res.render("tenant/loginTenant", { message: "Server error" });
    }
};

module.exports = {
    tenantMessage_view,
    tenantPayment_view,
    loginTenant_view,
    login_tenant,
    history_view

};
