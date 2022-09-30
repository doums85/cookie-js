import {  deleteUser } from "firebase/auth";
import { auth } from "../lib/firebase";

const user = auth.currentUser;

deleteUser(user).then(() => {
  // User deleted.
  console.log('User deleted successfully');
}).catch((error) => {
  // An error ocurred
  // ...
});