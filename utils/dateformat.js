const moment = require("moment");
const formatDate = (date)=>{
    return moment(date).format('LLLL');
}
module.exports = {formatDate};