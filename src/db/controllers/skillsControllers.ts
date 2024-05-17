import Skills, { ISkills } from "../models/skills";

const createSkills = async (skills: string[]) => {
  let success = false;
  let errorMssg = "";
  try {
    await Skills.deleteMany();
    const newSkills = new Skills({ skills });
    await newSkills.save();
    success = true;
  } catch (error: unknown) {
    console.log("🚀 ~ createSkills ~ error:", error);
    if (error instanceof Error) {
      errorMssg = error.message;
    } else {
      errorMssg = "An unknown error occurred";
    }
  }
  return { success, errorMssg };
};

const getSkills = async () => {
  let success = false;
  let errorMssg = "";
  let skills: ISkills[] | null = null;
  try {
    skills = await Skills.find({});
    success = true;
  } catch (error: unknown) {
    console.log("🚀 ~ getSkills ~ error:", error);
    if (error instanceof Error) {
      errorMssg = error.message;
    } else {
      errorMssg = "An unknown error occurred";
    }
  }
  return { success, errorMssg, skills };
};

const deleteSkills = async (id: string) => {
  let success = false;
  let errorMssg = "";
  try {
    await Skills.deleteMany();
    success = true;
  } catch (error: unknown) {
    if (error instanceof Error) {
      errorMssg = error.message;
    } else {
      errorMssg = "An unknown error occurred";
    }
  }
  return { success, errorMssg };
};

export { createSkills, getSkills, deleteSkills };
