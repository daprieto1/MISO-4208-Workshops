'use strict';

const Audit = require('lighthouse').Audit;

const MAX_API_TIME = 3000;

class LoadAudit extends Audit {
    static get meta() {
        return {
            category: 'MyPerformance',
            name: 'api-audit',
            description: 'First API sucess response',
            failureDescription: 'First API response is invalid or too slow',
            helpText: 'Used to measure the time between request a TimeTable info and its response.',
            requiredArtifacts: ['APITime']
        };
    }

    static audit(artifacts) {
        const loadedTime = artifacts.APITime;

        const belowThreshold = loadedTime <= MAX_API_TIME;

        return {
            rawValue: loadedTime,
            score: belowThreshold
        };
    }
}

module.exports = LoadAudit;