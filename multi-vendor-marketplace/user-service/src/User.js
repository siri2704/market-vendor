// User model for User Service (Mongoose)
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['buyer', 'vendor', 'admin'], default: 'buyer' },
    profilePic: { type: String },
    vendorRequest: {
        status: { type: String, enum: ['none', 'pending', 'approved', 'rejected'], default: 'none' },
        requestedAt: { type: Date },
        approvedAt: { type: Date },
    },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
