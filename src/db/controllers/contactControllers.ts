import Contact, { IContact } from "../models/contact";

interface ICreateContactParams {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const createContact = async (contactInfo: ICreateContactParams) => {
  let success = false;
  let errorMssg = "";
  try {
    const contact = new Contact(contactInfo);
    await contact.save();
    success = true;
  } catch (error: unknown) {
    console.log("🚀 ~ createContact ~ error:", error);
    if (error instanceof Error) {
      errorMssg = error.message;
    } else {
      errorMssg = "An unknown error occurred";
    }
  }
  return { success, errorMssg };
};

const getAllContacts = async () => {
  let success = false;
  let errorMssg = "";
  let contacts: IContact[] = [];
  try {
    contacts = await Contact.find({});
    success = true;
  } catch (error: unknown) {
    console.log("🚀 ~ getAllContacts ~ error:", error);
    if (error instanceof Error) {
      errorMssg = error.message;
    } else {
      errorMssg = "An unknown error occurred";
    }
  }
  return { success, errorMssg, contacts };
};

export { createContact, getAllContacts };
