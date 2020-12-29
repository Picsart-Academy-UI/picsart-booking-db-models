const mongoose = require('mongoose');

const { Schema } = mongoose;

const TableSchema = new Schema({
  table_name: {
    type: String,
    required: [true, 'Please provide a table name'],
  },
  team_id: {
    type: Schema.Types.ObjectId,
    ref: 'Team',
  },
  table_config: Object,
}, { timestamps: true });

module.exports = mongoose.model('Table', TableSchema);