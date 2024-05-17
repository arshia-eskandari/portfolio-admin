import Experience, { IExperience } from "../models/experience";

interface ICreateExperienceParams {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  achievements: string[];
  responsibilities: string[];
  recommendationLetterUrls?: string[];
  location: string;
}

interface IUpdateExperienceParams {
  jobTitle?: string;
  company?: string;
  startDate?: string;
  endDate?: string;
  achievements?: string[];
  responsibilities?: string[];
  recommendationLetterUrls?: string[];
  location?: string;
}

const createExperience = async (experienceInfo: ICreateExperienceParams) => {
  let success = false;
  let errorMssg = "";
  try {
    const experience = new Experience(experienceInfo);
    await experience.save();
    success = true;
  } catch (error: unknown) {
    console.log("🚀 ~ createExperience ~ error:", error);
    if (error instanceof Error) {
      errorMssg = error.message;
    } else {
      errorMssg = "An unknown error occurred";
    }
  }
  return { success, errorMssg };
};

const updateExperience = async (
  id: string,
  fieldsToUpdate: IUpdateExperienceParams
) => {
  let success = false;
  let errorMssg = "";
  try {
    const experience = await Experience.findById(id);
    if (!experience) {
      throw new Error("Experience not found.");
    }

    experience.jobTitle = fieldsToUpdate.jobTitle || experience.jobTitle;
    experience.company = fieldsToUpdate.company || experience.company;
    experience.startDate = fieldsToUpdate.startDate || experience.startDate;
    experience.endDate = fieldsToUpdate.endDate || experience.endDate;
    experience.achievements =
      fieldsToUpdate.achievements || experience.achievements;
    experience.responsibilities =
      fieldsToUpdate.responsibilities || experience.responsibilities;
    experience.recommendationLetterUrls =
      fieldsToUpdate.recommendationLetterUrls ||
      experience.recommendationLetterUrls;
    experience.location = fieldsToUpdate.location || experience.location;

    await experience.save();
    success = true;
  } catch (error: unknown) {
    console.log("🚀 ~ updateExperience ~ error:", error);
    if (error instanceof Error) {
      errorMssg = error.message;
    } else {
      errorMssg = "An unknown error occurred";
    }
  }
  return { success, errorMssg };
};

const getExperience = async (id: string) => {
  let success = false;
  let errorMssg = "";
  let experience: IExperience | null = null;
  try {
    experience = await Experience.findById(id);
    if (!experience) {
      throw new Error("Experience not found.");
    }
    success = true;
  } catch (error: unknown) {
    console.log("🚀 ~ getExperience ~ error:", error);
    if (error instanceof Error) {
      errorMssg = error.message;
    } else {
      errorMssg = "An unknown error occurred";
    }
  }
  return { success, errorMssg, experience };
};

const getAllExperiences = async () => {
  let success = false;
  let errorMssg = "";
  let experiences: IExperience[] = [];
  try {
    experiences = await Experience.find({});
    success = true;
  } catch (error: unknown) {
    console.log("🚀 ~ getAllExperiences ~ error:", error);
    if (error instanceof Error) {
      errorMssg = error.message;
    } else {
      errorMssg = "An unknown error occurred";
    }
  }
  return { success, errorMssg, experiences };
};

const deleteExperience = async (id: string) => {
  let success = false;
  let errorMssg = "";
  try {
    const experience = await Experience.findByIdAndDelete(id);
    if (!experience) {
      throw new Error("Experience not found.");
    }
    success = true;
  } catch (error: unknown) {
    console.log("🚀 ~ deleteExperience ~ error:", error);
    if (error instanceof Error) {
      errorMssg = error.message;
    } else {
      errorMssg = "An unknown error occurred";
    }
  }
  return { success, errorMssg };
};

export {
  createExperience,
  updateExperience,
  getExperience,
  getAllExperiences,
  deleteExperience,
};
