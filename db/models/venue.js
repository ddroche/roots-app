var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VenueSchema = new Schema({
    venueName: String,
    location: String,
    //eventDate: [{type:Date: [{
    //            type:schema.Types.ObjectId, ref:'Users'[{first: Boolean}, {second:Boolean}, {cannot:Boolean}]},
    //            arrivalTime:Date,
    //            gameTime:Date}],
    events: [{
      event: {
        eventDate: Date,
        preferences: [{
          orgName: [{
            first: {type: Boolean, default: false},
            second: {type: Boolean, default: false},
            cannot: {type: Boolean, default: false}
          }]
        }]
      },
      arrivalTime: Date,
      gameTime: Date
    }]
});

module.exports = mongoose.model("Venue", VenueSchema);