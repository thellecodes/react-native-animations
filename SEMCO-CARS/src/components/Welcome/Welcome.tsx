import React, { useRef, Fragment, useCallback } from "react";
import { Image, StyleSheet, SafeAreaView } from "react-native";
import Animated, {
  useCode,
  cond,
  eq,
  set,
  SpringUtils,
  interpolate,
  multiply,
} from "react-native-reanimated";
import { State, TapGestureHandler } from "react-native-gesture-handler";
import {
  useScrollHandler,
  onGestureEvent,
  withSpringTransition,
  useValue,
  withTransition,
} from "react-native-redash";

/* Utils */
import { Box, Text } from "../theme";
import { Dimensions } from "react-native";
import {
  BORDER_RADIUS,
  SEGMENT,
  ICON_SIZE,
  PADDING,
  DURATION,
} from "../Constants";
import CarSlide from "./CarSlide";
import { Home, Car, Shield } from "../Icons";
import Tab from "./Tab";
const { View, Value } = Animated;

export const slides = [
  {
    carname: "Porsche 911 GT3",
    carspeed: "450hk (361KW)",
    image: {
      src: require("../../../assets/images/car1.png"),
    },
  },
  {
    carname: "Gold Porsche 911",
    carspeed: "450hk (361KW)",
    image: {
      src: require("../../../assets/images/car2.png"),
    },
  },
  {
    carname: "Gold Porsche 911",
    carspeed: "450hk (361KW)",
    image: {
      src: require("../../../assets/images/car2.png"),
    },
  },
  {
    carname: "GT2 Porsche Boxster/Cayman",
    carspeed: "450hk (361KW)",
    image: {
      src: require("../../../assets/images/car3.png"),
    },
  },
  {
    carname: "Porsche 930 Exhaust",
    carspeed: "450hk (361KW)",
    image: {
      src: require("../../../assets/images/car4.png"),
    },
  },
  {
    carname: "Car Audi R8",
    carspeed: "450hk (361KW)",
    image: {
      src: require("../../../assets/images/car5.png"),
    },
  },
];

const Logo = require("../../../assets/images/logo.png");

const { width, height } = Dimensions.get("window");

export const assets = slides.map((slide) => slide.image.src);

const tabs = [
  { tab: { iconName: "Home", icon: <Home /> } },
  { tab: { iconName: "Car", icon: <Car /> } },
  { tab: { iconName: "Shield", icon: <Shield /> } },
];

const Welcome = () => {
  const gesState = useRef(new Animated.Value(State.UNDETERMINED));
  const gestureHandler = onGestureEvent({ state: gesState.current });
  const gesVal = useRef(new Animated.Value(0));
  const { scrollHandler, x } = useScrollHandler();

  useCode(
    () => [cond(eq(gesState.current, State.END), [set(gesVal.current, 1)])],
    [gesState.current]
  );

  useCode(
    () => [
      cond(eq(gesState.current, State.END), [
        cond(eq(gesVal.current, 1), [
          set(gesVal.current, 0),
          set(gesState.current, State.UNDETERMINED),
        ]),
      ]),
    ],
    [gesState.current]
  );

  const makeTallAnimation = withSpringTransition(gesVal.current, {
    ...SpringUtils.makeDefaultConfig(),
    overshootClamping: true,
    damping: new Value(20),
  });

  const topHeight = interpolate(makeTallAnimation, {
    inputRange: [0, 1],
    outputRange: [height * 0.7, height * 0.9],
  });

  const hideBottom = interpolate(makeTallAnimation, {
    inputRange: [0, 0.2, 1],
    outputRange: [1, 0, 0],
  });

  /* Tab Animations */
  const active = new Value<number>(0);
  const transition = withTransition(active, { duration: DURATION });

  const transXlation = withSpringTransition(active, {
    ...SpringUtils.makeDefaultConfig(),
    overshootClamping: true,
    damping: new Animated.Value(100),
  });

  const translateX = interpolate(transXlation, {
    inputRange: [0, 1, 2],
    outputRange: [0, SEGMENT, SEGMENT * 2],
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Number One */}
      <View
        style={{
          height: topHeight,
          backgroundColor: "#0D0923",
          borderBottomLeftRadius: BORDER_RADIUS,
          borderBottomRightRadius: BORDER_RADIUS,
          overflow: "hidden",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        {/* Number four */}
        <View
          style={{
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <View
            style={{
              width: 50,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 30,
            }}
          >
            <Image
              source={Logo}
              resizeMode="contain"
              resizeMethod="scale"
              style={{
                flex: 1,
              }}
            />
          </View>
        </View>

        <View
          style={{
            flex: 1,
            width: width * slides.length,
            flexDirection: "row",
            transform: [{ translateX: multiply(x, -1) }],
          }}
        >
          {slides.map(({ carname, image }, index) => (
            <Box
              flex={1}
              {...{ width }}
              key={index}
              flexDirection="column"
              justifyContent="flex-end"
            >
              <View style={{ flex: 1, alignItems: "center" }}>
                {/* Number 7 */}
                <Text color="white" variant="desc" fontSize={12} marginTop="m">
                  Timeless Machine
                </Text>
                <Text color="white" variant="title2" fontSize={20}>
                  {carname}
                </Text>
              </View>

              {/* Number 6 */}
              {/* Use a text in the first place */}
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  height: "30%",
                }}
                {...{ width }}
              >
                <Image
                  source={image.src}
                  style={{
                    flex: 1,
                    alignSelf: "center",
                    aspectRatio: 1.5,
                  }}
                  resizeMode="contain"
                  resizeMethod="auto"
                />
              </View>
            </Box>
          ))}
        </View>

        {/* Number Five */}
        <Box justifyContent="center" alignItems="center">
          <Text color="white" variant="title2">
            Effect
          </Text>
        </Box>
        <TapGestureHandler {...gestureHandler}>
          <View
            style={{
              width: width * slides.length,
              height: 50,
              flexDirection: "row",
              transform: [{ translateX: multiply(x, -1) }],
            }}
          >
            {slides.map(({ carspeed }, index) => (
              <Box
                flex={1}
                {...{ width }}
                key={index}
                alignItems="center"
                justifyContent="center"
                paddingBottom="m"
              >
                <Text variant="desc" color="white">
                  {carspeed}
                </Text>
              </Box>
            ))}
          </View>
        </TapGestureHandler>
      </View>

      {/* Number Two */}
      <Animated.View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          justifyContent: "center",
          alignItems: "center",
          opacity: hideBottom,
        }}
      >
        {/* Number Three */}
        <Animated.ScrollView
          {...scrollHandler}
          horizontal
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          snapToInterval={width}
          snapToAlignment="center"
        >
          {slides.map(({ carname, carspeed, image }, index) => (
            <Fragment key={index}>
              <CarSlide {...{ carname, carspeed, image }} />
            </Fragment>
          ))}
        </Animated.ScrollView>
      </Animated.View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#416AA6",
        }}
      >
        {/* Background slide */}

        {tabs.map(({ tab }, index) => {
          const { icon, iconName } = tab;
          return (
            <Animated.View style={{ ...styles.tab }} key={index}>
              <Tab onPress={() => {}} {...{ iconName, transition, index }}>
                {icon}
              </Tab>
            </Animated.View>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tab: {
    width: SEGMENT,
    height: ICON_SIZE + PADDING,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Welcome;
