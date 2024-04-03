const Registration = require('../models/registration'); 

exports.register = (req, res) => {
    const data = req.body;
    const fee = calculateFee(data.memberStatus);
    const registration = new Registration(data.memberID, data.memberFullName, data.memberAddress, data.memberStatus, fee);
    console.log(registration)
    res.json(registration); 
};

function calculateFee(memberStatus) {
    if (memberStatus == 'student') {
      return 10; 
    } else if (memberStatus == 'staff') {
      return 50; 
    } else {
      return 0; 
    }
  }
