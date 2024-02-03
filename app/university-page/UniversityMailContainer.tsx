"use client";
import { Container, Grid } from "@mui/material";
import { User } from "@prisma/client";
import useUserData from "../hooks/useUserData";
import UniversityMailBox from "./UniversityMailBox";
import InputBox from "./InputBox";

type TProps = {
  currentUser: User | null;
};

const UniversityMailContainer: React.FC<TProps> = ({ currentUser }) => {
  const { userData, updateUserData } = useUserData(currentUser);

  return (
    <Container disableGutters sx={{ my: 5 }}>
      <Grid container>
        <Grid item xs={12} md={5.5}>
          <InputBox userData={userData} updateUserData={updateUserData} />
        </Grid>
        <Grid item xs={12} md={6.5}>
          <UniversityMailBox userData={userData} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default UniversityMailContainer;
