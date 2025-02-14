import type { Meta, StoryObj } from "@storybook/react";

import { Component } from "../components/component";

const meta = {
  title: "Primitives/Component",
  component: Component,
  render: (args) => <Component {...args} />,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Hidden: Story = {
  args: { hidden: true },
};
