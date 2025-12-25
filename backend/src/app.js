console.log("✅ app.js loaded");
const express = require('express');
const cors = require("cors");

const templateRoutes = require("./routes/templateRoutes");
const contactRoutes = require("./routes/contactRoutes");
const emailRoutes = require("./routes/emailRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/templates", templateRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/email", emailRoutes);

app.get("/", (req, res) => {
    res.send("Email Template System API is running");
});

module.exports = app;