import AlbumsService from './services/albumsService';
import UsersService from './services/usersService';

import Home from './components/Home';
import User from './components/User';
import Albums from './components/Albums';
import Album from './components/Album';

export const home = {
  name: 'home',
  url: '/',
  component: Home
}

export const user = {
  name: 'user',
  url: '/user',
  component: User,
  resolve: [{
    token: 'user',
    resolveFn: () => UsersService.getUser()
  }]
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
