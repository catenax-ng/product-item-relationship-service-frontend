import { MainHeaderProps } from "../MainHeader";
import { Typography } from "../../../Typography";

export const MainHeaderTitle = ({ title, subTitle, subTitleWidth }: MainHeaderProps) => {
  return (
    <>
      {title && (
        <Typography
          sx={{
            fontFamily: "LibreFranklin-Light",
            fontWeight: 600,
          }}
          variant="h2"
        >
          {title}
        </Typography>
      )}

      {subTitle && (
        <Typography
          sx={{
            fontFamily: "LibreFranklin-Light",
            width: `${subTitleWidth}px`,
          }}
          variant="h2"
        >
          {subTitle}
        </Typography>
      )}
    </>
  );
};
