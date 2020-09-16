import * as React from "react";
import Svg, { Circle, G, Path } from "react-native-svg";
import { Colors, ICON_SIZE, IconProps } from "../Constants";

export default ({ active }: IconProps) => {
  return (
    <Svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24">
      <Path
        d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"
        stroke={active ? Colors.primary : Colors.border}
        strokeWidth={2}
        fill={active ? Colors.primary : "none"}
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M9 22V12h6v10" />
    </Svg>
  );
};