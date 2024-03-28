const { Customer } = require("../models");

const createCustomer = async (req, res) => {
  const {
    name,
    age,
    email,
    password,
    city,
    photo = "Kepo",
    isActive = true,
  } = req.body;

  try {
    const newCustomer = await Customer.create({
      name,
      age,
      email,
      password,
      city,
      photo,
      isActive,
    });

    res.status(200).json({
      status: "Success",
      data: { customer: newCustomer },
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err.message,
    });
  }
};

module.exports = { createCustomer };
