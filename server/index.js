require('dotenv').config();
const express = require('express');
const app = express();
const cors = require("cors");
const connection = require("./db")

const usersRoutes = require('./routes/user')

connection();
// mddleware

const corsOptions = {
  origin: 'https://truth-or-dare-aov.vercel.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Si vous utilisez des cookies ou des en-têtes d'autorisation
  optionsSuccessStatus: 204, // Répond avec un statut 204 pour les pré-vérifications CORS
};

app.use(express.json());
//parametre cors
app.use(cors(corsOptions));
//routes


app.use("/api/user", usersRoutes);
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listen on port ${port} ...`));
