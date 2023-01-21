const fs = require('fs');
const ejs = require('ejs');
const path = require('path');

module.exports = (req, res) => {
  let files = fs.readdirSync('./public/Img');

  res.render('home', {
    pageTitle: 'Home',
    images: files,
    
  })
}    