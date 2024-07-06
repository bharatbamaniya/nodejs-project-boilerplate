import { Router } from "express";
import { healthcheck } from "../controllers/healthcheck.controllers.js";

const router = new Router();

router
  .route("/")
  .get(healthcheck);

export default router;