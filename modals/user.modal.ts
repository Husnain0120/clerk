import mongoose, { models, Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    clerkId: {
      type: String,
      requried: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = models?.User || model("User", UserSchema);
export default User;
