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
    <Box textAlign={"center"} mt={{ xs: 0, sm: 1 }}>
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

      <Box mt={3}>
        <Typography>step2. 隣のテンプレート文を参考に入力してね！</Typography>
        <Grid container p={1.5}>
          <Grid item xs={6} sm={6} {...SInput}>
            <CustomInput
              label={"教授の名前"}
              value={userData.teacher}
              onChange={(e) => updateUserData("teacher", e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={6} {...SInput}>
            <CustomInput
              label={"学年(半角数字のみ)"}
              value={userData.grade}
              onChange={(e) => updateUserData("grade", e.target.value)}
              type="number"
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={6} {...SInput}>
            <CustomInput
              label={"名前"}
              value={userData.name}
              onChange={(e) => updateUserData("name", e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={6} {...SInput}>
            <CustomInput
              label={"日付"}
              value={userData.date}
              onChange={(e) => updateUserData("date", e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={6} {...SInput}>
            <CustomInput
              label={"何限目(半角数字のみ)"}
              value={userData.time}
              onChange={(e) => updateUserData("time", e.target.value)}
              type="number"
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={6} {...SInput}>
            <CustomInput
              label={"講義名"}
              value={userData.lesson}
              onChange={(e) => updateUserData("lesson", e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={6} {...SInput}>
            <CustomInput
              label={"学籍番号"}
              value={userData.universityNumber}
              onChange={(e) =>
                updateUserData("universityNumber", e.target.value)
              }
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={6} {...SInput}>
            <CustomInput
              label={"電話番号"}
              value={userData.phoneNumber}
              onChange={(e) => updateUserData("number", e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} {...SInput}>
            <CustomInput
              label={"大学学部学科"}
              value={userData.university}
              onChange={(e) => updateUserData("university", e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} {...SInput}>
            <CustomInput
              label={"大学用メールアドレス"}
              value={userData.universityEmail}
              onChange={(e) =>
                updateUserData("universityEmail", e.target.value)
              }
              fullWidth
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

export default InputBox;
