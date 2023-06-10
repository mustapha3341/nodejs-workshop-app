const fs = require("fs");
const path = require("path");

const contactsData = fs.readFileSync(path.join(__dirname, "../contacts.json"), {
  encoding: "utf-8",
});

const contactHandler = (req, res, next) => {
  const contacts = JSON.parse(contactsData);
  return res.json({ contacts });
};

const createContactHandler = (req, res, next) => {
  const contacts = JSON.parse(contactsData).contacts;
  const newContact = req.body;

  contacts.push(newContact);

  const result = fs.writeFileSync(
    path.join(__dirname, "../contacts.json"),
    JSON.stringify(contacts)
  );

  if (result === undefined) {
    return res.json({ message: "Contact created successfully" });
  }

  return res.json({ message: "Error processing request" });
};

const updateContactHandler = (req, res, next) => {
  const { contactFirstName } = req.params;
  const update = req.body;

  const contacts = JSON.parse(contactsData);

  const contact = contacts.find((currentContact) => {
    if (currentContact.first_name === contactFirstName) {
      return currentContact;
    }
  });

  if (!contact) return res.json({ message: "contact does not exist" });

  const updatedContact = { ...contact, ...update };
  // const updcontact = Object.assign(contact, update);

  const result = fs.writeFileSync(
    path.join(__dirname, "../contacts.json"),
    JSON.stringify([...contacts, updatedContact])
  );

  if (result === undefined) {
    return res.json({ message: "contact updated successfully" });
  }

  return res.json({ message: "Error processing request" });
};

module.exports.contactHandler = contactHandler;
module.exports.createContactHandler = createContactHandler;
module.exports.updateContactHandler = updateContactHandler;
