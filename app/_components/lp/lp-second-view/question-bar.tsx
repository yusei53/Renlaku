import { Box, Typography } from "@mui/material";
import { CircleCheckIcon } from "./circle-check-icon";
import Image from "next/image";

type TProps = {
  label: string;
  ImageSrc?: string;
  AltText?: string;
};

const QuestionBar: React.FC<TProps> = ({ label, ImageSrc, AltText }) => {
  return (
    <Box
      width="100%"
      maxWidth={600}
      paddingY={3}
      paddingLeft={{ xs: 3, sm: 10, lg: 28 }}
      display={"flex"}
      alignItems={"center"}
      bgcolor={"white"}
      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
      marginY={2}
      position="relative"
    >
      <CircleCheckIcon
        sx={{
          position: "absolute",
          left: { xs: 23, sm: 70, md: 90, lg: 160 },
        }}
      />
      <Typography
        fontSize={{ xs: 15, sm: 18 }}
        pl={{ xs: 4, md: 5, lg: 0 }}
        pr={{ xs: 3, md: 5, lg: 0 }}
      >
        {label}
      </Typography>
      {ImageSrc && AltText && (
        <Box
          position="absolute"
          top={{ xs: "210%", sm: "170%", md: 10 }}
          right={{ xs: 0, md: -80, lg: -60 }}
          zIndex={2}
        >
          <Image width={230} height={200} src={ImageSrc} alt={AltText} />
        </Box>
      )}
    </Box>
  );
};

export default QuestionBar;
