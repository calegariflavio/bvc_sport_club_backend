const Registration = require('../models/registration'); 

exports.register = (req, res) => {
    const data = req.body;
    const fee = calculateFee(data.status);
    const registration = new Registration(data.userID, data.fullName, data.address, data.status, fee);
    console.log(registration)
    res.json(registration); 
};

function calculateFee(status) {
    if (status == 'student') {
      return 10; 
    } else if (status == 'staff') {
      return 50; 
    } else {
      return 0; 
    }
  }
