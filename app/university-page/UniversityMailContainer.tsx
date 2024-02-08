"use client";
import { User } from "@prisma/client";
import { UserDataType } from "../types";
import { Container, Grid } from "@mui/material";
import InputBox from "./InputBox";
import UniversityMailBox from "./UniversityMailBox";
import useUserData from "../hooks/useUserData";

const UniversityMailContainer: React.FC<{ currentUser: User | null }> = ({
  currentUser,
}) => {
  const defaultUserData: UserDataType = {
    name: null,
    university: null,
    teacher: null,
    grade: null,
    reasonText: null,
    date: null,
    time: null,
    lesson: null,
    universityNumber: null,
    universityEmail: null,
    phoneNumber: null,
  };

  const { userData, updateUserData } = useUserData<UserDataType>(
    defaultUserData,
    currentUser
  );
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
