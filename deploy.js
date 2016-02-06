var uploadFtp = require('./upload-ftp');
var argv = require('minimist')(process.argv.slice(2));

uploadFtp({
  destPath: '/public_html/carloreeser/',
  host: 'carehr.nl',
  user: argv.user,
  password: argv.password,
  dirs: [
    'css',
    'files',
    'img',
    'js'
  ],
  files: [
    'index.html'
  ]
});
