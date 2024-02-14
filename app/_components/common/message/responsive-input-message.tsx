import { Typography, useMediaQuery, useTheme } from "@mui/material";

type TProps = {
  pcMessage: string;
  spMessage: string;
};

const ResponsiveInputMessage: React.FC<TProps> = ({ pcMessage, spMessage }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {isSmallScreen ? (
        <Typography fontSize={15.5}>{spMessage}</Typography>
      ) : (
        <Typography>{pcMessage}</Typography>
      )}
    </>
  );
};

export default ResponsiveInputMessage;
