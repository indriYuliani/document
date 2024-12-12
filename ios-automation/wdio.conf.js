const dotenv = require('dotenv');

//config buat ganti ganti env
require('dotenv').config();
const envFile = process.env.NODE_ENV === 'prod' ? '.env.prod' : process.env.NODE_ENV === 'stg' ? '.env.stg' : '.env.dev';
dotenv.config({ path: envFile });
//sampe sini dicopy


const { TimelineService } = require('wdio-timeline-reporter/timeline-service');
exports.config = {
    services: [
        [
            'appium',
            {
                command: 'appium'
            }
        ],
        [TimelineService]
    ],
    port: 4725,
    specs: [
        './test/specs/**/*.js'
    ],
    capabilities: [
        {
            "platformName": "iOS",
            "appium:automationName": "XCUITest",
            "appium:udid": process.env.udid,
            "appium:app": process.env.app,
            "appium:autoAcceptAlerts": true,
            "appium:noReset": true // ini buat nyimpen aplikasi data
        },
    ],
    logLevel: 'error',
    framework: 'mocha',
    mochaOpts: {
        timeout: 120000,
    },
    reporters: [['timeline', {
        outputDir:
            './reports',
        fileName: 'timeline-report.html',
        embedImages: true,
        images: {
            quality: 80,
            resize: false,
            reductionRatio: 2
        }
        ,
        screenshotStrategy:
            'before:click'
    }]],
};
