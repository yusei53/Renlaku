"use client";
import { Container, Grid } from "@mui/material";
import { User } from "@prisma/client";
import useUserData from "../hooks/useUserData";
import InputCompoonent from "./InputComponent";
import TextComponent from "./text";

type TProps = {
  currentUser: User | null;
};

const UniversityMail: React.FC<TProps> = ({ currentUser }) => {
  const { userData, updateUserData } = useUserData(currentUser);

  return (
    <>
      <Container disableGutters sx={{ my: 5 }}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <InputCompoonent
              userData={userData}
              updateUserData={updateUserData}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextComponent userData={userData} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default UniversityMail;
