let cache = null;

const getAllAlbums = () => {
  return cache = cache || fetch('/albums')
    .then(response => response.json());
}

const getAlbum = (id) => {
  return getAllAlbums()
    .then(albums => albums.find(album => album.id === id));
}

export default {
  getAllAlbums,
  getAlbum
}
