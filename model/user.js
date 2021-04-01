import mongoose from "mongoose";
import { v4 as uuidHash } from "uuid";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Error: mandatory field",
  },
  email: {
    type: String,
    required: "Error: mandatory field",
  },
  password: {
    type: String,
    required: "Error: mandatory field",
  },
  confirm: {
    type: String,
    default: uuidHash(),
  },
});

export default mongoose.model("users", userSchema);
