"use client";
import { Box, Typography, styled } from "@mui/material";
import Image from "next/image";

type TProps = {
  number: string;
  firstTitle: string;
  secondTitle: string;
  content: string;
  image: string;
  border?: boolean;
};

const ServiceCard: React.FC<TProps> = ({
  number,
  firstTitle,
  secondTitle,
  content,
  image,
  border = true,
}) => {
  const Container = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: border ? `1px solid #e6e6e6` : "",
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
          marginY={3}
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
        <Typography component={"h5"} fontSize={15}>
          {content}
        </Typography>
      </Box>
      <Box p={5} mt={{ xs: 0, md: 3 }}>
        <ResponsiveImage src={image} alt={"ff"} width={250} height={225} />
      </Box>
    </Container>
  );
};

const ResponsiveImage = styled(Image)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: 175,
    height: 175,
  },
}));

export default ServiceCard;
