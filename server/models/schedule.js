const {Schema, model} = require('mongoose')

const ScheduleSchema = new Schema(
    {
    name: {type: String, unique:true},
    _id: {type: Number, unique:true}
}
)

module.exports = model('Schedule', ScheduleSchema)