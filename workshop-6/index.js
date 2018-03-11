const compare = require('resemblejs').compare;

function getDiff() {
    const options = {};
    // The parameters can be Node Buffers
    // data is the same as usual with an additional getBuffer() function
    compare('/Users/diegoprietotorres/Documents/programs/MISO-4208-Workshops/workshop-6/cypress/screenshots/T1-after.png',
        '/Users/diegoprietotorres/Documents/programs/MISO-4208-Workshops/workshop-6/cypress/screenshots/T1-before.png', options, function (err, data) {
            if (err) {
                console.log('An error!')
            } else {
                console.log(data);
                /*
                {
                misMatchPercentage : 100, // %
                isSameDimensions: true, // or false
                dimensionDifference: { width: 0, height: -1 }, // defined if dimensions are not the same
                getImageDataUrl: function(){}
                }
                */
            }
        });
}

getDiff();