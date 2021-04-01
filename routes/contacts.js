import {
  addNewContact,
  deletOne,
  findAndUpdateOne,
  getAllContact,
  getOneById,
} from "../controller/contacts.js";

const routes = (app) => {
  app.route("/contacts").get(getAllContact).post(addNewContact);

  app
    .route("/contacts/:contactid")
    .get(getOneById)
    .put(findAndUpdateOne)
    .delete(deletOne);
};

export default routes;
