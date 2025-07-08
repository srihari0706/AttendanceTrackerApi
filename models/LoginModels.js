import mongoose from "mongoose";

const UserListSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pass: { type: String, required: true },
});

export const UserList = mongoose.model("UserList", UserListSchema, "Users");
