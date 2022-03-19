//complete when the model is finished//
const Category = require("../../modelsConections/categoryModelConection");
const {
    CATEGORIES_POST,
    CATEGORIES_INSUFFICIENT_PROPERTIES
} = require("../../const/const");

const POSTCategory = async (req, res) => {
    try {
        const { name, description } = req.body;
        if (name, description) {
            await Category.create({
                name, description
        });
            return res.status(200).json({ message: CATEGORIES_POST });
        } else {
            return res.status(404).json({ error: CATEGORIES_INSUFFICIENT_PROPERTIES });
        }
    } catch (error) {
        return res.status(404).json({ error: error });
    }
};

exports.POSTCategory = POSTCategory;
