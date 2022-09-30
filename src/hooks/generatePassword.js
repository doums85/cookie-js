import {  updatePassword } from "firebase/auth";
import { auth } from "../lib/firebase";

const user = auth.currentUser;
const newPassword = 'random password'

updatePassword(user, newPassword).then(() => {
  // Update successful.
}).catch((error) => {
  // An error ocurred
  // ...
});