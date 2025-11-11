import type { Meta, StoryObj } from "@storybook/react-vite";
import { Controls } from "./controls";

const meta = {
  title: "Flowtomic UI/Organisms/Controls",
  component: Controls,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Controls component wrapper do Controls do @xyflow/react. Usado para exibir controles de zoom e pan no canvas do ReactFlow.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Controls>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
