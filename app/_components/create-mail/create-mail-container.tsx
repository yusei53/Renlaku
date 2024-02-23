"use client";
import { Tabs, Tab, Box } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { User } from "@prisma/client";
import { useEffect, useState } from "react";
import TopTabPanel from "../common/tab/top-tab-panel";
import BottomTabPanel from "../common/tab/bottom-tab-panel";

export default function CreateMailContainer({
  currentUser,
}: {
  currentUser: User | null;
}) {
  const [tabValue, setTabValue] = useState("skip-class");
  const router = useRouter();
  const searchParams = useSearchParams();
  const fffsearchParams = searchParams.get("category");

  useEffect(() => {
    if (fffsearchParams) {
      setTabValue(
        Array.isArray(fffsearchParams) ? fffsearchParams[0] : fffsearchParams
      );
    }
  }, [fffsearchParams]);

  const handleChange = (event: any, newValue: any) => {
    router.push(window.location.pathname + "/?category=" + newValue);

    // 2次リリースでshallow routing optionを実現したい
    // https://github.com/vercel/next.js/discussions/48320
    // https://medium.com/@moh.mir36/shallow-routing-with-next-js-v13-app-directory-2d765928c340
  };

  return (
    <Box>
      {tabValue === "skip-class" && (
        <TopTabPanel value={tabValue} currentUser={currentUser} />
      )}
      {tabValue === "cancel-job-offer" && (
        <TopTabPanel value={tabValue} currentUser={currentUser} />
      )}
      {tabValue === "skip-part-time" && (
        <TopTabPanel value={tabValue} currentUser={currentUser} />
      )}
      <Tabs value={tabValue} onChange={handleChange} centered>
        <Tab label="大学の欠席" value="skip-class" />
        <Tab label="内定取り消し" value="cancel-job-offer" />
        <Tab label="アルバイト欠席" value="skip-part-time" />
      </Tabs>
      {tabValue === "skip-class" && (
        <BottomTabPanel value={tabValue} currentUser={currentUser} />
      )}
      {tabValue === "cancel-job-offer" && (
        <BottomTabPanel value={tabValue} currentUser={currentUser} />
      )}
      {tabValue === "skip-part-time" && (
        <BottomTabPanel value={tabValue} currentUser={currentUser} />
      )}
    </Box>
  );
}
