const mongoose = require('mongoose');

const pessoaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    RA: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model('Pessoa', pessoaSchema, 'pessoas');