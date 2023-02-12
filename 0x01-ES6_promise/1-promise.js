export default function getFullResponseFromApi(success) {
  const promise = new Promise((resolve, reject) => {
    if (success === true) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(new Error('The fake API is not currently working'));
    }
  });
  return promise;
}
