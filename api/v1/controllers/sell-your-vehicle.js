import SellYourVehicle from "../models/sell-your-vehicle.js";

export const addSellYourVehicleInfo = async (req, res) => {
  const sellYourVehicleBody = req.body.data;

  try {
    // add tournament to db
    const createdSellYourVehicle = await SellYourVehicle.create(
      sellYourVehicleBody
    );

    if (!createdSellYourVehicle) {
      return res.sendStatus(500);
    }

    // send success response to client
    res.status(201).json({ result: createdSellYourVehicle });
  } catch (err) {
    // catch and sent error to client
    res.status(500).json({ message: err.message });
  }
};
