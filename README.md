# react-iraq-component

![Alt Text](https://i.ibb.co/sPPsFBh/Screenshot-2022-12-17-at-8-07-59-PM.png)

`react-iraq-component` Provides you with an SVG of Iraq map with the ability to highlight different provinces with different colors.

## Installation

**NPM**

```
npm install react-iraq-component
```

**Yarn**

```
yarn add react-iraq-component
```

## Usage

```
import { IraqMap } from "react-iraq-component";

const MyComponent = () => {
  return (
    <IraqMap
      data={[
        {
          name: "baghdad", // baghdad will be highlighted with red.
          color: "red",
        },
      ]}
    />
  );
};

export default MyComponent;

```

## Props

| Prop            | Default  | Description                                                                              |
| --------------- | -------- | ---------------------------------------------------------------------------------------- |
| Date            | Required | An array of objects `{ name: IProvincesNames, color: string }` to highlight a province.  |
| height          | 100%     | The height of the map component.                                                         |
| width           | 100%     | The width of the map component.                                                          |
| backgroundColor | #88a4bc  | The color of provinces which are not selected.                                           |
| className       | Optional |
| onClick         | Optional | Will return the name of the province clicked. onClick?: (value: IProvincesNames) => void |
