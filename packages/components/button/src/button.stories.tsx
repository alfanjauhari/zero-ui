import { ComponentMeta, Story } from '@storybook/react';
import { Button, ButtonProps } from './button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: {
        type: 'select',
      },
    },
    variant: {
      options: ['solid', 'ghost'],
      control: {
        type: 'select',
      },
    },
    color: {
      options: ['blue'],
      control: {
        type: 'select',
      },
    },
    rounded: {
      options: ['xs', 'sm', 'md', 'lg', 'full'],
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: Story<ButtonProps> = ({ size, ...props }) => {
  return (
    <Button size={size} {...props}>
      Push Me
    </Button>
  );
};

export const Primary: Story<ButtonProps> = Template.bind({});
Primary.args = {
  variant: 'solid',
  color: 'blue',
  size: 'md',
};
