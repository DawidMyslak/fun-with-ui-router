import { pushStateLocationPlugin } from 'ui-router-react';

import { home, user, albums, fail } from './states';

export const plugins = [
  pushStateLocationPlugin
]

export const states = [
  home,
  user,
  albums,
  fail
]
