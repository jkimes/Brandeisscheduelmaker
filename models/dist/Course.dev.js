'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var Mixed = Schema.Types.Mixed;
var courseSchema = Schema({
  limit: Number,
  times: Mixed,
  strTimes: Mixed,
  enrolled: Number,
  details: String,
  type: String,
  status_text: String,
  section: String,
  waiting: Number,
  instructor: Mixed,
  coinstructors: Mixed,
  code: Mixed,
  subject: String,
  coursenum: String,
  num: Number,
  suffix: String,
  name: String,
  independent_study: Boolean,
  term: Number,
  description: String
});
module.exports = mongoose.model('Course', courseSchema);