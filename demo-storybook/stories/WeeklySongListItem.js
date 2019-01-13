import React from 'react';

import { storiesOf } from '@storybook/react';
import WeeklySongListItem from '../src/components/WeeklySongListItem';

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