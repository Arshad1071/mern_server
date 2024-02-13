const { Employee } = require("../Controllers/EmployeeController");
const router = require("express").Router();

router.post("/employee", Employee);

module.exports = router;
