import { Schema, model } from 'mongoose';

const urlSchema = new Schema(
  {
    alias: {
      type: String,
      require: true,
      unique: true,
    },
    originalUrl: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model('Url', urlSchema);
