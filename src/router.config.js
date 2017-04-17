import { pushStateLocationPlugin } from 'ui-router-react';

import { home, user, albums, album } from './states';

export const plugins = [
  pushStateLocationPlugin
]

export const states = [
  home,
  user,
  albums,
  album
]
