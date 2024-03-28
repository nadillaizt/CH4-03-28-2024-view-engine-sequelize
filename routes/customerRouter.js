const router = require("express").Router();

const Customer = require("../controllers/customerController");

router.post("/", Customer.createCustomer);

module.exports = router;
