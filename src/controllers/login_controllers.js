module.exports = (req, res) => {
    res.send(
      req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out'
    )
}

