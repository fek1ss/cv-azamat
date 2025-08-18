// backend/src/routes/user.routes.js
import { Router } from "express";
import { register, login, me } from "../controllers/user.controller.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", me);

export default router;
