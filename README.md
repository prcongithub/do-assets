# NPM Module to Upload Files & Auto Upload Assets for Express Applications to Digital Ocean Spaces

Do-Assets allows you to upload files from your server / http requests to Digital Ocean's Object Storage.
It also automatically uploads all the files from a specified folder to DO Spaces whenever your NodeJS application starts or restarts!

### Installation

```js
$ cd your-node-app
$ npm i do-assets
```
In app.js add the following setup right after setup for connect-assets (if already present)
```
...
var asset_config = JSON.parse(
  fs.readFileSync(
    __dirname+'/config/assets_'+process.env.NODE_ENV+'.json', "utf8"
  )
);
var assets = require('connect-assets')(asset_config);
...
var doAssets = require('do-assets')({
  assetsPath: __dirname+"/public/assets", // Path of the folder to upload assets from
  folder: "assets" // name of the folder on DO Spaces
});
```
Now run the app with the ENV variables
```
$ NODE_ENV=production ACCESS_KEY_ID=<DO-ACCESS-KEY-ID> SECRET_ACCESS_KEY=<DO-SECRET-ACCESS> REGION_NAME=<DO-REGION> BUCKET_NAME=<DO-BUCKET-NAME> SERVICE_NAME=s3 node app.js
```
And you are done!

If you are using ```connect-assets```, just mention the serverPath as follows:
```json
{ 
  servePath: 'https://<bucket-name>.<region-name>.digitaloceanspaces.com/<folder-name>/'
}
```
Now all the assets loaded using js, css and assetPath methods will start loading assets from DO Spaces!
# Happy Coding!
----
# License

MIT
**Free Software, Hell Yeah!**
