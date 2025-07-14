const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const AdminSchema = new mongoose.Schema({
    adminId: {
        type: String,
        required: true,
        unique: true,
    },
    adminName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {timestamps: true});

AdminSchema.pre('save', async function(next){
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword =  await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
});

module.exports = mongoose.model('Admin', AdminSchema);