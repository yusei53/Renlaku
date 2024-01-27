"use client";
import { Typography, styled } from "@mui/material";
import ServiceCard from "./serviceCard";

export const Service = () => {
  return (
    <Container>
      <Typography
        mt={2}
        fontSize={{ xs: 22, sm: 30 }}
        fontWeight={"bold"}
        component={"h2"}
        letterSpacing={2}
        mb={5}
      >
        Renlakuの特徴
      </Typography>
      <ServiceCard
        number={"01"}
        firstTitle={"時間を節約"}
        secondTitle={"したい"}
        content={
          "Renlakuは、メールの作成にかかる時間を大幅に短縮します。Renlakuは、メールの作成にかかる時間を大幅に短縮します。Renlakuは、メールの作成にかかる時間を大幅に短縮します。"
        }
        image={"/man.png"}
      />
      <ServiceCard
        number={"02"}
        firstTitle={"時間を節約"}
        secondTitle={"したい"}
        content={
          "Renlakuは、メールの作成にかかる時間を大幅に短縮します。Renlakuは、メールの作成にかかる時間を大幅に短縮します。Renlakuは、メールの作成にかかる時間を大幅に短縮します。"
        }
        image={"/man.png"}
      />
      <ServiceCard
        number={"03"}
        firstTitle={"時間を節約"}
        secondTitle={"したい"}
        content={
          "Renlakuは、メールの作成にかかる時間を大幅に短縮します。Renlakuは、メールの作成にかかる時間を大幅に短縮します。Renlakuは、メールの作成にかかる時間を大幅に短縮します。"
        }
        image={"/man.png"}
        border={false}
      />
    </Container>
  );
};

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "4% 20%",
  paddingBottom: "5%",
  backgroundColor: "#f7f7f7",
  [theme.breakpoints.down("md")]: {
    padding: "4% 10%",
  },
}));
