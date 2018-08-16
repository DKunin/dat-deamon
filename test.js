'use strict';

const datDeamon = require('./');

datDeamon.start({
    path: '~/Screenshots'
}).then(({ network, progress, key }) => {
    console.log(key);
    network.on('connection', function(connection, info) {
        console.log(info);
    });
    progress.on('put', function(src, dest) {
        console.log('Importing ', src.name, ' into archive');
    });
});
