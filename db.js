const mongoose = require('mongoose');
mongoose.connect(process.env.MONGOURL, (err) => {
    if (!err) {
        console.log("Connection successfull");
    }
    else {
        console.log("Error in connection");
    }

})
module.exports = mongoose;


