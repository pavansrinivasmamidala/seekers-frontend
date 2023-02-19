const express = require("express");
const properties = require("./../models/properties");
const PropertiesRouter = express.Router();

const auth = require("./../middleware/auth");

PropertiesRouter.get("/api/properties", async (req, res) => {
  const propertiesList = await properties.find().exec();
  res.send(propertiesList);
});

PropertiesRouter.post("/api/properties", auth, async (req, res) => {
  try {
    const details = req.body;
    console.log(details);
    await properties.create(details);
    const property = await properties.find({ id: details.id }).exec();
    return res.send(property);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

PropertiesRouter.put("/api/properties", auth, async (req, res) => {
  const details = req.body;
  await properties.findOneAndUpdate({ id: details.id }, details);
  const property = await properties.find({ id: details.id }).exec();
  return res.send(property);
});

PropertiesRouter.delete("/api/properties", (req, res) => {
  const { propertyId } = req.body;
  properties.deleteOne({ id: propertyId }, (err) => {
    if (err) throw err;
    res.send("Deleted Successfully!");
  });
});

module.exports = PropertiesRouter;
