console.log("✅ templateRoutes loaded");
const express = require("express");
const router = express.Router();

const {
    createTemplate,
    getTemplates,
    updateTemplate,
} = require("../controllers/templateController")

router.post("/", createTemplate);
router.get("/", getTemplates);
router.put("/:id", updateTemplate);

module.exports = router;