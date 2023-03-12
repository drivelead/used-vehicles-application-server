import SellYourVehicle from "../models/sell-your-vehicle.js";

export const addSellYourVehicleInfo = async (req, res) => {
  const sellYourVehicleBody = req.body.data;
  const information = req.body.information;

  try {
    const createdSellYourVehicle = await SellYourVehicle.create({
      ...sellYourVehicleBody,
      dealerInformation: information.dealerInformation,
      customerInformation: {
        locale: information.customerInformation.activeLocale,
      },
    });

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
