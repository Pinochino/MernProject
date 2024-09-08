import mongoose, { connect, model, Schema } from "mongoose";

// Interface for Course
interface ICourse {
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

// Create Model
const Course = model<ICourse>('Course', courseSchema);

// Connect to MongoDB and run example code
// async function run() {
//     try {
//         await connect('mongodb://127.0.0.1:27017/f8_education_dev');
//         console.log('MongoDB connected');

//         // Example usage
//         // const course = new Course({
//         //     title: 'Lập trình C++ cơ bản, nâng cao',
//         //     description: 'Khóa học lập trình C++ từ cơ bản tới nâng cao dành cho người mới bắt đầu...',
//         //     image: 'https://files.fullstack.edu.vn/f8-prod/courses/21/63e1bcbaed1dd.png',
//         //     slug: 'C++',
//         //     price: '35200',
//         //     level: 'Mức độ nâng cao',
//         //     videoId: 'ENjrJ_zyeUc'
//         // });

//         // await course.save();
//         // console.log(course.title);
//     } catch (err) {
//         console.error('Error connecting to MongoDB:', err);
//     }
// }

// run();

export default Course;
