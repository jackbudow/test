// Create all handlers for all routes. 
// Purpose of controller is to handle the logic of all routing requests for /templates
// import Template from '../../client/src/components/Templates/Template/Template.js';
import TemplatePost from '../models/templatePost.js';

// Get /templates
export const getTemplates = async (req, res) => {
    try {
        const templatePost = await TemplatePost.find();

        console.log(templatePost);

        res.status(200).json(templatePost);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}