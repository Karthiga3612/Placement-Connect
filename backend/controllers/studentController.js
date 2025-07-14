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
exports.getStudentProfile = async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const student = await Student.findById(decoded.id).select('-password');
    res.status(200).json({ student });
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized', error });
  }
};

  
