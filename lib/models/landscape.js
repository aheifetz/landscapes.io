'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LandscapeSchema = new Schema({
    parentLandscapeId:  { type: Schema.ObjectId, ref: 'Landscape'},

    createdAt: { type: Date, default: Date.now },
    createdBy: { type: String, required: true },

    name: { type: String, required: true },
    version: { type: String, required: true },
    imageUri: { type: String, required: true },
    cloudFormationTemplate: { type: String, required: true },

    infoLink: String,
    description: String
});

module.exports = mongoose.model('Landscape', LandscapeSchema);