"use client";
import { User } from "@prisma/client";
import { SkipClassUserType } from "../../_feature/types/types";
import { Box, Container, Grid } from "@mui/material";
import useUserData from "../../_feature/hooks/useUserData";
import UniversityInputPart from "./university-input-part";
import UniversityMailPart from "./university-mail-part";
import UniversitySubMailPart from "./university-sub-mail-part";

type TProps = {
  currentUser: User | null;
};

const UniversityMailContainer: React.FC<TProps> = ({ currentUser }) => {
  const defaultUserData: SkipClassUserType = {
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

  const { userData, updateUserData } = useUserData<SkipClassUserType>(
    defaultUserData,
    currentUser
  );
  return (
    <Container disableGutters sx={{ my: 4 }}>
      <Grid container>
        <Grid item xs={12} md={5.5}>
          <UniversityInputPart
            userData={userData}
            updateUserData={updateUserData}
          />
        </Grid>
        <Grid item xs={12} md={6.5}>
          <Box mx={2}>
            <UniversitySubMailPart userData={userData} />
            <UniversityMailPart userData={userData} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UniversityMailContainer;
