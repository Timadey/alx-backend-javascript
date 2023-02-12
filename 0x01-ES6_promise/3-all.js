import { uploadPhoto, createUser } from './util';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()]).then((val) => {
    const res = Object.assign({}, ...val);
    console.log(`${res.body} ${res.firstName} ${res.lastName}`);
  }).catch(() => console.log('Signup system offline'));
}
