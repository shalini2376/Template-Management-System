const express = require("express");
const router = express.Router();

const { sendTestEmail, sendBulkEmails } = require("../controllers/emailController");

router.post("/test", sendTestEmail);
router.post("/send-bulk", sendBulkEmails);

module.exports = router;
