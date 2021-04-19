var jwt = require('jsonwebtoken')
exports.getToken = ({id})=>{
  let it = Math.floor(Date.now()/1000)
  let exp = it + 3600
  return jwt.sign({
      "iss": "http://localhost:8000/api/users",
      "iat": it,
      "exp": exp,
      "nbf": it,
      "jti": "8sUyTnt9MYWgbs5c",
      "sub": id,
      "prv": "87e0af1ef9fd15812fdec97153a14e0b047546aa"
    }, 'kmnoGfxfWP9C35yWhmMPNe82QrCnlzyhC6y4MnSK5HzGks7MW8BCrBOHN6J0628i');
}