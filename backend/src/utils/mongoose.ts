import { Document } from "mongoose";

module.exports = {
    multipleMongooseToObject: function (mongooses: Document[]){
        return mongooses.map(mongoose => mongoose.toObject())
    }, 
    mongooseToObject: function (mongoose: Document){
        return mongoose ? mongoose.toObject() : mongoose;
    }
}