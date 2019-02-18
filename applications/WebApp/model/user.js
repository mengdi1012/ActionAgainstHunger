var mongoose = require('mongoose');

// Doc for Mongoose Schemas: http://mongoosejs.com/docs/guide
var Schema = mongoose.Schema;

/**
 * Note that the database was loaded with data from a JSON file into a
 * collection called gillers.
 */
var userSchema = new Schema(
  {
    email: {
      type: String, 
      required: true,
      unique: true
    },
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      requried: true
    },
    isTeacher: {
      type:Boolean,
      required: true
    },
    courseList: {
      type:Array,
      required:false
    }
  }
);

mongoose.Promise = require('bluebird');
// Doc for Mongoose Connections: http://mongoosejs.com/docs/connections
mongoose.connect('mongodb://localhost/users');

// Doc for Mongoose Models: http://mongoosejs.com/docs/models
module.exports = mongoose.model('User', userSchema);