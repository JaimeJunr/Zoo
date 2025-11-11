import type { Meta, StoryObj } from "@storybook/react-vite";
import { Loader } from "./loader";

const meta = {
  title: "Flowtomic UI/Atoms/Animation/Loader",
  component: Loader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "number",
      description: "Size of the loader icon in pixels",
    },
  },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 16,
  },
};

export const Small: Story = {
  args: {
    size: 12,
  },
};

export const Large: Story = {
  args: {
    size: 24,
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 48,
  },
};
