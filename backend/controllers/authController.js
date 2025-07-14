const Student = require('../models/studentModel');
const bcrypt = require('bcrypt');
const Admin = require('../models/adminModel');

exports.loginStudent = async (req, res) => {
    console.log(req.body);
    const {regNo, password} = req.body;

	try{
		if(!regNo || !password){
			return res.status(400).json({message: 'All fields are required'});
		}
		const student = await Student.findOne({ regNo });
        if(!student){
            return res.status(400).json({message: 'User not find'});
        }
        const isMatch = await bcrypt.compare(password, student.password);
        if(!isMatch){
            return res.status(400).json({message: 'Invalid Password'});
        }
        res.status(200).json({
            message: 'login sucessfully',
            student,
        });

	} catch (error) {
        console.error('login error: ',error);
		res.status(500).json({ message: 'Server error', error: error.message });
	}
}

exports.loginAdmin = async (req, res) => {
    console.log(req.body);
    const {adminId, password} = req.body;

	try{
		if(!adminId || !password){
			return res.status(400).json({message: 'All fields are required'});
		}
		const admin = await Admin.findOne({ adminId });
        if(!admin){
            return res.status(400).json({message: 'Admin not find'});
        }
        const isMatch = await bcrypt.compare(password, admin.password);
        if(!isMatch){
            return res.status(400).json({message: 'Invalid Password'});
        }
        res.status(200).json({
            message: 'login sucessfully',
            admin,
        });

	} catch (error) {
        console.error('login error: ',error);
		res.status(500).json({ message: 'Server error', error: error.message });
	}
}