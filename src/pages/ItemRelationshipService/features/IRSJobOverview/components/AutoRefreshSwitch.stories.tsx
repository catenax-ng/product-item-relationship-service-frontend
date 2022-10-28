import { ComponentStory } from "@storybook/react";

import { AutoRefreshSwitch as Component } from "./AutoRefreshSwitch";

export default {
  title: "Form",
  component: Component,
  argTypes: {},
};

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const Switch = Template.bind({});
Switch.args = {};
