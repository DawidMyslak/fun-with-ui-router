let cache = null;

const getAllAlbums = () => {
  return cache = cache || fetch('/albums')
    .then(response => response.json());
}

const getAlbum = (id) => {
  return getAllAlbums()
    .then(albums => albums.find(album => album.id === id))
    .then(album => {
      if (!album) throw new Error('Album not found');
      return album;
    })
}

export default {
  getAllAlbums,
  getAlbum
}
