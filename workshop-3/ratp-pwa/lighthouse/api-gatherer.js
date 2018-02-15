'use strict';

const Gatherer = require('lighthouse').Gatherer;

class APITime extends Gatherer {
    afterPass(options) {
        const driver = options.driver;

        return driver.evaluateAsync('window.APILoadtime')
            .then(apiLoadTime => {
                if (!apiLoadTime) {
                    throw new Error('Unable to find API load time metrics in page');
                }
                return apiLoadTime;
            });
    }
}

module.exports = APITime;