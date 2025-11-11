import type { Meta, StoryObj } from "@storybook/react-vite";
import { ScrollArea } from "./scroll-area";

const meta = {
  title: "Flowtomic UI/Atoms/Layout/ScrollArea",
  component: ScrollArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

const content = Array.from({ length: 50 }, (_, i) => {
  const itemId = `scroll-item-${i + 1}`;
  return (
    <div key={itemId} className="p-4 border-b">
      Item {i + 1}
    </div>
  );
});

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-[300px] w-[350px] rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {content}
      </div>
    </ScrollArea>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border">
      <div className="flex h-full w-max items-center space-x-4 p-4">
        {Array.from({ length: 20 }, (_, i) => {
          const itemId = `scroll-horizontal-item-${i + 1}`;
          return (
            <div key={itemId} className="shrink-0 w-[200px] h-[120px] p-4 border rounded flex items-center justify-center">
              Item {i + 1}
            </div>
          );
        })}
      </div>
    </ScrollArea>
  ),
};
