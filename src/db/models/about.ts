import mongoose from "mongoose";

// _id: string
// text: string
// resumeUrl: string

export interface IAbout extends mongoose.Document {
  text: string;
  resumeUrl: string
}

const AboutSchema = new mongoose.Schema<IAbout>({
  text: { type: String, required: true},
  resumeUrl: { type: String, required: false},
});

const About = mongoose.model<IAbout>("About", AboutSchema);

export default About;
