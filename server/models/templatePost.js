import mongoose from 'mongoose';

// Create Schema for Objections in Mongoose
const templateSchema = mongoose.Schema({
    title: String,
    cost: Number,
    id: Number,
    description: String,
    thumbnail: String,
    image: String
});

// Create model from schema
const TemplatePost = mongoose.model('TemplatePost', templateSchema);

// Export the mongoose model so we can execute commands on it
export default TemplatePost;