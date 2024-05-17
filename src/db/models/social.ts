import mongoose from "mongoose";

// _id: string
// name: enum(‘linkedin’, ‘github’, ‘telegram’)
// url: string

export enum SocialNames {
  LinkedIn = "linkedin",
  GitHub = "github",
  Telegram = "telegram",
}

export interface ISocial extends mongoose.Document {
  name: SocialNames;
  url: string;
}

const SocialSchema = new mongoose.Schema<ISocial>({
  name: { type: String, required: true },
  url: { type: String, required: false, default: "" },
});

const Social = mongoose.model<ISocial>("Social", SocialSchema);

export default Social;
