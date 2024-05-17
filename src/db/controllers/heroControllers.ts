import Hero, { IHero } from "../models/hero";

interface ICreateHeroParams {
  text: string;
}

interface IUpdateHeroParams {
  text?: string;
}

const createHero = async (heroInfo: ICreateHeroParams) => {
  let success = false;
  let errorMssg = "";
  try {
    const hero = new Hero(heroInfo);
    await hero.save();
    success = true;
  } catch (error: unknown) {
    console.log("🚀 ~ createHero ~ error:", error);
    if (error instanceof Error) {
      errorMssg = error.message;
    } else {
      errorMssg = "An unknown error occurred";
    }
  }
  return { success, errorMssg };
};

const updateHero = async (id: string, fieldsToUpdate: IUpdateHeroParams) => {
  let success = false;
  let errorMssg = "";
  try {
    const hero = await Hero.findByIdAndUpdate(id, fieldsToUpdate, {
      new: true,
    });
    if (!hero) {
      throw new Error("Hero not found.");
    }
    success = true;
  } catch (error: unknown) {
    console.log("🚀 ~ updateHero ~ error:", error);
    if (error instanceof Error) {
      errorMssg = error.message;
    } else {
      errorMssg = "An unknown error occurred";
    }
  }
  return { success, errorMssg };
};

const getHero = async (id: string) => {
  let success = false;
  let errorMssg = "";
  let hero: IHero | null = null;
  try {
    hero = await Hero.findById(id);
    if (!hero) {
      throw new Error("Hero not found.");
    }
    success = true;
  } catch (error: unknown) {
    console.log("🚀 ~ getHero ~ error:", error);
    if (error instanceof Error) {
      errorMssg = error.message;
    } else {
      errorMssg = "An unknown error occurred";
    }
  }
  return { success, errorMssg, hero };
};

const getAllHeros = async () => {
  let success = false;
  let errorMssg = "";
  let heros: IHero[] = [];
  try {
    heros = await Hero.find({});
    success = true;
  } catch (error: unknown) {
    console.log("🚀 ~ getAllHeros ~ error:", error);
    if (error instanceof Error) {
      errorMssg = error.message;
    } else {
      errorMssg = "An unknown error occurred";
    }
  }
  return { success, errorMssg, heros };
};

const deleteHero = async (id: string) => {
  let success = false;
  let errorMssg = "";
  try {
    const hero = await Hero.findByIdAndDelete(id);
    if (!hero) {
      throw new Error("Hero not found.");
    }
    success = true;
  } catch (error: unknown) {
    console.log("🚀 ~ deleteHero ~ error:", error);
    if (error instanceof Error) {
      errorMssg = error.message;
    } else {
      errorMssg = "An unknown error occurred";
    }
  }
  return { success, errorMssg };
};

export { createHero, updateHero, getHero, getAllHeros, deleteHero };
