"use client";
import { Tabs, Tab, Box, styled } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { User } from "@prisma/client";
import { useCallback, useEffect, useState } from "react";
import TopTabPanel from "../common/tab/top-tab-panel";
import BottomTabPanel from "../common/tab/bottom-tab-panel";

const CreateMailContainer = ({ currentUser }: { currentUser: User | null }) => {
  const [tabValue, setTabValue] = useState("skip-class");
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    if (category) {
      setTabValue(Array.isArray(category) ? category[0] : category);
    }
  }, [category]);

  const handleChange = useCallback(
    (event: React.SyntheticEvent, newValue: string) => {
      setTabValue(newValue);
      const url = new URL(window.location.href);
      url.searchParams.set("category", newValue);
      router.replace(url.toString());
    },
    [router]
  );

  return (
    <>
      <TopTabPanel value={tabValue} currentUser={currentUser} />
      <Box bgcolor={"#f7f7f7"}>
        <StyledTabs value={tabValue} onChange={handleChange}>
          <StyledTab label="大学の欠席" value="skip-class" />
          <StyledTab label="内定取り消し" value="cancel-job-offer" />
          <StyledTab label="アルバイト欠席" value="skip-part-time" />
        </StyledTabs>
      </Box>
      <BottomTabPanel value={tabValue} currentUser={currentUser} />
    </>
  );
};

interface StyledTabsProps {
  value: string;
  children?: React.ReactNode;
  onChange: (event: React.SyntheticEvent, newValue: string) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    centered
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#016FE5",
  },
});

type StyledTabProps = {
  label: string;
  value: string;
};

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(15),
  color: "#707070",
  "&.Mui-selected": {
    color: "black",
  },
}));

export default CreateMailContainer;
