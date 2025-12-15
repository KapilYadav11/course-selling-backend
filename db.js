const mongoose = require("mongoose");
 mongoose.connect("mongodb://0.0.0.0/course-selling-app")
const Schema = mongoose.Schema;

// USER SCHEMA
const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
    },
    password: String,
    firstName: String,
    lastName: String
});

// ADMIN SCHEMA
const adminSchema = new Schema({
    email: {
        type: String,
        unique: true,
    },
    password: String,
    firstName: String,
    lastName: String
});

// COURSE SCHEMA
const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "admin" 
    }
});

// PURCHASE SCHEMA
const purchaseSchema = new Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "user" 
    },
    courseId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "course" 
    }
});

// MODELS (Correct schemas linked)
const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
};
