export const addUsedVehicle = async (req, res) => {
  const data = req.body.data;
  console.log(data);

  res.sendStatus(200);
};
