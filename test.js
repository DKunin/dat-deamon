'use strict';

const datDeamon = require('./');

// datDeamon.start({
//     path: '~/Screenshots'
// }).then(({ network, progress, key }) => {
//     console.log(key);
//     network.on('connection', function(connection, info) {
//         console.log(info);
//     });
//     progress.on('put', function(src, dest) {
//         console.log('Importing ', src.name, ' into archive');
//     });
// });


datDeamon.listen({
    path: './temp-screenshots',
    key: '5bd76913bdbdbfb45d7a30d9982733b7435842de129041d3821bc7b9d3098a3c'
}).then(({ network }) => {
    network.on('connection', function(connection, info) {
        console.log(info);
    });
});
