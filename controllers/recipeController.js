const Recipe = require('../models/recipeModel');

const createRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.create(req.body);
        res.status(201).json(recipe);
    } catch (error) {
        res.status(400).json({ message: 'Error creating recipe', error });
    }
};

const getRecipes = async (req, res) => {
    try {
        const recipes = req.params.id ?
            await Recipe.findById(req.params.id) :
            await Recipe.find({});
        res.json(recipes);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching recipes', error });
    }
};

const updateRecipe = async (req, res) => {
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedRecipe);
    } catch (error) {
        res.status(400).json({ message: 'Error updating recipe', error });
    }
};

const deleteRecipe = async (req, res) => {
    try {
        await Recipe.findByIdAndDelete(req.params.id);
        res.status(204).json({ message: 'Recipe deleted' });
    } catch (error) {
        res.status(400).json({ message: 'Error deleting recipe', error });
    }
};

module.exports = {
    createRecipe,
    getRecipes,
    updateRecipe,
    deleteRecipe
}