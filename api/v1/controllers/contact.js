import { DEFAULT_FROM_MESSAGE } from "../../../config/variables.js";
import { sendTextMessage } from "../../../services/sendTextMessage.js";
import Contact from "../models/contact.js";

export const addContactController = async (req, res) => {
  const contactFormBody = req.body.data;
  const information = req.body.information;

  try {
    const createdContact = await Contact.create({
      ...contactFormBody,
      dealerInformation: information.dealerInformation,
      customerInformation: {
        locale: information.customerInformation.activeLocale,
      },
    });

    if (!createdContact) {
      return res.sendStatus(500);
    }

    // if (createdContact.phone) {
    //   try {
    //     const msgResponse = await sendTextMessage({
    //       to: createdContact.phone,
    //       from: DEFAULT_FROM_MESSAGE,
    //       message:
    //         "Thanks for getting in touch. We will get back to you as soon as possible.",
    //     });

    //     // send success response to client with message information
    //     res.status(201).json({
    //       result: createdContact,
    //       msgResponse: msgResponse,
    //     });
    //   } catch (err) {
    //     // send success response to client with message information
    //     console.log("awdaw", err);
    //     res.status(201).json({
    //       result: createdContact,
    //       msgResponse: { error: err },
    //     });
    //   }
    // } else {
    //   // send success response to client
    //   res.status(201).json({ result: createdContact, msgResponse: null });
    // }

    res.status(201).json({ result: createdContact, msgResponse: null });
  } catch (err) {
    // catch and sent error to client
    res.status(500).json({ message: err.message });
  }
};
