import React from 'react';
import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from '../stories/InputField.stories';

const { Default } = composeStories(stories);

describe('InputField', () => {
  it('Should match snapshot', () => {
    const { asFragment } = render(<Default />);
    expect(asFragment()).toMatchSnapshot();
  });
});
