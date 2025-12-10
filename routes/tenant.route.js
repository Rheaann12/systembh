const express = require("express");
const tenant_Controller = require("../controller/tenant.controller.js");
const { authenticateUser } = require("../middleware/auth");

const router = express.Router();

// Login view & login POST
router.get("/tenant/loginTenant", tenant_Controller.loginTenant_view);
router.post("/tenant/login-tenant", tenant_Controller.login_tenant);

// Protected routes
router.get("/tenant/tenantPayment", authenticateUser, tenant_Controller.tenantPayment_view);
router.get("/tenant/tenantMessage", authenticateUser, tenant_Controller.tenantMessage_view);
router.get("/tenant/history", authenticateUser, tenant_Controller.history_view);

module.exports = router;
