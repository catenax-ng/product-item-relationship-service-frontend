import { Box } from "@mui/material";
import { Footer } from "./components/Footer";
import { ErrorDescription } from "./components/ErrorDescription";
import { ErrorActions } from "./components/ErrorActions";
import { ErrorImage } from "./components/ErrorImage";

export interface ErrorPageProps {
  hasNavigation?: boolean;
  header?: string;
  title?: string;
  description?: string;
  additionalDescription?: string;
  reloadButtonTitle?: string;
  homeButtonTitle?: string;
  onReloadClick?: React.MouseEventHandler;
  onHomeClick?: React.MouseEventHandler;
}

export const ErrorPage = ({
  hasNavigation,
  header,
  title,
  description,
  additionalDescription,
  reloadButtonTitle,
  homeButtonTitle,
  onReloadClick,
  onHomeClick,
}: ErrorPageProps) => {
  const height = hasNavigation ? "calc(100vh - 85px)" : "100vh";
  return (
    <Box
      sx={{
        width: "100%",
        height: height,
        marginTop: "0px",
        backgroundColor: "#fff",
        position: "relative",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          width: "max-content",
          margin: `auto`,
        }}
      >
        <ErrorDescription
          header={header}
          title={title}
          description={description}
          additionalDescription={additionalDescription}
        />
        <ErrorActions
          reloadButtonTitle={reloadButtonTitle}
          homeButtonTitle={homeButtonTitle}
          onReloadClick={onReloadClick}
          onHomeClick={onHomeClick}
        />

        <Box
          sx={{
            float: "right",
            marginTop: "110px",
            zIndex: 1,
            position: "relative",
          }}
        >
          <ErrorImage />
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};
