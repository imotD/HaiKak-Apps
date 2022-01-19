const mainColors = {
  green1: "#0BCAD4",
  green2: "#EDFCFD",
  dark1: "#112340",
  dark2: "#495475",
  grey1: "#7d8797",
  grey2: "#e9e9e9",
  grey3: "#edeef0",
  blue1: "#0066cb"
};

export const colors = {
  primary: mainColors.green1,
  cardLight: mainColors.green2,
  secondary: mainColors.dark1,
  tertiary: mainColors.blue1,
  border: mainColors.grey2,
  white: "white",
  black: "black",

  text: {
    primary: mainColors.dark1,
    secondary: mainColors.grey1,
    menuInactive: mainColors.dark2,
    menuActive: mainColors.green1
  },
  button: {
    primary: {
      background: mainColors.green1,
      text: "white"
    },
    secondary: {
      background: "white",
      text: mainColors.dark1
    }
  }
};
