const mongoose = require('mongoose');
const Theme = mongoose.model('Theme',{
    primary:{type:String},
    secondary:{type:String},
    success:{type:String},
    info:{type:String},
    warning:{type:String},
    danger:{type:String},
    cardheader:{type:String},
    cardheadertext:{type:String}

})
module.exports = Theme;


