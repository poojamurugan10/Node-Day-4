import recipes from "../Models/recipeSchema.js";
import Recipe from "../Models/recipeSchema.js";

export const createRecipe = async (req, res) => {
  try {
    const newRecipe = new Recipe(req.body); //req.body and assigning in single line
    await newRecipe.save(); //saving the details in mongodb
    res
      .status(200)
      .json({ message: "Recipe Added Successfully", data: newRecipe });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get recipes

export const getAllRecipes = async (req, res) => {
  try {
    const getRecipe = await Recipe.find();
    res
      .status(200)
      .json({ message: "Recipes retrived successfully", data: getRecipe });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get recipes by id

export const getRecipeById = async (req, res) => {
  try {
    const recipeId = req.params.id;
    const recipeDetail = await recipes.findById(recipeId);
    if (!recipeDetail) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    res
      .status(200)
      .json({ message: "recipe retrived successfully", data: recipeDetail });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update recipe
export const updateRecipe = async (req,res)=>{
    try {
        const recipeId = req.params.id;
        const {name,title,ingredients,instructions,cookingTime,difficulty,price}= req.body;
        const result = await recipes.findByIdAndUpdate(
           {_id:recipeId},
           {name,title,ingredients,instructions,cookingTime,difficulty,price},
           {new:true},
        );
        if(result.matchedCount ===0){
            return res.status(404).json({ message: "Recipe not found" });
        }
        res.status(200).json({ message: "recipe updated successfully", data: result });
    } catch (error) {
        res.status(500).json({message : error.message});
    }
}

//delete recipe
export const deleteRecipe = async (req,res)=>{
    try {
        const recipeId = req.params.id;
        const result = await recipes.findByIdAndDelete({_id:recipeId});
        if(!result){
            return res.status(404).json({ message: "Recipe not found" });
        }
        const recipe = await recipes.find()
        res.status(200).json({ message: "recipe deleted successfully", data: recipe });
    } catch (error) {
        res.status(500).json({message : error.message});
    }
}