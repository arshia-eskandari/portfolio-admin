import mongoose from "mongoose";
import bcrypt from "bcrypt";

// _id: string
// firstName: string
// lastName: string
// email: string
// createdAt: number
// updatedAt: number
// password: string
// role: enum(‘admin’, ‘user’)

export enum Role {
  Admin = "admin",
  User = "user",
}

export interface IUser extends mongoose.Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: Role;
  createdAt: number;
  updatedAt: number;
}

const UserSchema = new mongoose.Schema<IUser>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, default: Role.User },
  createdAt: {
    type: Number,
    required: true,
    default: () => new Date().getTime(),
  },
  updatedAt: { type: Number, required: false },
});

UserSchema.pre("save", async function (next) {
  const date = new Date();
  const timestamp = date.getTime();
  this.email = this.email.toLowerCase();
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  if (!this.isNew) {
    this.updatedAt = timestamp;
  }
  next();
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
