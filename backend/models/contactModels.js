import mongoose from "mongoose";

const contactschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength:30
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 10,
        maxlength:30
    },
    message: {
        type: String,
        required: true,
        trim: true,
        minlength: 10,
        maxlength:256
    }
}, { timestamps: true })

export default mongoose.model("contactschema", contactschema)