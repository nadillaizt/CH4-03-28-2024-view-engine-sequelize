const router = require("express").Router();

const CustomerAdmin = require("../controllers/customerAdminController");

router.get("/", CustomerAdmin.customerPage);
router.get("/create", CustomerAdmin.createCustomerPage);
router.post("/admin/create", CustomerAdmin.createCustomer);
router.get("/edit/:id", CustomerAdmin.editCustomerPage);
router.post("/admin/edit/:id", CustomerAdmin.editCustomer);
router.post("/admin/delete/:id", CustomerAdmin.deleteCustomer);

module.exports = router;
