import mongoose from "mongoose";

// _id: string
// firstName: string
// lastName: string
// email: string
// message: string
// createdAt: string

export interface IContact extends mongoose.Document {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  createdAt: number;
}

const ContactSchema = new mongoose.Schema<IContact>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Number, required: true },
});

const Contact = mongoose.model<IContact>("Contact", ContactSchema);

ContactSchema.pre("save", async function (next) {
  const date = new Date();
  const timestamp = date.getTime();
  this.createdAt = timestamp;
  next();
});

export default Contact;
