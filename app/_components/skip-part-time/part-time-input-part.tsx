import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { SkipPartTimeUserType } from "../../_feature/types/types";
import CustomInput from "../common/input/custom-input";
import { skipPartTimeReasons } from "../../_feature/const/document-data";
import CustomSelect from "../common/input/custom-select";
import ResponsiveInputMessage from "../common/message/responsive-input-message";

type TProps = {
  userData: SkipPartTimeUserType;
  updateUserData: (field: keyof SkipPartTimeUserType, value: string) => void;
};

const PartTimeInputPart: React.FC<TProps> = ({ userData, updateUserData }) => {
  return (
    <Box textAlign={"center"} mt={{ sm: 1 }}>
      <Box>
        <Typography pb={"4%"}>step1. 欠席理由を選択してね！</Typography>
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
            {skipPartTimeReasons.map((reason) => (
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
        <Box p={1.5}>
          <CustomInput
            label={"名前"}
            value={userData.name}
            onChange={(e) => updateUserData("name", e.target.value)}
            {...SInput}
          />
        </Box>
      </Box>
    </Box>
  );
};

const SInput = {
  px: 0.8,
  py: 1.3,
};

export default PartTimeInputPart;
