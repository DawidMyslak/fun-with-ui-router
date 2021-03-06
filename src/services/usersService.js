let cache = null;

const getUser = () => {
  return cache = cache || fetch('/users/1')
    .then(response => {
      if (!response.ok) throw new Error(response.status + ': ' + response.statusText);
      return response.json();
    })
    .catch(err => {
      return { err };
    });
}

export default {
  getUser
}
