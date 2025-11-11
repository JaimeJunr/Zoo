import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
} from "./conversation";

const meta = {
  title: "Flowtomic UI/Organisms/Conversation",
  component: Conversation,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Conversation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Conversation className="h-[400px]">
      <ConversationContent>
        <div>Message 1</div>
        <div>Message 2</div>
        <div>Message 3</div>
      </ConversationContent>
      <ConversationScrollButton />
    </Conversation>
  ),
};

export const Empty: Story = {
  render: () => (
    <Conversation className="h-[400px]">
      <ConversationEmptyState />
    </Conversation>
  ),
};
