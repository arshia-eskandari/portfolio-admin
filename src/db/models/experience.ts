import mongoose from "mongoose";

// _id: string
// jobTitle: string
// company: string
// startDate: string
// endDate: string
// achievements: string[]
// responsibilities: string[]
// recommendationLetterUrls: string[]
// location: string
// experienceSkills: string[]

export interface IExperience extends mongoose.Document {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  achievements: string[];
  responsibilities: string[];
  recommendationLetterUrls: string[];
  location: string;
}

const ExperienceSchema = new mongoose.Schema<IExperience>({
  jobTitle: { type: String, required: true },
  company: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  achievements: { type: [String], required: true, default: [] },
  responsibilities: { type: [String], required: true, default: [] },
  recommendationLetterUrls: { type: [String], required: false },
  location: { type: String, required: true },
});

const Experience = mongoose.model<IExperience>("Experience", ExperienceSchema);

export default Experience;
