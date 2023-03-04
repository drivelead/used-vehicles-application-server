import Newsletter from "../models/newsletter.js";
import crypto from "crypto";

export const addNewsletter = async (req, res) => {
  const { firstName, lastName, email, verified, information } = req.body;
  console.log(information);

  try {
    Newsletter.findOrCreate(
      { email },
      {
        firstName,
        lastName,
        verified,
        dealerInformation: information.dealerInformation,
        customerInformation: { locale: information.customerInformation.locale },
      },
      async (error, subscriber, created) => {
        if (error) {
          res.status(500).json({ message: error.message });
        }

        if (created && !verified) {
          // newly created subscriber - [UNVERFIED]
          const verifyToken = crypto.randomBytes(16).toString("hex");

          const updatedSubscriber = await Newsletter.findByIdAndUpdate(
            subscriber._id,
            { verifyToken },
            {
              new: true,
            }
          ).exec();

          if (updatedSubscriber) {
            res.statusMessage = "Newsletter added";
            res.status(201).json({ new: true, result: updatedSubscriber });
          }
        } else {
          res.statusMessage = "Newsletter added";
          res.status(201).json({ new: false, subscriber });
        }
      }
    );
  } catch (err) {
    res.statusMessage = err.message;
    res.sendStatus(500);
  }
};

export const verifyNewsletter = async (req, res) => {
  const { email } = req.params;
  const { verified, verifyToken } = req.query;

  try {
    const subscriber = await Newsletter.findOne({ email }).exec();

    if (!subscriber) {
      res.status(400).json({ message: "Newsletter not found" });
    } else {
      // there is subscriber
      if (subscriber.verified) {
        // already subscribed
        res.status(200).json({
          verified: true,
          email,
          message: "Newsletter already verified",
          verificationDate: subscriber.verifiedAt,
        });
      } else {
        // already not verified
        if (verifyToken !== subscriber.verifyToken) {
          // wrong verificationToken
          res.status(400).json({ message: "Invalid Verification Token" });
        } else {
          // right verificationToken
          let updatedSubscriber = await Newsletter.findOneAndUpdate(
            { email },
            { verified: true, verifiedAt: new Date().toISOString() },
            {
              new: true,
            }
          ).exec();

          res.status(200).json({
            verified: true,
            subscriber: updatedSubscriber,
            messsage: "Newsletter Verified",
          });
        }
      }
    }
  } catch (err) {
    res.sendStatus(500).json({ message: err.message });
  }
};
