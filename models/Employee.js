// models/Employee.js
const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  employeeId: { type: String, required: true, unique: true },

  insuranceType: { type: String, default: "Not found" },
  department: { type: String, default: "Not found" },
  leaveType: { type: String, default: "Not found" },
  startDate: { type: Date, default: null },
  endDate: { type: Date, default: null },
  carNumber: { type: String, default: "Not found" },
  insuranceCompany: { type: String, default: "Not found" },
  premium: { type: Number, default: 0 },
  grossPremium: { type: Number, default: 0 },
  reason: { type: String, default: "Not found" },
});

module.exports = mongoose.model("Employee", EmployeeSchema);
