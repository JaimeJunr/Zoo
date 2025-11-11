import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  ChainOfThought,
  ChainOfThoughtContent,
  ChainOfThoughtHeader,
  ChainOfThoughtStep,
} from "./chain-of-thought";

const meta = {
  title: "Flowtomic UI/Organisms/ChainOfThought",
  component: ChainOfThought,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ChainOfThought>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultOpen: false,
    children: (
      <>
        <ChainOfThoughtHeader>Reasoning Steps</ChainOfThoughtHeader>
        <ChainOfThoughtContent>
          <ChainOfThoughtStep label="Step 1" description="Initial analysis" status="complete" />
          <ChainOfThoughtStep label="Step 2" description="Data processing" status="active" />
          <ChainOfThoughtStep label="Step 3" description="Final conclusion" status="pending" />
        </ChainOfThoughtContent>
      </>
    ),
  },
};
