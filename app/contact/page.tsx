"use client";
import { Box } from "@mui/material";
import ContactForm from "../_components/contact-form/contact-form";

const ContactFormPage = () => {
  return (
    <Box mx={{ xs: 1, md: 8 }} mb={5}>
      <ContactForm />
    </Box>
  );
};

export default ContactFormPage;
