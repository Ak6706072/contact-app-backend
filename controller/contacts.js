import mongoose from "mongoose";
import ContactModel from "./../model/contact.js";

export const addNewContact = (req, res) => {
  console.log(req.body.length);
  let newContact = new ContactModel(req.body);
  newContact.save((err, contact) => {
    if (err) {
      res.status(505).send(err);
    }
    res.json(contact);
  });
  //when we have to insert many record
  //   ContactModel.insertMany(req.body, (err, contact) => {
  //     if (err) {
  //       res.status(505).send(err);
  //     }
  //     res.json(contact);
  //   });
};

//get all the records
export const getAllContact = (req, res) => {
  ContactModel.find({}, (err, contact) => {
    if (err) {
      res.status(505).send(err);
    }
    res.json(contact);
  });
};

//get one by id
export const getOneById = (req, res) => {
  const id = req.params.contactid;
  ContactModel.findById(id, (err, data) => {
    if (err) {
      res.status(500).send("Data Not Fount");
    }
    res.json(data);
  });
};

//find one and update it new body
export const findAndUpdateOne = (req, res) => {
  const id = req.params.contactid;
  console.log(id, req.body);
  ContactModel.findOneAndUpdate(
    { _id: id },
    req.body,
    { new: true, useFindAndModify: false },
    (err, contact) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json(contact);
    }
  );
};

//delete one
export const deletOne = (req, res) => {
  const id = req.params.contactid;
  ContactModel.remove({ _id: id }, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.status(201).send("SuccessFully deleted");
  });
};
