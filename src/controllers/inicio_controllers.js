module.exports = (req, res) => {
    let files = fs.readdirSync(__dirname+'/public/Img')
    res.render('index', {
      pageTitle: 'Home',
      images: files,
      slideInfo: slideInfo
}