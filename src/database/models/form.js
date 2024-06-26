import mongoose from "mongoose";

const FormSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    phoneNumber: {
        type: Number,
        required: [true, "Phone number is required"]
    },
    address: {
        type: String,
        required: [true, "Subject is required"]
    },
    pincode: {
        type: Number,
        required: [true, "Pincode is required"]
    },
    securityType: {
        type: String,
        default: "General"
    },
    message: {
        type: String
    },
    comment: {
        type: String,
        default: "Unchecked"
    },
},
    { timestamps: true }
);

const Form = mongoose.models.forms || mongoose.model("forms", FormSchema);

export default Form;