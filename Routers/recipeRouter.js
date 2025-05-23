import express from "express";
import { createRecipe } from "../Controllers/recipeController.js";


const router = express.Router();

router.post("/create",createRecipe)

export default router;
