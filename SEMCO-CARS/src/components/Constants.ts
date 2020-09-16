import { PixelRatio, Dimensions } from "react-native";
import theme from "./theme";
const { width } = Dimensions.get("window");

export const BORDER_RADIUS = 65;

export interface IconProps {
  active?: boolean;
}

const numberOfIcons = 3;
const horizontalPadding = 90;
export const DURATION = 50;
export const PADDING = 16;
export const SEGMENT = PixelRatio.roundToNearestPixel(width / numberOfIcons);
export const ICON_SIZE = SEGMENT - horizontalPadding;

export const Colors = {
  primary: theme.colors.primary,
  border: "#fff",
};
