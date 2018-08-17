# Dat Deamon

Simplistic script to make a simple writing peer for dat network. Nice to use with the help of pm2 to make a process.

## Usage

### Install
```bash
npm i dat-deamon
```
### Make a js script

```javascript
'use strict'

const datDeamon = require('dat-deamon');

datDeamon.start({
    path: '~/Screenshots' // path that you want to share
}).then(({ network, progress, key }) => {
    console.log(key); // this just prints out the dat key
    network.on('connection', function(connection, info) {
        console.log(info); // this is only neede if you want to check the connection
    });
    progress.on('put', function(src, dest) {
        console.log('Importing ', src.name, ' into archive'); // to log modified files
    });
});

```

### Probably better alternatives
- [Hashbase](https://hashbase.io/)
- [Homebase](https://github.com/beakerbrowser/homebase)

MIT @dkunin