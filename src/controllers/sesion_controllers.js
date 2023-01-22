const fs = require('fs');
const path = require('path');
module.exports= (req, res) => {
    res.send(JSON.stringify(req.oidc.user, null, 2)); 
}


module.exports= (req, res) => res.oidc.login({ returnTo: '/store' })