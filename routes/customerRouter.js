const router = require("express").Router();

const Customer = require("../controllers/customerController");

router.route("/").post(Customer.createCustomer);

module.exports = router;
