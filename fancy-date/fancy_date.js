var format = require('date-format');

function fancyDate() {
    let formattedDateTime = format(format.ISO8601_WITH_TZ_OFFSET_FORMAT, new Date());
    return `\u222e ${formattedDateTime} \u222e`;
}

module.exports.fancyDate = fancyDate;
