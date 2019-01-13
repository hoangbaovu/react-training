import React from 'react';

import { storiesOf } from '@storybook/react';
import WeeklySongListItem from '../src/components/WeeklySongListItem';
import WeeklySongListItemFunc from '../src/components/WeeklySongListItemFunc';

storiesOf('WeeklySongListItem', module)
  .add(
    'default',
    () => (
      <WeeklySongListItem
        order="01"
        title="Anh Là Ai"
        singer="Phương Ly"
        viewCount={4000000} />
    )
  )
  .add(
    'Component Func',
    () => (
      <WeeklySongListItemFunc
        order="02"
        title="Thằng Điên"
        singer="JustaTee; Phương Ly"
        viewCount={64000000} />
    )
  )