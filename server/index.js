require('dotenv').config();
const express = require('express');
const app = express();
const cors = require("cors");
const connection = require("./db")

const usersRoutes = require('./routes/user')

connection();
// mddleware
app.use(express.json());
app.use(cors());
//routes


app.use("/api/user", usersRoutes);
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listen on port ${port} ...`));
