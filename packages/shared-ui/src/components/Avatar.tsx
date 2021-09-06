import { Avatar as ChakraAvatar } from "@chakra-ui/avatar";
import { GatsbyImage as Img } from "gatsby-plugin-image";
import type { IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";

export const Avatar = ({
  image,
  alt,
  title,
  loading = "lazy",
  ...props
}: {
  image?: Partial<IGatsbyImageData>;
  alt?: string;
  title?: string;
  loading?: "eager" | "lazy";
  style?: React.CSSProperties;
} & React.ComponentProps<typeof ChakraAvatar>): JSX.Element => {
  const {
    height = "50px",
    width = "50px",
    borderRadius = "50%",
    mr,
    style,
  } = props;

  const marginRight = mr || 1;

  if (!image) {
    return (
      <ChakraAvatar
        name={alt}
        {...props}
        height={height}
        width={width}
        marginRight=".5rem"
      />
    );
  }

  return (
    <Img
      style={{
        borderRadius: borderRadius as string,
        width: width as string,
        height: height as string,
        marginRight: marginRight as string,
        ...style,
      }}
      imgStyle={{
        transition: "unset", // This smooths out loading after blur is finished
        borderRadius: borderRadius as string,
      }}
      image={image as IGatsbyImageData}
      alt={alt as string}
      title={title}
      loading={loading}
    />
  );
};
