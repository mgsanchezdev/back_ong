const PostTestimonialsQuery = require('../../query/testimonialsQuery/PostTestimonialsQuery');
const { validationResult} = require('express-validator');
const { TESTIMONY_CREATED, ERROR } = require('../../const/const');


const PostTestimonialsController = async (req, res) => {
    
    const { name, content} = req.body
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json(errors.array());
      }  
        try {
            
            const newTestimony = await PostTestimonialsQuery.create({
            name,
            image: req.data.Location,
            content          
        }); 
        return res.json({
            status: 200,
            message: TESTIMONY_CREATED,
            newTestimony
        }); 
    } catch (error) {
            res.json({
                status: 500,
                message: ERROR
            })
        }
    };

module.exports = PostTestimonialsController;