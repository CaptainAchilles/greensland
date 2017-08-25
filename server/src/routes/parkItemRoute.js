import express from "express";
import { ParkItemController } from "../controllers";

const subRouter = express.Router();

subRouter.route("/")
    .get(ParkItemController.GetAll)

subRouter.route("/:id")
    .get(ParkItemController.GetByID)

subRouter.route("/park/:id")
    .get(ParkItemController.GetForPark)

module.exports = subRouter;
