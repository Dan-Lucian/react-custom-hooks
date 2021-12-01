function fakeRequest(delay = 100) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(JSON.stringify({ body: 'something from server' }));

      // error version
      // reject(JSON.stringify({ body: 'something from server' }));
    }, delay);
  });

  return promise;
}

export { fakeRequest };
