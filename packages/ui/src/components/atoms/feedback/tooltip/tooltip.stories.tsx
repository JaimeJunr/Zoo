import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../../actions/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";

const meta = {
  title: "Flowtomic UI/Atoms/Feedback/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This is a tooltip</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

export const WithLongText: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover for long text</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>
            This is a longer tooltip text that demonstrates how the tooltip handles multiple lines
            of content.
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};
