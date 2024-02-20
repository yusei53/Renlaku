"use client";
import { Tabs, Tab, Box } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { User } from "@prisma/client";
import { useEffect, useState } from "react";
import CancelOfferFirstView from "../_components/cancel-job-offer/cancel-offer-firstview";
import CancelOfferContainer from "../_components/cancel-job-offer/cancel-offer-container";
import UniversityFirstView from "../_components/skip-class/university-firstview";
import UniversityMailContainer from "../_components/skip-class/university-mail-container";

export default function Test({ currentUser }: { currentUser: User | null }) {
  const [tabValue, setTabValue] = useState("大学の欠席");
  const router = useRouter();
  const searchParams = useSearchParams();
  const fffsearchParams = searchParams.get("aaa");

  useEffect(() => {
    if (fffsearchParams) {
      setTabValue(
        Array.isArray(fffsearchParams) ? fffsearchParams[0] : fffsearchParams
      );
    }
  }, [fffsearchParams]);

  const handleChange = (event: any, newValue: any) => {
    router.push(window.location.pathname + "/?aaa=" + newValue);

    // 2次リリースでshallow routing optionを実現したい
    // https://github.com/vercel/next.js/discussions/48320
  };

  return (
    <Box>
      {tabValue === "大学の欠席" && (
        <TabHeadPanel value={tabValue} currentUser={currentUser} />
      )}
      {tabValue === "tab2" && (
        <TabHeadPanel value={tabValue} currentUser={currentUser} />
      )}
      <Tabs
        value={tabValue}
        onChange={handleChange}
        aria-label="simple tabs example"
        variant="fullWidth"
      >
        <Tab label="kkkk" value="大学の欠席" />
        <Tab label="tab2" value="tab2" />
        <Tab label="tab3" value="tab3" />
      </Tabs>
      {tabValue === "大学の欠席" && (
        <TabPanel value={tabValue} currentUser={currentUser} />
      )}
      {tabValue === "tab2" && (
        <TabPanel value={tabValue} currentUser={currentUser} />
      )}
    </Box>
  );
}

function TabHeadPanel({
  value,
  currentUser,
}: {
  value: string;
  currentUser: any;
}) {
  return (
    <Box role="tabpanel">
      <Box>
        {value === "大学の欠席" && (
          <CancelOfferFirstView currentUser={currentUser} />
        )}
        {value === "tab2" && <UniversityFirstView currentUser={currentUser} />}
      </Box>
    </Box>
  );
}

function TabPanel({
  value,

  currentUser,
}: {
  value: string;

  currentUser: any;
}) {
  return (
    <Box role="tabpanel">
      <Box>
        {value === "大学の欠席" && (
          <CancelOfferContainer currentUser={currentUser} />
        )}
        {value === "tab2" && (
          <UniversityMailContainer currentUser={currentUser} />
        )}
      </Box>
    </Box>
  );
}
