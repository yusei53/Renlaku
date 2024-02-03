import {
  Box,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { UserDataType } from "../types";
import CustomInput from "./CustomInput";
import { reasons } from "../_data/document-data";
import CustomSelect from "./CustomSelect";

type TProps = {
  userData: UserDataType;
  updateUserData: (field: string, value: string) => void;
};

const InputBox: React.FC<TProps> = ({ userData, updateUserData }) => {
  return (
    <Box textAlign={"center"} my={2}>
      <Box>
        <Typography pb={"4%"}>step1. 欠席理由を選択してね！</Typography>
        <FormControl sx={{ width: "200px" }}>
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
            {reasons.map((reason) => (
              <MenuItem key={reason.value} value={reason.value}>
                {reason.label}
              </MenuItem>
            ))}
          </CustomSelect>
        </FormControl>
      </Box>

      <Box my={5}>
        <Typography>step2. 隣のテンプレート文を参考に入力してね！</Typography>
        <Grid container p={1} px={3}>
          <Grid item xs={12} sm={6} xl={4} p={2}>
            <CustomInput
              label={"教授の名前"}
              value={userData.teacher}
              onChange={(e) => updateUserData("teacher", e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6} xl={4} p={2}>
            <CustomInput
              label={"大学/学部/学科"}
              value={userData.university}
              onChange={(e) => updateUserData("university", e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6} xl={4} p={2}>
            <CustomInput
              label={"学年(半角数字のみ)"}
              value={userData.grade}
              onChange={(e) => updateUserData("grade", e.target.value)}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={6} xl={4} p={2}>
            <CustomInput
              label={"日付"}
              value={userData.date}
              onChange={(e) => updateUserData("date", e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6} xl={4} p={2}>
            <CustomInput
              label={"何限目(半角数字のみ)"}
              value={userData.time}
              onChange={(e) => updateUserData("time", e.target.value)}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={6} xl={4} p={2}>
            <CustomInput
              label={"講義名"}
              value={userData.lesson}
              onChange={(e) => updateUserData("lesson", e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6} xl={4} p={2}>
            <CustomInput
              label={"学籍番号"}
              value={userData.id}
              onChange={(e) => updateUserData("id", e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6} xl={4} p={2}>
            <CustomInput
              label={"電話番号"}
              value={userData.number}
              onChange={(e) => updateUserData("number", e.target.value)}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default InputBox;
