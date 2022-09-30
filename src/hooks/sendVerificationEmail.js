import { sendEmailVerification } from 'firebase/auth';
import { auth } from '../lib/firebase';

auth.languageCode = 'fr';

sendEmailVerification(auth.currentUser).then(() => {
  // Email verification sent!
  // ...
  console.log('Email verification sent successfully');
});
