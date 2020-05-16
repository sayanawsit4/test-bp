const constants = require('generator-jhipster/generators/generator-constants');

const SERVER_MAIN_RES_DIR = constants.SERVER_MAIN_RES_DIR;
const SERVER_MAIN_SRC_DIR = constants.SERVER_MAIN_SRC_DIR;

const serverFiles = {
    serverResource: [
        {
            path: SERVER_MAIN_RES_DIR,
            templates: [{ file: 'banner.txt', method: 'copy', noEjs: true }]
        }
    ],
    serverJavaApp: [
        {
            path: SERVER_MAIN_SRC_DIR,
            templates: [{ file: 'package/Application.java', renameTo: generator => `${generator.mainClass}.java` }]
        }
    ]
};

function writeFiles() {
    return {
        writeSamFiles() {
            this.writeFilesToDisk(serverFiles, this, false);
        }
    };
}

module.exports = {
    writeFiles
};