var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Contact = new Schema({
 first_name: {type : String, lowercase:true, required: true, unique:true},
 last_name: {type: String, required: true},
 phone: {type : String, lowercase:true, required: true, unique:true},
});
module.exports = mongoose.model('Contact', Contact);
