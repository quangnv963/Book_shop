import mongoose from "mongoose";

const { Schema } = mongoose

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
    },
    app:{
        type:String
    }
    
}, { versionKey: false });



export default mongoose.model('Product', productSchema);
