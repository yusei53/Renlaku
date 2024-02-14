import {
  Box,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { CancelJobOfferUserType } from "../../_feature/types/types";
import CustomInput from "../common/input/custom-input";
import { cancelOfferReasons } from "../../_feature/const/document-data";
import CustomSelect from "../common/input/custom-select";
import ResponsiveInputMessage from "../common/message/responsive-input-message";

type TProps = {
  userData: CancelJobOfferUserType;
  updateUserData: (field: keyof CancelJobOfferUserType, value: string) => void;
};

const CancelOfferInputPart: React.FC<TProps> = ({
  userData,
  updateUserData,
}) => {
  return (
    <Box textAlign={"center"} mt={{ sm: 5 }}>
      <Box>
        <Typography pb={"4%"}>step1. 何を辞退するか選択してね！</Typography>
        <FormControl sx={{ width: "230px" }}>
          <InputLabel
            sx={{
              mt: "-8px",
            }}
          >
            欠席理由
          </InputLabel>
          <CustomSelect
            value={userData.reasonText}
            onChange={(e) => updateUserData("reasonText", e.target.value)}
          >
            {cancelOfferReasons.map((reason) => (
              <MenuItem key={reason.value} value={reason.value}>
                {reason.label}
              </MenuItem>
            ))}
          </CustomSelect>
        </FormControl>
      </Box>

      <Box mt={5}>
        <ResponsiveInputMessage
          pcMessage={"step2. 隣のテンプレート文を参考に入力してね！"}
          spMessage={"step2. 下のテンプレート文を参考に入力してね！"}
        />
        <Grid container p={1.5}>
          <Grid item xs={6} sm={6} {...SInput}>
            <CustomInput
              label={"会社名(株式会社〇〇)"}
              value={userData.company}
              onChange={(e) => updateUserData("company", e.target.value)}
            />
          </Grid>
          <Grid item xs={6} sm={6} {...SInput}>
            <CustomInput
              label={"担当者名"}
              value={userData.companyUserName}
              onChange={(e) =>
                updateUserData("companyUserName", e.target.value)
              }
            />
          </Grid>
          <Grid item xs={6} sm={6} {...SInput}>
            <CustomInput
              label={"学年(半角数字のみ)"}
              value={userData.grade}
              onChange={(e) => updateUserData("grade", e.target.value)}
              type="number"
            />
          </Grid>
          <Grid item xs={6} sm={6} {...SInput}>
            <CustomInput
              label={"氏名"}
              value={userData.name}
              onChange={(e) => updateUserData("name", e.target.value)}
            />
          </Grid>
          <Grid item xs={6} sm={6} {...SInput}>
            <CustomInput
              label={"メールアドレス"}
              value={userData.privateEmail}
              onChange={(e) => updateUserData("privateEmail", e.target.value)}
            />
          </Grid>
          <Grid item xs={6} sm={6} {...SInput}>
            <CustomInput
              label={"電話番号"}
              value={userData.phoneNumber}
              onChange={(e) => updateUserData("phoneNumber", e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={12} {...SInput}>
            <CustomInput
              label={"大学学部学科"}
              value={userData.university}
              onChange={(e) => updateUserData("university", e.target.value)}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const SInput = {
  px: 0.8,
  py: 1.3,
};

export default CancelOfferInputPart;
