const e = require("express");
const connectToDatabase = require("../db/db_connect");
const ObjectId = require("mongodb").ObjectId;

const getContacts = async (req, res) => {
  try {
    const db = await connectToDatabase(process.env.DB_NAME);
    const contacts = await db.collection("contacts").find().toArray();
    res.json(contacts);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching contacts." });
  }
};

const getContactById = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    const db = await connectToDatabase(process.env.DB_NAME);
    const contact = await db.collection("contacts").findOne({ _id: userId });
    res.json(contact);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching the contact." });
  }
};

// create contact
const createContact = async (req, res) => {
  try {
    const db = await connectToDatabase(process.env.DB_NAME);
    const contact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday,
    };
    const response = await db.collection("contacts").insertOne(contact);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res
        .status(500)
        .json(
          response.error ||
            "An error occurred while trying to create the contact."
        );
    }
  } catch (error) {
    res.status(500).json({ error: "An unexpected error occurred." });
  }
};

// update contact
const updateContact = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    const db = await connectToDatabase(process.env.DB_NAME);
    const contact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday,
    };
    const response = await db
      .collection("contacts")
      .replaceOne({ _id: userId }, contact);
    if (response.modifiedCount > 0) {
      res.status(204).send({ message: "Contact updated successfully." });
    } else {
      res
        .status(500)
        .json(
          response.error ||
            "An error occurred while trying to update the contact."
        );
    }
  } catch (error) {
    res.status(500).json({ error: "An unexpected error occurred." });
  }
};

// delete contact
const deleteContact = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    const db = await connectToDatabase(process.env.DB_NAME);
    const response = await db.collection("contacts").deleteOne({ _id: userId });
    if (response.deletedCount > 0) {
      res.status(200).send({ message: "Contact deleted successfully." });
    } else {
      res
        .status(500)
        .json(
          response.error ||
            "An error occurred while trying to delete the contact."
        );
    }
  } catch (error) {
    res.status(500).json({ error: "An unexpected error occurred." });
  }
};

module.exports = {
  getContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
};
