import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((response) => response);
}

export default handleProfileSignup;
