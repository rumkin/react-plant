const uuid = require('uuid');

module.exports = function () {
    return `0x${uuid().replace(/-/g, '')}`;
};
