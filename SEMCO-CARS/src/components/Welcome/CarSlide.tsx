import React from "react";
import { Image } from "react-native";
import { Box, Text } from "../theme";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

interface ImageProps {
  src: number;
}

interface CarSlideProps {
  carname: string;
  image: ImageProps;
}

const CarSlide = ({ carname, image }: CarSlideProps) => {
  return (
    <Box
      flex={1}
      {...{ width }}
      padding="m"
      backgroundColor="white"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Box
        flex={1}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        paddingTop="xl"
      >
        <Image
          source={image.src}
          style={{
            flex: 1,
            alignSelf: "center",
            aspectRatio: 1.2,
          }}
          resizeMode="contain"
        />
        <Text variant="desc" color="primary">
          {carname}
        </Text>
      </Box>
    </Box>
  );
};

export default CarSlide;
