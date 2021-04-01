import mongoose from "mongoose";
import { sendmail } from "../mailer.js";
import UserModel from "../model/user.js";

export const addNewUser = (req, res) => {
  const newUser = new UserModel(req.body);
  newUser.save((err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    sendmail(
      req.body.email,
      `welcome please confirm your acount\
    <a href="http://localhost:5000/users/confirm/${newUser.confirm}">confirm</a>`
    );
    res.status(201).json(user);
  });
};
