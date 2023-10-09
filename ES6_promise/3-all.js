import { uploadPhoto, createUser } from './utils';

function handleProfileSignup () {
  let body = '';
  uploadPhoto()
    .then((success) => {
      body = success.body;
    })
    .catch(() => console.log('Signup system offline'));
  createUser()
    .then((success) => {
      console.log(`${body} ${success.firstName} ${success.lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}

export default handleProfileSignup;
