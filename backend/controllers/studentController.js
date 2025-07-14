const Student = require('../models/studentModel');

exports.registerStudent = async (req, res) => {
    try {
    	console.log(req.body);
    	const { regNo, stdName, email, dept, batch, password } = req.body;
  
    	if (!regNo || !stdName || !email || !dept || !batch || !password) {
        	return res.status(400).json({ message: 'All fields are required' });
      	}

      	const existingStudent = await Student.findOne({ regNo },{ email });
      	if (existingStudent) {
        	return res.status(400).json({ message: 'Student ID already exists' });
      	}
  
    	const student = new Student({
			regNo,
			stdName,
			email,
			dept,
			batch,
			password,
      	});
 
      	await student.save();
  
      	res.status(201).json({ message: 'Student registered successfully', student });
    } catch (error) {
      	res.status(500).json({ message: 'Server error', error: error.message });
    }
};
  
