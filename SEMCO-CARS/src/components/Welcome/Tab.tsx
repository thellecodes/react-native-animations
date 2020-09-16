import React, { ReactElement, cloneElement, Ref } from "react";
import { Text } from "../theme";
import Animated, { eq, interpolate } from "react-native-reanimated";
import { DURATION, ICON_SIZE, SEGMENT } from "../Constants";
import { TouchableWithoutFeedback, StyleSheet } from "react-native";
import { withTransition } from "react-native-redash";
const { View } = Animated;

interface TabProps {
  iconName: string;
  children: ReactElement;
  onPress: () => void;
  transition: Animated.Node<number>;
  index: number;
}

const Tab = ({ iconName, children, onPress, transition, index }: TabProps) => {
  const opacity = 0;
  const cloneOpacity = 1;

  const width = SEGMENT;
  const transIcon = 0;

  return (
    <TouchableWithoutFeedback {...{ onPress }}>
      <Animated.View
        style={{
          height: ICON_SIZE + 9,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <View style={[StyleSheet.absoluteFill, { ...styles.icon, opacity }]}>
          {children}
        </View>

        <Animated.View
          style={{
            ...styles.icon,
            width,
            transform: [{ translateX: 0 }],
            opacity: cloneOpacity,
          }}
        >
          <Animated.View style={{ translateX: transIcon }}>
            {cloneElement(children, { active: true })}
          </Animated.View>
          <Animated.Text
            style={{
              fontSize: 18,
              marginLeft: 8,
              color: "white",
              fontWeight: "900",
              opacity: 1,
              fontFamily: "Rubik-Bold",
            }}
          >
            {iconName}
          </Animated.Text>
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  icon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default Tab;
