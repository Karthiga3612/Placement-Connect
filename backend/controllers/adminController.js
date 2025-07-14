const Admin = require('../models/adminModel');

exports.registerAdmin = async (req, res) => {
    try {
    	console.log(req.body);
    	const { adminId, adminName, email, password } = req.body;
  
    	if (!adminId || !adminName || !email || !password) {
        	return res.status(400).json({ message: 'All fields are required' });
      	}

      	const existingAdmin = await Admin.findOne({ adminId });
      	if (existingAdmin) {
        	return res.status(400).json({ message: 'Admin ID already exists' });
      	}
  
    	const admin = new Admin({
			adminId,
            adminName,
            email,
			password,
      	});
 
      	await admin.save();
  
      	res.status(201).json({ message: 'Student registered successfully', admin });
    } catch (error) {
      	res.status(500).json({ message: 'Server error', error: error.message });
    }
};