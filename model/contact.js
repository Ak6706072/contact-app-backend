import mongoose from "mongoose";

const Schema = mongoose.Schema;

const contactSchema = new Schema({
  name: {
    type: String,
    required: "Error:Name is mandatory",
  },
  age: {
    type: Number,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  zip: {
    type: String,
  },
  workex: {
    type: Number,
  },
});

//basically model is a collection in mongoose
const contactModel = mongoose.model("contacts", contactSchema);
//contacts collection
export default contactModel;
