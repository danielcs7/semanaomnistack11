const express = require("express");
const OngControllers = require("./controllers/OngControllers");
const IncidentsControllers = require("./controllers/IncidentsControllers");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.post("/sessions", SessionController.create);

routes.get("/ongs", OngControllers.index);
routes.post("/ongs", OngControllers.create);

routes.get("/profile", ProfileController.index);

routes.get("/incidents", IncidentsControllers.index);
routes.post("/incidents", IncidentsControllers.create);
routes.delete("/incidents/:id", IncidentsControllers.delete);

module.exports = routes;
