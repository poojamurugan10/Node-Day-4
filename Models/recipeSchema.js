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
    },
    ingredients:{
        type: Array,
    },
    instructions:{
        type: String,
    },
    cookingTime:{
        type: Number,
    },
    difficulty:{
        type: String,
    },
    price:{
        type: String,
    },
})

const recipes = mongoose.model("recipes",recipeSchema)

export default recipes;





