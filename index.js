const fs = require("fs");
const path = require("path");
const glob = require('glob');
const s3_utils = require('./s3_utils');

module.exports = function (options) {
  options = options || {};
  if(process.env.NODE_ENV !== 'production')
    return
  glob(options.assetsPath+'/**/*', function(error, files) {
    for(var i = 0; i < files.length; i++) {
      var file_path = files[i];
      
      if(fs.lstatSync(file_path).isDirectory())
        continue;
      
      var fileFolder = file_path.replace(options.assetsPath,'');
      fileFolder = fileFolder.replace(path.basename(file_path),'')
      
      var folder = options.folder + fileFolder.replace(/\/$/, "");
      
      console.log("Uploading: "+file_path+" to "+folder);
      s3_utils.uploadServerFile(files[i], folder, function(error,attachment){
        console.log("Uploaded: "+attachment.url);
      });
    }
  });
};
