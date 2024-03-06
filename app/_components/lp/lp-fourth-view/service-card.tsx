"use client";
import { Box, Typography, styled } from "@mui/material";
import Image from "next/image";

type TProps = {
  number: string;
  firstTitle: string;
  secondTitle: string;
  content: string;
  image: string;
  alt: string;
  border?: boolean;
};

const ServiceCard: React.FC<TProps> = ({
  number,
  firstTitle,
  secondTitle,
  content,
  image,
  alt,
  border = true,
}) => {
  const Container = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: border ? `1.5px solid #e6e6e6` : "",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  }));

  return (
    <Container>
      <Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          borderBottom={`1px solid black`}
          marginY={2}
          paddingY={1}
        >
          <Typography
            component={"h3"}
            fontWeight={"500"}
            fontSize={{ xs: 38, md: 47 }}
            letterSpacing={"-0.02em"}
            mt={"-1.2em"}
            mr={2}
            color={"#013776"}
          >
            {number}
          </Typography>
          <Box>
            <Typography
              component={"h3"}
              fontWeight={"bold"}
              fontSize={{ xs: 21, md: 25 }}
            >
              {firstTitle}
            </Typography>
            <Typography
              component={"h3"}
              fontWeight={"bold"}
              fontSize={{ xs: 21, md: 25 }}
            >
              {secondTitle}
            </Typography>
          </Box>
        </Box>
        <Typography fontSize={15} letterSpacing={0.5}>
          {content}
        </Typography>
      </Box>
      <Box p={4} mt={{ xs: 0, md: 3 }}>
        <ResponsiveImage src={image} alt={alt} width={295} height={225} />
      </Box>
    </Container>
  );
};

const ResponsiveImage = styled(Image)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: 200,
    height: 175,
  },
}));

export default ServiceCard;
