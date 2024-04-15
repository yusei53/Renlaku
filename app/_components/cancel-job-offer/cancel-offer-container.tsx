"use client";
import { User } from "@prisma/client";
import { Box, Container, Grid } from "@mui/material";
import useUserData from "../../_feature/hooks/useUserData";
import { CancelJobOfferUserType } from "@/app/_feature/types/types";
import CancelOfferInputPart from "./cancel-offer-input-part";
import CancelOfferMailPart from "./cancel-offer-mail-part";
import CancelOfferSubMailPart from "./cancel-offer-sub-mail-part";
import ContactForm from "../contact-form/contact-form";

type TProps = {
  currentUser: User | null;
};

const CancelOfferContainer: React.FC<TProps> = ({ currentUser }) => {
  const defaultUserData: CancelJobOfferUserType = {
    reasonText: null,
    reasonLabel: null,
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
          <Box mx={2}>
            <CancelOfferSubMailPart userData={userData} />
            <CancelOfferMailPart userData={userData} />
          </Box>
        </Grid>
      </Grid>
      <ContactForm />
    </Container>
  );
};

export default CancelOfferContainer;
