import express from "express";
import { GetAll, GetByID } from "../controllers/parkController";

const subRouter = express.Router();

subRouter.route("/")
    .get(GetAll)

subRouter.route("/id/:id")
    .get(GetByID)

module.exports = subRouter;
