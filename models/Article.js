var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ReviewSchema = new Schema({
  author: {
    type: String,
    required: true
  },
  
  date: {
    type: String,
    required: false
  },
  rating: {
    type: String,
    required: false
  },
    summary: {
      type: String,
      required: true
    },
  
});


var Review = mongoose.model("Review", ReviewSchema);

// Export the Article model
module.exports = Review;
