module.exports = (req, res) => {
  if(req.session.loggedin){
    res.render('sesion', {
      login: true,
      user_name: req.session.user_name,
      first_name: req.session.first_name,
      last_name: req.session.last_name,
      email: req.session.email,
      pageTitle: 'Sesion',
    });
  }else {
    res.render('sesion', {
      login: false,
      pageTitle: 'Sesion',
    });
  }
  res.end();
}  