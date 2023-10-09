import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  let body = '';
  uploadPhoto().then((success) => {
    body = success.body;
  });
  createUser().then((success) => {
    console.log(`${body} ${success.firstName} ${success.lastName}`);
  });
}

export default handleProfileSignup;
