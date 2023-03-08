import client from "../twilio/client.js";

export const sendTextMessage = async (options) => {
  try {
    const msgResponse = await client.messages.create({
      body: options.message,
      from: options.from,
      to: options.to,
    });

    return { ...msgResponse, msgResponse: null };
  } catch (err) {
    throw new Error(err);
  }
};
