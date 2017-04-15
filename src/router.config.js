import { pushStateLocationPlugin } from 'ui-router-react';

import { home, about, albums, album } from './states';

export const plugins = [
  pushStateLocationPlugin
]

export const states = [
  home,
  about,
  albums,
  album
]
