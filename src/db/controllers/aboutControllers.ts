import About, { IAbout } from "../models/about";

interface ICreateAboutParams {
  text: string;
  resumeUrl?: string;
}

interface IUpdateAboutParams {
  text?: string;
  resumeUrl?: string;
}

const createAbout = async (aboutInfo: ICreateAboutParams) => {
  let success = false;
  let errorMssg = "";
  try {
    const about = new About(aboutInfo);
    await about.save();
    success = true;
  } catch (error: unknown) {
    console.log("🚀 ~ createAbout ~ error:", error);
    if (error instanceof Error) {
      errorMssg = error.message;
    } else {
      errorMssg = "An unknown error occurred";
    }
  }
  return { success, errorMssg };
};

const deleteAbout = async (id: string) => {
  let success = false;
  let errorMssg = "";
  try {
    const about = await About.findByIdAndDelete(id);
    if (!about) {
      throw new Error("About entry not found.");
    }
    success = true;
  } catch (error: unknown) {
    console.log("🚀 ~ deleteAbout ~ error:", error);
    if (error instanceof Error) {
      errorMssg = error.message;
    } else {
      errorMssg = "An unknown error occurred";
    }
  }
  return { success, errorMssg };
};

const updateAbout = async (id: string, fieldsToUpdate: IUpdateAboutParams) => {
  let success = false;
  let errorMssg = "";
  try {
    const about = await About.findById(id);
    if (!about) {
      throw new Error("About entry not found.");
    }
    about.text = fieldsToUpdate.text || about.text;
    about.resumeUrl = fieldsToUpdate.resumeUrl || about.resumeUrl;
    await about.save();
    success = true;
  } catch (error: unknown) {
    console.log("🚀 ~ updateAbout ~ error:", error);
    if (error instanceof Error) {
      errorMssg = error.message;
    } else {
      errorMssg = "An unknown error occurred";
    }
  }
  return { success, errorMssg };
};

const getAbout = async (id: string) => {
  let success = false;
  let errorMssg = "";
  let about: IAbout | null = null;
  try {
    about = await About.findById(id);
    if (!about) {
      throw new Error("About entry not found.");
    }
    success = true;
  } catch (error: unknown) {
    console.log("🚀 ~ getAbout ~ error:", error);
    if (error instanceof Error) {
      errorMssg = error.message;
    } else {
      errorMssg = "An unknown error occurred";
    }
  }
  return { success, errorMssg, about };
};

const getAllAbouts = async () => {
  let success = false;
  let errorMssg = "";
  let abouts: IAbout[] = [];
  try {
    abouts = await About.find({});
    success = true;
  } catch (error: unknown) {
    console.log("🚀 ~ getAllAbouts ~ error:", error);
    if (error instanceof Error) {
      errorMssg = error.message;
    } else {
      errorMssg = "An unknown error occurred";
    }
  }
  return { success, errorMssg, abouts };
};

export { createAbout, deleteAbout, updateAbout, getAbout, getAllAbouts };
