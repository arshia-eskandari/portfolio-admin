import mongoose from "mongoose";

// _id: string
// urlTitles: string[]
// urls: string[]
// projectTechnologies: string[]
// projectTitle: string
// objective: string
// keyResults: string[]
// experienceId: string
// Images: string[]
// videos: string[]

export interface IProject extends mongoose.Document {
  urlTitles: string[];
  urls: string[];
  projectTechnologies: string[];
  projectTitle: string;
  objective: string;
  keyResults: string[];
  experienceId: string;
  images: string[];
  videos: string[];
}

const ProjectSchema = new mongoose.Schema<IProject>({
  urlTitles: { type: [String], required: true, default: [] },
  urls: { type: [String], required: true, default: [] },
  projectTechnologies: { type: [String], required: true, default: [] },
  projectTitle: { type: String, required: true },
  objective: { type: String, required: true },
  keyResults: { type: [String], required: true, default: [] },
  experienceId: { type: String, required: false },
  images: { type: [String], required: true, default: [] },
  videos: { type: [String], required: true, default: [] },
});

const Project = mongoose.model<IProject>("Project", ProjectSchema);

export default Project;
