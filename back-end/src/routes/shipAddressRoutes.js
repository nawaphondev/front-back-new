// shipAddress.routes.js
const express = require("express");
const router = express.Router();
const shipAddressService = require("../services/ship_address.service");

// Create a new shipAddress
router.post("/new", async (req, res) => {
  try {
    const newShipAddress = await shipAddressService.createShipAddress(req.body);
    res.json(newShipAddress);
  } catch (error) {
    res.status(500).json({ error: "Error creating shipAddress" });
  }
});

// Get all shipAddresss
router.get("/all", async (req, res) => {
  try {
    const shipAddresss = await shipAddressService.getAllShipAddresss();
    res.json(shipAddresss);
  } catch (error) {
    res.status(500).json({ error: "Error getting shipAddresss" });
  }
});

// get all shipAddresss by user id
router.get("/allbyuserid", async (req, res) => {
  try {
    const shipAddresss = await shipAddressService.getAllShipAddresssByUserId(req.body);
    res.json(shipAddresss);
  } catch (error) {
    res.status(500).json({ error: "Error getting shipAddresss", message: error.message });
  }
});

// Get a shipAddress by ID
router.get("/get", async (req, res) => {

  try {
    const shipAddress = await shipAddressService.getShipAddressById(
      req.body
    );

    if (!shipAddress) {
      res.status(404).json({ error: "ShipAddress not found" });
      return;
    }

    res.json(shipAddress);
  } catch (error) {
    res.status(500).json({ error: "Error getting shipAddress" });
  }
});

// Update a shipAddress by ID
router.put("/update/", async (req, res) => {

  try {
    const updatedShipAddress = await shipAddressService.updateShipAddressById(
      req.body.id,
      req.body
    );

    if (!updatedShipAddress) {
      res.status(404).json({ error: "ShipAddress not found" });
      return;
    }

    res.json(updatedShipAddress);
  } catch (error) {
    res.status(500).json({ error: "Error updating shipAddress" });
  }
});

// Delete a shipAddress by ID
router.delete("/delete", async (req, res) => {

  try {
    const deletedShipAddress = await shipAddressService.deleteShipAddressById(
      req.body
    );

    if (!deletedShipAddress) {
      res.status(404).json({ error: "ShipAddress not found" });
      return;
    }

    res.json(deletedShipAddress);
  } catch (error) {
    res.status(500).json({ error: "Error deleting shipAddress" });
  }
});

module.exports = router;
