import { Router } from "express";

const router = Router();
import controller from "./todos.controller";

router.get("/", controller.index);

export default router;
