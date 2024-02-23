"use client";
import { User } from "@prisma/client";
import { SkipPartTimeUserType } from "../../_feature/types/types";
import { Container, Grid } from "@mui/material";
import useUserData from "../../_feature/hooks/useUserData";
import PartTimeInputPart from "./part-time-input-part";
import PartTimeMailPart from "./part-time-mail-part";

type TProps = {
  currentUser: User | null;
};

const PartTimeContainer: React.FC<TProps> = ({ currentUser }) => {
  const defaultUserData: SkipPartTimeUserType = {
    name: null,
    reasonText: null,
  };

  const { userData, updateUserData } = useUserData<SkipPartTimeUserType>(
    defaultUserData,
    currentUser
  );
  return (
    <Container disableGutters sx={{ my: 4 }}>
      <Grid container>
        <Grid item xs={12} md={5.5}>
          <PartTimeInputPart
            userData={userData}
            updateUserData={updateUserData}
          />
        </Grid>
        <Grid item xs={12} md={6.5}>
          <PartTimeMailPart userData={userData} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default PartTimeContainer;
