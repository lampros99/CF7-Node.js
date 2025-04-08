const jwt = require('jsonwebtoken');

function generateAccessToken(user){

  console.log("Auth Service", user);

  const payload = {
    username: user.username,
    email: user.email,
    roles: user.roles
  }

  const secret = process.env.TOKEN_SECRET;
  
  const options = { expiresIn: '1h'};
  
  console.log("Secret token: " , process.env.TOKEN_SECRET);
  return jwt.sign(payload, secret, options);
}

function verifyAccessToken(token){
  const secret = process.env.TOKEN_SECRET;
  
  try {
    const payload = jwt.verify(token, secret);
                  
    console.log("VerifyToken", payload);
    console.log(token)
    return { verified: true, data: payload }
  } catch (err) {
    return { verified: false, data: err.message }
  }
}

module.exports = { generateAccessToken, verifyAccessToken }