import mongoose, { connect, model, Schema, Document } from "mongoose";
// const slug = require('mongoose-slug-generator');
import mongooseDelete, { SoftDeleteDocument, SoftDeleteModel } from 'mongoose-delete';

// Interface for Course, extending from Document
interface ICourse extends SoftDeleteDocument {
    title: string;
    description: string;
    image?: string;
    slug?: string;
    videoId?: string;
    price?: string;
    level?: string;
    createdAt: Date;
    updatedAt: Date;
}

// Course Schema
const courseSchema = new Schema<ICourse>({
    title: { type: String, maxLength: 255, required: true },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    videoId: { type: String, maxLength: 255 },
    price: { type: String, maxLength: 255 },
    level: { type: String, maxLength: 255 },
    slug: { type: String, maxLength: 255, unique: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
}, { versionKey: false });

// Add plugins
// mongoose.plugin(slug);
courseSchema.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });

// Create Model using SoftDeleteModel with proper typing
const Course = model<ICourse, SoftDeleteModel<ICourse>>('Course', courseSchema);

export default Course;
