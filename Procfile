web: node . --server
bot: npm install && npm update && npm i pm2 -g && pm2 link 10li9bc1krfwk5z a977mqdqu63utty && pm2 start main.js && pm2 save && pm2 monit
worker: node . --db 'mongodb+srv://itsmedell:TJj1Elk1LvPfeovk@cluster0.odb5a.mongodb.net/cloudbot?retryWrites=true&w=majority'
