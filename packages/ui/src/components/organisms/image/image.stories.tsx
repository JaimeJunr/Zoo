import type { Meta, StoryObj } from "@storybook/react-vite";
import { Image } from "./image";

const meta = {
  title: "Flowtomic UI/Organisms/Image",
  component: Image,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

// Note: This is a placeholder story since we need actual base64 data
export const Default: Story = {
  render: () => (
    <div className="text-sm text-muted-foreground">
      Image component requires base64 data to display
    </div>
  ),
};
