var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CourseTeachersSchema = new Schema({
    teacher: { type: Schema.Types.ObjectId, ref: 'b_using_options'},
    room: Number
});

var ExamsSchema = new Schema({
    subject: { type: String},
    examDate: Date,
    score: Number,
    result: {type: String, enum:['distinction','merit','pass','fail']},
    grader: { type: Schema.Types.ObjectId, ref: 'b_using_options'}
});

var CourseSchema = new Schema({
    subject: String,
    grade: {type: String},
    teachers: [CourseTeachersSchema]
});

var HSchema = new Schema({
    surname: {type: String, list:{}},
    forename:  {type: String, list:true},
    address : {
        street: String,
        town: String
    },
    studies : {
        courses: [CourseSchema],
        exams: [ExamsSchema]
    }
});

var H = mongoose.model('H', HSchema);

module.exports = H;
