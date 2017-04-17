let cache = null;

const getUser = () => {
  return cache = cache || fetch('/users/1')
    .then(response => response.json());
}

export default {
  getUser
}
