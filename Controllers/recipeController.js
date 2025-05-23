import recipes from "../Models/recipeSchema.js";



export const createRecipe = async(req,res) => {
    try {
        const newRecipe = new recipes(req.body); //req.body and assigning in single line
        await newRecipe.save(); //saving the details in mongodb
        res.status(200).json({message:"Recipe Added Successfully",data:newRecipe})
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
}