'use strict';

const Dat = require('dat-node');

module.exports = {
    start(config) {
        return new Promise((resolve, reject) => {
            Dat(config.path, function(err, dat) {
                if (err) {
                    reject(err);
                    throw err;
                    return;
                }
                const progress = dat.importFiles({ watch: true });
                const network = dat.joinNetwork();
                resolve({ network, progress, key: dat.key.toString('hex') });
            });
        });
    },
    listen(config) {
        return new Promise((resolve, reject) => {
            Dat(config.path, { key: config.key }, function(err, dat) {
                const network = dat.joinNetwork(function(err) {
                    if (err) throw err;
                    if (!dat.network.connected || !dat.network.connecting) {
                        console.error(
                            'No users currently online for that key.'
                        );
                        process.exit(1);
                    }
                });
                resolve({ network });
            });
        });
    }
};
