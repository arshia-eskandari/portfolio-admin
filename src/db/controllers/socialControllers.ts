import Social, { SocialNames } from "../models/social";

interface ICreateSocialParam {
  name: SocialNames;
  url: string;
}

const createSocial = async (socialDetails: ICreateSocialParam) => {
  let success = false;
  let errorMssg = "";
  try {
    await Social.deleteMany({ name: socialDetails.name });
    const newSocial = new Social(socialDetails);
    await newSocial.save();
    success = true;
  } catch (error: unknown) {
    console.log("🚀 ~ createSocial ~ error:", error);
    if (error instanceof Error) {
      errorMssg = error.message;
    } else {
      errorMssg = "An unknown error occurred";
    }
  }
  return { success, errorMssg };
};

const updateSocial = async (id: string, url: string) => {
  let success = false;
  let errorMssg = "";
  try {
    const social = await Social.findByIdAndUpdate(
      id,
      { url },
      {
        new: true,
      }
    );
    if (!social) {
      throw new Error("Social not found.");
    }
    success = true;
  } catch (error: unknown) {
    console.log("🚀 ~ updateSocial ~ error:", error);
    if (error instanceof Error) {
      errorMssg = error.message;
    } else {
      errorMssg = "An unknown error occurred";
    }
  }
  return { success, errorMssg };
};

const deleteSocial = async (id: string) => {
  let success = false;
  let errorMssg = "";
  try {
    const social = await Social.findByIdAndDelete(id);
    if (!social) {
      throw new Error("Social not found.");
    }
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

export { createSocial, updateSocial, deleteSocial };
