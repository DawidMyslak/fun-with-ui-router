let cache = null;

const getSomething = () => {
  return cache = cache || fetch('/fail')
    .then(response => {
      if (!response.ok) throw new Error(response.status + ': ' + response.statusText);
      return response.json();
    })
    .catch(err => {
      return { err };
    });
}

export default {
  getSomething
}
