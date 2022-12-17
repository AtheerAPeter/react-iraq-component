import React from "react";
import { storiesOf } from "@storybook/react";
import IraqMap from "../components/IraqMap";

const stories = storiesOf("App test", module);

stories.add("app", () => {
  return (
    <IraqMap
      width={600}
      data={[
        {
          name: "baghdad",
          color: "blue",
        },
      ]}
    />
  );
});
