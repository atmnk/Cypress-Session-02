var jwt = require('jsonwebtoken')
exports.getToken = ({id})=>{
  let it = Math.floor(Date.now()/1000)
  let exp = it + (10 * 24 * 60 * 60 )
  let obj = {
    "iat": it,
    "sub": id,
    "iss": "Kotlin&Spring",
    "exp": exp
  }
  console.log(JSON.stringify(obj))
  return jwt.sign(obj, 'ThisIsGoingToBeTopSecret');
}