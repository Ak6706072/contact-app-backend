import { addNewUser } from "../controller/user.js";

const userRoute = (app) => {
  app.route("/users/register").post(addNewUser);
};

export default userRoute;
