import type { Meta, StoryObj } from "@storybook/react-vite";
import { Edge } from "./edge";

const meta = {
  title: "Flowtomic UI/Organisms/Edge",
  component: Edge.Temporary,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Edge components para ReactFlow. Edge.Temporary para linhas temporárias e Edge.Animated para linhas animadas.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Edge.Temporary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Temporary: Story = {
  args: {
    id: "edge-1",
    sourceX: 50,
    sourceY: 50,
    targetX: 200,
    targetY: 200,
    sourcePosition: "right" as const,
    targetPosition: "left" as const,
  },
};
