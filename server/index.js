require('dotenv').config();
const express = require('express');
const app = express();
const cors = require("cors");
const connection = require("./db")

const usersRoutes = require('./routes/user')

connection();
// mddleware
app.use(express.json());
//parametre cors
const corsOptions = {
  origin: 'https://truth-or-dare-aov.vercel.ap', // Remplacez par le domaine de votre site front-end
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Autorise l'envoi de cookies et d'en-têtes d'autorisation
  optionsSuccessStatus: 204, // Répond avec un statut 204 (No Content) pour les pré-vérifications CORS
};

app.use(cors(corsOptions));
//routes


app.use("/api/user", usersRoutes);
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listen on port ${port} ...`));
