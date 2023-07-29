// Rutas de characters
const express = require("express");
const { getCharById } = require("../controllers/getCharById");

const characterRouter = express.Router();
// TODAS LAS REQ QUE LLEGUEN A ESTE ARCHIVO TIENEN EL "/characters" IMPLICITO



characterRouter.get("/:idChar", getCharById);

module.exports = characterRouter;
