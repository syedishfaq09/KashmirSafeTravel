const Admin = require("../models/Admin");

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({
      email,
      password,
    });

    if (!admin) {
      return res.status(401).json({
        message: "Invalid Admin Credentials",
      });
    }

    res.status(200).json({
      message: "Admin Login Successful",
      admin,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  loginAdmin,
};
