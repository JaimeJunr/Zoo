import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  InlineCitation,
  InlineCitationCard,
  InlineCitationCardBody,
  InlineCitationCardTrigger,
  InlineCitationQuote,
  InlineCitationSource,
  InlineCitationText,
} from "./inline-citation";

const meta = {
  title: "Flowtomic UI/Atoms/Feedback/InlineCitation",
  component: InlineCitation,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InlineCitation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <InlineCitation>
      <InlineCitationText>This is a citation example with a source</InlineCitationText>
      <InlineCitationCard>
        <InlineCitationCardTrigger sources={["https://example.com"]} />
        <InlineCitationCardBody>
          <InlineCitationSource
            title="Example Article"
            url="https://example.com/article"
            description="This is an example description of the cited source."
          />
        </InlineCitationCardBody>
      </InlineCitationCard>
    </InlineCitation>
  ),
};

export const WithQuote: Story = {
  render: () => (
    <InlineCitation>
      <InlineCitationText>This is a citation with a quote</InlineCitationText>
      <InlineCitationCard>
        <InlineCitationCardTrigger sources={["https://example.com"]} />
        <InlineCitationCardBody>
          <InlineCitationSource title="Example Article" url="https://example.com/article">
            <InlineCitationQuote>"This is a quoted excerpt from the source."</InlineCitationQuote>
          </InlineCitationSource>
        </InlineCitationCardBody>
      </InlineCitationCard>
    </InlineCitation>
  ),
};

export const MultipleSources: Story = {
  render: () => (
    <InlineCitation>
      <InlineCitationText>This citation has multiple sources</InlineCitationText>
      <InlineCitationCard>
        <InlineCitationCardTrigger
          sources={[
            "https://example.com",
            "https://another-example.com",
            "https://third-example.com",
          ]}
        />
        <InlineCitationCardBody>
          <InlineCitationSource
            title="First Source"
            url="https://example.com"
            description="First source description"
          />
          <InlineCitationSource
            title="Second Source"
            url="https://another-example.com"
            description="Second source description"
          />
        </InlineCitationCardBody>
      </InlineCitationCard>
    </InlineCitation>
  ),
};
