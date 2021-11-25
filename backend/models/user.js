import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  dbStatus: Boolean,
  registerDate: { type: Date, default: Date.now },
  roleId: {type: mongoose.Schema.ObjectId, ref: "roles"}
});

const user = mongoose.model("users", userSchema);
export default user;
