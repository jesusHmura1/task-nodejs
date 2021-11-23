import * as mongoose from "mongoose";

export const USerSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      username: { type: String, required: true },
      email: { type: String, required: true },
      password: { type: String, required: true },
    },
    { timestamps: true }
  );

USerSchema.index({username: 1}, {unique: true });
USerSchema.index({email: 1}, {unique: true });
