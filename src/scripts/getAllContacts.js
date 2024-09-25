import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {
    try {
        const contacts = await readContacts();
        return contacts;
    } catch (error) {
        console.error("Failed getAllContacts", error.message);
    }
};

console.log(await getAllContacts());
