const Employee = require("../Models/EmployeeModel");

module.exports.Employee = async (req, res, next) => {
  try {
    const { employeeName, designation, salary, email, createdAt } = req.body;
    const existingEmployee = await Employee.findOne({ employeeName });
    if (existingEmployee) {
      return res.json({ message: "User already exists" });
    }
    const employee = await Employee.create({
      employeeName,
      designation,
      salary,
      email,
      createdAt,
    });
    res
      .status(201)
      .json({ message: "Employee added successfully", success: true, employee });
    next();
  } catch (error) {
    console.error(error);
  }
};
