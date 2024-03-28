const router = require("express").Router();

const Customeradmin = require("../controllers/customerAdminController");

router.route("/").get(Customeradmin.customerPage);
router.route("/create").get(Customeradmin.createCustomerPage);
router.route("/update/:id").get(Customeradmin.updateCustomerPage);
router.route("/admin/create").post(Customeradmin.createCustomer);
router.route("/admin/update/:id").post(Customeradmin.updateCustomer);
router.route("/admin/delete/:id").post(Customeradmin.deleteCustomer);

module.exports = router;
