import mongoose from "mongoose";

// _id: string
// skills: string[]

export interface ISkills extends mongoose.Document {
  skills: string[];
}

const SkillsSchema = new mongoose.Schema<ISkills>({
  skills: { type: [String], required: true, default: [] },
});

const Skills = mongoose.model<ISkills>("Skills", SkillsSchema);

export default Skills;
