import type { Meta, StoryObj } from '@storybook/react-vite';
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from './button-group';
import { Button } from '../../atoms/button/button';

const meta = {
  title: 'Zoo UI/Molecules/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    equalWidth: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Left</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Right</Button>
    </ButtonGroup>
  ),
};

export const Vertical: Story = {
  render: () => (
    <ButtonGroup orientation="vertical">
      <Button variant="outline">Top</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Bottom</Button>
    </ButtonGroup>
  ),
};

export const WithSeparator: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Save</Button>
      <ButtonGroupSeparator />
      <Button variant="outline">Cancel</Button>
    </ButtonGroup>
  ),
};

export const WithText: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Action</Button>
      <ButtonGroupText>or</ButtonGroupText>
      <Button variant="outline">Alternative</Button>
    </ButtonGroup>
  ),
};

export const EqualWidth: Story = {
  render: () => (
    <ButtonGroup equalWidth className="w-64">
      <Button variant="outline">Yes</Button>
      <Button variant="outline">No</Button>
      <Button variant="outline">Maybe</Button>
    </ButtonGroup>
  ),
};

