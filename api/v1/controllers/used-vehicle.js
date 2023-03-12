import Showroom from "../models/showroom.js";
import UsedVehicle from "../models/used-vehicle.js";
import VehicleBrand from "../models/vehicle-brand.js";

export const addUsedVehicle = async (req, res) => {
  // add vehicle to db
  // add vehicle id to vehicle specified brand
  // add vehicle id to vehicle specified showroom
  const data = req.body.data;
  console.log(data);

  try {
    const created = await UsedVehicle.create(data);

    if (!created) {
      return res.status(500).json({ message: "Addition Unsuccessfull" });
    }

    if (created.vehicleBrand.id) {
      // vehicle brand added to vehicle
      // now add vehicle to specific vehicle brand
      try {
        let vehicleBrandFound = await VehicleBrand.findById(
          created.vehicleBrand.id
        );

        if (vehicleBrandFound) {
          vehicleBrandFound.usedVehicles = [
            ...vehicleBrandFound.usedVehicles,
            { id: created._id },
          ];

          vehicleBrandFound = await vehicleBrandFound.save({ new: true });

          console.log(vehicleBrandFound);
        }
      } catch (err) {
        console.log(
          "controllers/used-vehicle - addUsedVehicle - updating vehicle brand: ",
          err.message
        );
      }
    }

    if (created.showroom.id) {
      // showroom added to vehicle
      // now add vehicle to specific showroom
      try {
        let showroomFound = await Showroom.findById(created.showroom.id);

        if (showroomFound) {
          showroomFound.usedVehicles = [
            ...showroomFound.usedVehicles,
            { id: created._id },
          ];

          showroomFound = await showroomFound.save({ new: true });

          console.log("showroomFound updated", showroomFound);
        }
      } catch (err) {
        console.log(
          "controllers/used-vehicle - addUsedVehicle - updating showroom: ",
          err.message
        );
      }
    }

    res.status(201).json({ result: created });
  } catch (err) {
    // catch and sent error to client
    res.status(500).json({ message: err.message });
  }
};
