import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Queue,
  QueueItem,
  QueueItemContent,
  QueueItemIndicator,
  QueueList,
  QueueSection,
  QueueSectionContent,
  QueueSectionLabel,
  QueueSectionTrigger,
} from "./queue";

const meta = {
  title: "Flowtomic UI/Organisms/Queue",
  component: Queue,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Queue>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <QueueSection>
        <QueueSectionTrigger>
          <QueueSectionLabel count={3} label="Pending tasks" />
        </QueueSectionTrigger>
        <QueueSectionContent>
          <QueueList>
            <QueueItem>
              <div className="flex items-center gap-2">
                <QueueItemIndicator />
                <QueueItemContent>Task 1</QueueItemContent>
              </div>
            </QueueItem>
            <QueueItem>
              <div className="flex items-center gap-2">
                <QueueItemIndicator />
                <QueueItemContent>Task 2</QueueItemContent>
              </div>
            </QueueItem>
            <QueueItem>
              <div className="flex items-center gap-2">
                <QueueItemIndicator completed />
                <QueueItemContent completed>Task 3 (completed)</QueueItemContent>
              </div>
            </QueueItem>
          </QueueList>
        </QueueSectionContent>
      </QueueSection>
    ),
  },
};
