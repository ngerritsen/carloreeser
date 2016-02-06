var FtpClient = require('ftp');
var fs = require('fs');

var ftpClient = new FtpClient();

function uploadFtp (options) {
  var files = getFiles(options.dirs, options.files);

  ftpClient.on('ready', function () {
    makeDirs(options.dirs, options.destPath)
    uploadFiles(files, options.destPath)
  });

  ftpClient.connect({
    host: options.host,
    user: options.user,
    password: options.password
  });
}

function getFiles (dirs, files) {
  return [].concat(
    getFileListFromDirs(dirs || []),
    files || []
  );
}

function uploadFiles (files, destPath) {
  files.forEach(function (path) {
    ftpClient.put(path, destPath + path, function (err) {
      if (err) {
        throw err;
      }

      console.log('Uploaded: ' + path);
    });

    ftpClient.end();
  });
}

function makeDirs (dirs, destPath) {
  dirs.forEach(function (dir) {
    ftpClient.mkdir(destPath + dir, function (err) {
      if (err) {
        console.log(err);
      }
    });
  });
}

function getFileListFromDirs(paths) {
  return paths.reduce(function (fileList, path) {
    var files = fs.readdirSync(path)
      .map(function (file) {
        return path + '/' + file
      });

    return fileList.concat(files);
  }, []);
}

module.exports = uploadFtp;
