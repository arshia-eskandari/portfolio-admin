import mongoose from "mongoose";

// _id: string
// text: string

export interface IAbout extends mongoose.Document {
  text: string;
}

const AboutSchema = new mongoose.Schema<IAbout>({
  text: { type: String, required: true },
});

const About = mongoose.model<IAbout>("About", AboutSchema);

export default About;
