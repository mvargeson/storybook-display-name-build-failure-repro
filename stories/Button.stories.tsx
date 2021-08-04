import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const Example = (args: React.HTMLAttributes<HTMLButtonElement>) => <Button {...args} />;
Example.args = {
  children: "Label",
  onClick: action('onClick'),
}
