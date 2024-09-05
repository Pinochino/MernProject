import mongoose from "mongoose";
import { Schema } from "mongoose";

const ObjectId = Schema.ObjectId;

const courseSchema = new Schema({
    id: ObjectId,
    title: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

const  Course =  mongoose.model('Course', courseSchema);

export default Course;
