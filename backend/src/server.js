const dotenv = require('dotenv');
dotenv.config();

const app = require("./app");
const connnectDB = require("./config/db");

connnectDB();

const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})