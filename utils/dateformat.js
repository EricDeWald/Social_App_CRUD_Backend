const moment = require("moment");
function formatDate(date){
    return moment(date).format('LLLL');
}
module.exports = formatDate()