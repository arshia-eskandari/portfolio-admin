import Project, { IProject } from "../models/project";

interface ICreateProjectParams {
  urlTitles: string[];
  urls: string[];
  projectTechnologies: string[];
  projectTitle: string;
  objective: string;
  keyResults: string[];
  experienceId?: string;
  images: string[];
  videos: string[];
}

interface IUpdateProjectParams {
  urlTitles?: string[];
  urls?: string[];
  projectTechnologies?: string[];
  projectTitle?: string;
  objective?: string;
  keyResults?: string[];
  experienceId?: string;
  images?: string[];
  videos?: string[];
}

const createProject = async (projectInfo: ICreateProjectParams) => {
  let success = false;
  let errorMssg = "";
  try {
    const project = new Project(projectInfo);
    await project.save();
    success = true;
  } catch (error: unknown) {
    console.log("🚀 ~ createProject ~ error:", error);
    if (error instanceof Error) {
      errorMssg = error.message;
    } else {
      errorMssg = "An unknown error occurred";
    }
  }
  return { success, errorMssg };
};

const updateProject = async (
  id: string,
  fieldsToUpdate: IUpdateProjectParams
) => {
  let success = false;
  let errorMssg = "";
  try {
    const project = await Project.findById(id);
    if (!project) {
      throw new Error("Project not found.");
    }

    project.urlTitles = fieldsToUpdate.urlTitles || project.urlTitles;
    project.urls = fieldsToUpdate.urls || project.urls;
    project.projectTechnologies =
      fieldsToUpdate.projectTechnologies || project.projectTechnologies;
    project.projectTitle = fieldsToUpdate.projectTitle || project.projectTitle;
    project.objective = fieldsToUpdate.objective || project.objective;
    project.keyResults = fieldsToUpdate.keyResults || project.keyResults;
    project.experienceId = fieldsToUpdate.experienceId || project.experienceId;
    project.images = fieldsToUpdate.images || project.images;
    project.videos = fieldsToUpdate.videos || project.videos;

    await project.save();
    success = true;
  } catch (error: unknown) {
    console.log("🚀 ~ updateProject ~ error:", error);
    if (error instanceof Error) {
      errorMssg = error.message;
    } else {
      errorMssg = "An unknown error occurred";
    }
  }
  return { success, errorMssg };
};

const getProject = async (id: string) => {
  let success = false;
  let errorMssg = "";
  let project: IProject | null = null;
  try {
    project = await Project.findById(id);
    if (!project) {
      throw new Error("Project not found.");
    }
    success = true;
  } catch (error: unknown) {
    console.log("🚀 ~ getProject ~ error:", error);
    if (error instanceof Error) {
      errorMssg = error.message;
    } else {
      errorMssg = "An unknown error occurred";
    }
  }
  return { success, errorMssg, project };
};

const getAllProjects = async () => {
  let success = false;
  let errorMssg = "";
  let projects: IProject[] = [];
  try {
    projects = await Project.find({});
    success = true;
  } catch (error: unknown) {
    console.log("🚀 ~ getAllProjects ~ error:", error);
    if (error instanceof Error) {
      errorMssg = error.message;
    } else {
      errorMssg = "An unknown error occurred";
    }
  }
  return { success, errorMssg, projects };
};

const deleteProject = async (id: string) => {
  let success = false;
  let errorMssg = "";
  try {
    const project = await Project.findByIdAndDelete(id);
    if (!project) {
      throw new Error("Project not found.");
    }
    success = true;
  } catch (error: unknown) {
    console.log("🚀 ~ deleteProject ~ error:", error);
    if (error instanceof Error) {
      errorMssg = error.message;
    } else {
      errorMssg = "An unknown error occurred";
    }
  }
  return { success, errorMssg };
};

export {
  createProject,
  updateProject,
  getProject,
  getAllProjects,
  deleteProject,
};
