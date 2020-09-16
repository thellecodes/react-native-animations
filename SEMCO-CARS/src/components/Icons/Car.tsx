import * as React from "react";
import Svg, { Circle, G, Path } from "react-native-svg";
import { Colors, ICON_SIZE, IconProps } from "../Constants";

export default ({ active }: IconProps) => {
  return (
    <Svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24" fill="none">
      <Path
        d="M3 18v-6a9 9 0 0118 0v6"
        fill={active ? Colors.primary : "none"}
        stroke={active ? Colors.primary : Colors.border}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fill={active ? Colors.primary : "none"}
        stroke={active ? Colors.primary : Colors.border}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"
      />
    </Svg>
  );
};
