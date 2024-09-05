import mongoose from 'mongoose';

async function connectDb() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/f8_education_dev');
        console.log('Connect successfully')
    } catch (error) {
        console.log('Connect failed')
    }
}

export default connectDb;
