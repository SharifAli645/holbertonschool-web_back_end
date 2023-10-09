import { uploadPhoto, createUser } from './utils';
let body = '';
function handleProfileSignup() {
  uploadPhoto().then((success) => {
    body = success.body;
  });
  createUser().then((success) => {
    console.log(body, success.firstName, success.lastName);
  });
}

export default handleProfileSignup;
