let cache = null;

const getAllAlbums = () => {
  return cache = cache || fetch('/albums')
    .then(response => {
      if (!response.ok) throw new Error(response.status + ': ' + response.statusText);
      return response.json();
    })
    .catch(err => {
      return { err };
    });
}

export default {
  getAllAlbums
}
