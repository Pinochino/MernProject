import mongoose from 'mongoose';

async function connectDb() {
    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect('mongodb://127.0.0.1:27017/f8_education_dev');
        
            console.log('Connect successfully')
        } else {
            console.log('MongoDB is already connected');
          }
    } catch (error) {
       console.log('Error: ', {error});
    }
}

export default connectDb;
