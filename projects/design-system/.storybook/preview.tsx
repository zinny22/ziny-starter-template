import React from "react";
import type { Preview } from "@storybook/react";
import { pretendard } from "../src/themeConfig/font";
import "../src/styles/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story: any) => (
      <div className={pretendard.className}>
        <div>
          <Story />
        </div>
      </div>
    ),
  ],
};

export default preview;
