import client from "../twilio/client.js";

export const sendTextMessage = async (options) => {
  try {
    const msgResponse = await client.messages.create({
      body: options.message,
      from: options.from,
      to: options.to,
    });

    return { ...msgResponse, errorSendingMessages: false };
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};
