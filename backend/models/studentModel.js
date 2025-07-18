const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); 

const StudentSchema = new mongoose.Schema({
  regNo: {
    type: String,
    required: true,
    unique: true,
  },
  stdName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  dept: {
    type: String,
    required: true,
  },
  batch: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true });

StudentSchema.pre('save', async function(next) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(this.password, salt);
      this.password = hashedPassword;
      next();
    } catch (error) {
      next(error);
    }
  });

module.exports = mongoose.model('Student', StudentSchema);