import User, { IUser, Role } from "../models/user";

interface ICreateUserParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: Role;
}

interface IUpdateUserParams {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  role?: Role;
}

const createUser = async (userInfo: ICreateUserParams) => {
  let success = false;
  let errorMssg = "";
  try {
    const user = new User(userInfo);
    await user.save();
    success = true;
  } catch (error: unknown) {
    console.log("🚀 ~ createUser ~ error:", error);
    if (error instanceof Error) {
      errorMssg = error.message;
    } else {
      errorMssg = "An unknown error occurred";
    }
  }
  return { success, errorMssg };
};

const deleteUser = async (id: string) => {
  let success = false;
  let errorMssg = "";
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      throw new Error("User not found.");
    }
    success = true;
  } catch (error: unknown) {
    console.log("🚀 ~ deleteUser ~ error:", error);
    if (error instanceof Error) {
      errorMssg = error.message;
    } else {
      errorMssg = "An unknown error occurred";
    }
  }
  return { success, errorMssg };
};

const updateUser = async (id: string, fieldsToUpdate: IUpdateUserParams) => {
  let success = false;
  let errorMssg = "";
  try {
    const user = await User.findById(id);
    if (!user) {
      throw new Error("User not found.");
    }
    const { firstName, lastName, email, password, role } = fieldsToUpdate;

    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.email = email || user.email;
    user.password = password || user.password;
    user.role = role || user.role;

    await user.save();
    success = true;
  } catch (error: unknown) {
    console.log("🚀 ~ updateUser ~ error:", error);
    if (error instanceof Error) {
      errorMssg = error.message;
    } else {
      errorMssg = "An unknown error occurred";
    }
  }
  return { success, errorMssg };
};

const getUser = async (id: string) => {
  let success = false;
  let errorMssg = "";
  let user: IUser | null = null;
  try {
    user = await User.findById(id);
    if (!user) {
      throw new Error("User not found.");
    }
    success = true;
  } catch (error: unknown) {
    console.log("🚀 ~ updateUser ~ error:", error);
    if (error instanceof Error) {
      errorMssg = error.message;
    } else {
      errorMssg = "An unknown error occurred";
    }
  }
  return { success, errorMssg, user };
};

const getAllUsers = async () => {
  let success = false;
  let errorMssg = "";
  let users: IUser[] = [];
  try {
    users = await User.find({});
    success = true;
  } catch (error: unknown) {
    console.log("🚀 ~ getAllUsers ~ error:", error);
    if (error instanceof Error) {
      errorMssg = error.message;
    } else {
      errorMssg = "An unknown error occurred";
    }
  }
  return { success, errorMssg, users };
};

export { createUser, deleteUser, updateUser, getUser, getAllUsers };
