const express = require("express");
const router = express.Router();

const {
  createContact,
  getContacts,
  getContactsByGroup,
} = require("../controllers/contactController");

router.post("/", createContact);
router.get("/", getContacts);
router.get("/group/:group", getContactsByGroup);

module.exports = router;
