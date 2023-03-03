import Contact from "../models/contact.js";

export const addContactController = async (req, res) => {
  const contactFormBody = req.body.data;

  try {
    // add tournament to db
    const createdContact = await Contact.create(contactFormBody);

    if (!createdContact) {
      return res.sendStatus(500);
    }

    // send success response to client
    res.status(201).json({ result: createdContact });
  } catch (err) {
    // catch and sent error to client
    res.status(500).json({ message: err.message });
  }
};
