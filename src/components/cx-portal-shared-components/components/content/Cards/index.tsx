import { Box, useTheme } from "@mui/material";
import { Card, CardProps } from "./Card";
import uniqueId from "lodash/uniqueId";

export type CardItems = Omit<CardProps, "variant" | "imageSize" | "imageShape" | "buttonText" | "status">;

interface CardsProps {
  items: CardItems[];
  buttonText: CardProps["buttonText"];
  variant?: CardProps["variant"];
  expandOnHover?: CardProps["expandOnHover"];
  filledBackground?: CardProps["filledBackground"];
  imageSize?: CardProps["imageSize"];
  imageShape?: CardProps["imageShape"];
  columns?: number;
  readMoreText?: CardProps["readMoreText"];
  readMoreLink?: CardProps["readMoreLink"];
  addButtonClicked?: boolean;
}

export const Cards = ({
  items,
  buttonText,
  readMoreText,
  readMoreLink,
  variant,
  imageSize,
  imageShape,
  columns = 6,
  expandOnHover,
  filledBackground,
  addButtonClicked = false,
}: CardsProps) => {
  const settings = {
    variant,
    buttonText,
    readMoreText,
    readMoreLink,
    imageSize,
    imageShape,
    expandOnHover,
    filledBackground,
    addButtonClicked,
  };
  const { spacing } = useTheme();

  return (
    <Box
      sx={{
        display: "grid",
        gap: spacing(8, 4),
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
    >
      {items?.map((item) => (
        <Card {...settings} {...item} key={uniqueId("Cards")} />
      ))}
    </Box>
  );
};
