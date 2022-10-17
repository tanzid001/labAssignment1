const generateToken = require('../utils/getToken');

exports.getUser = (req, res, next) => {
  const token = generateToken()
  console.log(token);
  console.log(req.Name);
  res.cookie('token', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    expires: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000),
  })

  res.json({
    status: 'Done',
    Name: req.Name,
    token: token
  })
  next();
}
exports.usersData = (req, res, next)=>{
  const getData = req.body;
  console.log(getData);
  res.json(getData)
  next();
}

exports.getName = (req, res, next) => {
  
  req.Name = 'MD Afsar Hossain'
  next()
}
