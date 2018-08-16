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
                resolve({ network, progress, key: dat.key.toString('hex') })
            });
        });
    }
};
