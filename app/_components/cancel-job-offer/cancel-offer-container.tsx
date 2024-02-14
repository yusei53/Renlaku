"use client";
import { User } from "@prisma/client";
import { Container, Grid } from "@mui/material";
import useUserData from "../../_feature/hooks/useUserData";
import { CancelJobOfferUserType } from "@/app/_feature/types/types";
import CancelOfferInputPart from "./cancel-offer-input-part";
import CancelOfferMailPart from "./cancel-offer-mail-part";

type TProps = {
  currentUser: User | null;
};

const CancelOfferContainer: React.FC<TProps> = ({ currentUser }) => {
  const defaultUserData: CancelJobOfferUserType = {
    reasonText: null,
    company: null,
    companyUserName: null,
    university: null,
    grade: null,
    name: null,
    privateEmail: null,
    phoneNumber: null,
  };

  const { userData, updateUserData } = useUserData<CancelJobOfferUserType>(
    defaultUserData,
    currentUser
  );

  return (
    <Container disableGutters sx={{ my: 4 }}>
      <Grid container>
        <Grid item xs={12} md={5.5}>
          <CancelOfferInputPart
            userData={userData}
            updateUserData={updateUserData}
          />
        </Grid>
        <Grid item xs={12} md={6.5}>
          <CancelOfferMailPart userData={userData} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CancelOfferContainer;
