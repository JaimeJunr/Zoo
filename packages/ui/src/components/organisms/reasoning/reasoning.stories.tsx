import type { Meta, StoryObj } from "@storybook/react-vite";
import { Reasoning, ReasoningContent, ReasoningTrigger } from "./reasoning";

const meta = {
  title: "Flowtomic UI/Organisms/Reasoning",
  component: Reasoning,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Reasoning>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isStreaming: false,
    defaultOpen: true,
    children: (
      <>
        <ReasoningTrigger />
        <ReasoningContent>
          This is the reasoning content that shows the model's thinking process.
        </ReasoningContent>
      </>
    ),
  },
};

export const Streaming: Story = {
  args: {
    isStreaming: true,
    defaultOpen: true,
    children: (
      <>
        <ReasoningTrigger />
        <ReasoningContent>Streaming reasoning content...</ReasoningContent>
      </>
    ),
  },
};
