module.exports= (req, res) => {
    res.send(JSON.stringify(req.oidc.user, null, 2));
}