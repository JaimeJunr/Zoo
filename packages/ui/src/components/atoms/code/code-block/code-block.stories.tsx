import type { Meta, StoryObj } from "@storybook/react-vite";
import { CodeBlock, CodeBlockCopyButton } from "./code-block";

const meta = {
  title: "Flowtomic UI/Atoms/Code/CodeBlock",
  component: CodeBlock,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    language: {
      control: "select",
      options: ["typescript", "javascript", "python", "html", "css", "json"],
    },
    showLineNumbers: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof CodeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleCode = `function greet(name: string) {
  return \`Hello, \${name}!\`;
}

console.log(greet("World"));`;

export const Default: Story = {
  args: {
    code: sampleCode,
    language: "typescript",
  },
};

export const WithLineNumbers: Story = {
  args: {
    code: sampleCode,
    language: "typescript",
    showLineNumbers: true,
  },
};

export const WithCopyButton: Story = {
  render: () => (
    <CodeBlock code={sampleCode} language="typescript">
      <CodeBlockCopyButton />
    </CodeBlock>
  ),
};

export const JavaScript: Story = {
  args: {
    code: `const greet = (name) => {
  return \`Hello, \${name}!\`;
};`,
    language: "javascript",
  },
};

export const Python: Story = {
  args: {
    code: `def greet(name: str) -> str:
    return f"Hello, {name}!"

print(greet("World"))`,
    language: "python",
  },
};
