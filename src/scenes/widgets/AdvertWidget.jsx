import { Typography, useTheme } from "@mui/material";
import FlexBetween from "../../components/FlexBetween.jsx";
import WidgetWrapper from "../../components/WidgetWrapper.jsx";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.main;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="ad"
        src="https://helogram-app.onrender.com/assets/info4.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>MikaCosmetics</Typography>
        <Typography color={medium}>mikacosmetics.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        your pathway for stunning and immaculate beauty and shining like light.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
