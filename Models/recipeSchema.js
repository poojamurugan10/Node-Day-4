import mongoose from "mongoose";

const recipeSchema = mongoose.Schema({

    name:{
        type: String,
        required: true,
        unique: false,
    },
    price:{
        type: Number,
        required: true,
    }
})

const recipes = mongoose.model("recipes",recipeSchema)

export default recipes;





