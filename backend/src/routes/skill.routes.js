import { Router } from "express";
import { getSkills, createSkill, updateSkill, deleteSkill } from "../controllers/skill.controller.js";

const router = Router();

router.get("/", getSkills);
router.post("/", createSkill);
router.put("/:id", updateSkill);
router.delete("/:id", deleteSkill);

export default router;
