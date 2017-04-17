import UsersService from './services/usersService';
import AlbumsService from './services/albumsService';
import FailService from './services/failService';

import Home from './components/Home';
import User from './components/User';
import Albums from './components/Albums';
import Fail from './components/Fail';

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

export const fail = {
  name: 'fail',
  url: '/fail',
  component: Fail,
  resolve: [{
    token: 'fail',
    resolveFn: () => FailService.getSomething()
  }]
}
