// import {Number, String} from "mongodb";
import mongoose from "mongoose";

const {Schema} =  mongoose;

const  meterSchema  = new Schema({

});


export default mongoose.models.Meter || mongoose.model('Meter', meterSchema);
