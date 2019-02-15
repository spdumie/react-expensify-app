# Git Commands

git init - 
git status
git add
git commit
git log
git commit -am "comments" : all fils and including comments to commit

git remote add origin git@github.com:spdumie/xxxxx.git : assign 
git push : will push the files to remote repo
git push heroku master : push master brench files to heroku server  

# yarn commands
yarn add xxxxx@4.0.0 : install dependency (4.0.0 version)
yarn test : yarn runs jest test files
yarn test -- --watch : jest test keeps updating in real time
yarn run dev-server : dev-server starts in 8080 port. cyber files will be created
yarn start : yarn start express.js server
yarn run build:prod : build ad production files, style.css, bundle.js and mapping files will be created
yarn install --production : will install only production dependencies.
yarn install : will install all dependencies including devDependencies

# heroku commands
heroku --version : show heroku version
heroku login : loggin in to heroku (via web browser)
heroku create xxxxx : create new app service on heroku
heroku logs : dispatch logs from heroku
heroku update : update heroku

heroku config : manage config
heroku config:set (key=xxxx): set key pair in config
heroku config:unset (only Key) : remove key pair in config

# node.js 
node server/server.js : run node.js files (express.js server here)

# SSH
ssh -T git@github.com : authenticate on GitHub



