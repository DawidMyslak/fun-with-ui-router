import AlbumsService from './services/albumsService';

import About from './components/About';
import Home from './components/Home';
import Albums from './components/Albums';
import Album from './components/Album';

export const home = {
  name: 'home',
  url: '/',
  component: Home
}

export const about = {
  name: 'about',
  url: '/about',
  component: About
}

export const albums = {
  name: 'albums',
  url: '/albums',
  component: Albums,
  resolve: [{
    token: 'albums',
    resolveFn: () => AlbumsService.getAllAlbums()
  }]
}

export const album = {
  name: 'album',
  url: '/album/:albumId',
  component: Album,
  resolve: [{
    token: 'album',
    deps: ['$transition$'],
    resolveFn: (trans) => AlbumsService.getAlbum(parseInt(trans.params().albumId, 10))
  }]
}
