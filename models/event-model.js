const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const eventSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    category: { type: Array },
    // variation: { type: String, Array },
    // Date: { type: String, required: true },
    // Time: { type: String, required: true },
    // price: { type: String, required: true },

}, { timestamps: true }, )

const Event = mongoose.model('event', eventSchema)
module.exports = Event