import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  PromptInput,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
} from "./prompt-input";

const meta = {
  title: "Flowtomic UI/Organisms/PromptInput",
  component: PromptInput,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Componente complexo para input de prompt com suporte a attachments, speech recognition, e muito mais.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PromptInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: async (message) => {
      console.log("Submitted:", message);
    },
    children: (
      <>
        <PromptInputTextarea placeholder="Type your message..." />
        <PromptInputFooter>
          <PromptInputSubmit />
        </PromptInputFooter>
      </>
    ),
  },
};
