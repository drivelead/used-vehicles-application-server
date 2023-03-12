import UsedVehicle from "../models/used-vehicle.js";

export const addUsedVehicle = async (req, res) => {
  const data = req.body.data;
  console.log(data);

  try {
    const created = await UsedVehicle.create(data);

    if (!created) {
      return res.status(500).json({ message: "Addition Unsuccessfull" });
    }

    res.status(201).json({ result: created });
  } catch (err) {
    // catch and sent error to client
    res.status(500).json({ message: err.message });
  }
};
