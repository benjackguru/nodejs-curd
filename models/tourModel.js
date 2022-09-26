const mongoose = require('mongoose');

// const validator = require('validator');

const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A tour must have a name']
      // validate: [validator.isAlpha, 'Tour name must only contain characters']
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
