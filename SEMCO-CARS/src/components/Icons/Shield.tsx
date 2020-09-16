import * as React from "react";
import Svg, { Circle, G, Path } from "react-native-svg";
import { Colors, ICON_SIZE, IconProps } from "../Constants";

export default ({ active }: IconProps) => {
  return (
    <Svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24">
      <Path
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        fill={active ? Colors.primary : "none"}
        stroke={active ? Colors.primary : Colors.border}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
      />
    </Svg>
  );
};
