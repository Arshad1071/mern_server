const mongoose = require("mongoose");
// const autoIncrement = require('mongoose-auto-increment');

const employeeSchema = new mongoose.Schema({
  employeeName: {
    type: String,
    required: [true, "Employee name is required"],
  },
  designation: {
    type: String,
    required: [true, "Employee designation is required"],
  },
  salary: {
    type: Number,
    required: [true, "Employee salary is required"],
  },
  email: {
    type: String,
    required: [true, "Employee email address is required"],
    unique: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// employeeSchema.plugin(autoIncrement.plugin, {
//   model: "Employee",
//   field: "empId",
//   startAt: 10000, // Start counting from 10000
//   incrementBy: 1, // Increment by 1
// });

module.exports = mongoose.model("Employee", employeeSchema);
