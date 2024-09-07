import fs from 'node:fs/promises';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    const newContacts = contacts.slice(0, contacts.length - 1);
    await writeContacts(newContacts);
  } catch (error) {
    console.log(error.message);
  }
};

removeLastContact();
