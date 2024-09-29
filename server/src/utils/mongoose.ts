import { Document } from "mongoose";

   export function multipleMongooseToObject (mongooses: Document[]){
        return mongooses.map(mongoose => mongoose.toObject())
    }
    
    export function mongooseToObject (mongoose: Document){
        return mongoose ? mongoose.toObject() : mongoose;
    }