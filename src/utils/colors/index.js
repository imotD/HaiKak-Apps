const mainColors = {
  green1: "#0BCAD4",
  green2: "#EDFCFD",
  dark1: "#112340",
  dark2: "#495475",
  dark3: "#8092af",
  grey1: "#7d8797",
  grey2: "#e9e9e9",
  grey3: "#edeef0",
  gray4: "#B1B7C2",
  blue1: "#0066cb",
  black1: "#000000",
  black2: "rgba(0, 0, 0, 0.5)",
  red1: "#e06379"
};

export const colors = {
  primary: mainColors.green1,
  cardLight: mainColors.green2,
  secondary: mainColors.dark1,
  tertiary: mainColors.blue1,
  border: mainColors.grey2,
  loadingBackgorund: mainColors.black2,
  error: mainColors.red1,
  white: "white",
  black: "black",
  disable: mainColors.grey3,

  text: {
    primary: mainColors.dark1,
    secondary: mainColors.grey1,
    menuInactive: mainColors.dark2,
    menuActive: mainColors.green1,
    subTitle: mainColors.dark3
  },
  button: {
    primary: {
      background: mainColors.green1,
      text: "white"
    },
    secondary: {
      background: "white",
      text: mainColors.dark1
    },
    disable: {
      background: mainColors.grey3,
      text: mainColors.grey4
    }
  }
};
