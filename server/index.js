import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import templateRoutes from './routes/templates.js';
import TemplatePost from './models/templatePost.js';
import { templateData } from './data/templates.js';

// Create Express App Connection
const app = express();
dotenv.config();

// Set up BodyParser
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Create route to localhost:5000/templates
app.use('/templates', templateRoutes);

// https://wwww.mongodb.com/cloud/atlas
// Using Mongo on Server Side to host DB
const PORT = process.env.PORT || 5000;

CONNECTION_URL = 'mongodb+srv://budowja:budowja123@cluster0.2drrt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// Create connection to MongoDB on port 5000
mongoose.connect(process.env.CONNECTION_URL, {})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// Make sure the database has been initialized with data. If empty
// repopulate the database with a chosen data file (templateData)
// Ordinarily, this would not exist and the database
// access provided would only allow for reading, not writing.
TemplatePost.count(function(err, count) {
    if (count == 0) TemplatePost.insertMany(templateData);
});