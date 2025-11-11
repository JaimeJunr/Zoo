import type { Meta, StoryObj } from "@storybook/react-vite";
import { Plan, PlanContent, PlanDescription, PlanHeader, PlanTitle, PlanTrigger } from "./plan";

const meta = {
  title: "Flowtomic UI/Organisms/Plan",
  component: Plan,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Plan>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultOpen: false,
    children: (
      <>
        <PlanHeader>
          <div>
            <PlanTitle>Project Plan</PlanTitle>
            <PlanDescription>Complete the implementation of the new feature</PlanDescription>
          </div>
          <PlanTrigger />
        </PlanHeader>
        <PlanContent>
          <p>This is the plan content that will be shown when expanded.</p>
        </PlanContent>
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
        <PlanHeader>
          <div>
            <PlanTitle>Project Plan</PlanTitle>
            <PlanDescription>Complete the implementation of the new feature</PlanDescription>
          </div>
          <PlanTrigger />
        </PlanHeader>
        <PlanContent>
          <p>Streaming plan content...</p>
        </PlanContent>
      </>
    ),
  },
};
