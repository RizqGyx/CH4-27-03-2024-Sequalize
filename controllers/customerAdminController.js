const { Customer } = require("../models");

const customerPage = async (req, res) => {
  try {
    const customers = await Customer.findAll();

    res.render("customer/index.ejs", {
      customers,
      message: req.flash("message", ""),
    });
  } catch (err) {
    res.render("error.ejs", { message: err.message });
  }
};

const createCustomerPage = async (req, res) => {
  try {
    res.render("customer/create.ejs");
  } catch (err) {
    res.render("error.ejs", { message: err.message });
  }
};

const createCustomer = async (req, res) => {
  try {
    await Customer.create(req.body);
    req.flash("message", "ditambah");
    res.redirect("/customers");
  } catch (err) {
    res.render("error.ejs", { message: err.message });
  }
};

const updateCustomerPage = async (req, res) => {
  try {
    res.render("customer/update.ejs");
  } catch (err) {
    res.render("error.ejs", { message: err.message });
  }
};

const updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.update(req.body, {
      where: { id: req.params.id },
    });
    req.flash("message", "ditambah");
    res.redirect("/customers", { customer });
  } catch (err) {
    res.render("error.ejs", { message: err.message });
  }
};

const deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.destroy({ where: { id: req.params.id } });

    res.redirect("/customers", { customer });
  } catch (err) {
    res.render("error.ejs", { message: err.message });
  }
};

module.exports = {
  customerPage,
  createCustomerPage,
  createCustomer,
  updateCustomerPage,
  updateCustomer,
  deleteCustomer,
};
