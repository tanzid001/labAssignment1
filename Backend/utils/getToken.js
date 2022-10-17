const jwt = require("jsonwebtoken");
const generateToken = () => {
  return jwt.sign({ name: 'MD Afsar Hossain'}, '2r4u7x!A%D*G-KaP', {
    expiresIn: '10d',
  })
}
module.exports = generateToken