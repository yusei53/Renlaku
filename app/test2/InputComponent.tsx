import { Box, Typography, Grid, TextField } from "@mui/material";
import { UserDataType } from "../types";

type TProps = {
  userData: UserDataType;
  updateUserData: (field: string, value: string) => void;
};

const InputCompoonent: React.FC<TProps> = ({ userData, updateUserData }) => {
  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
        my={2}
      >
        <Typography>step1. 欠席理由を選択してね！</Typography>
        {/* <FormControl sx={{ width: "200px" }}>
          <InputLabel
            id="demo-simple-select-label"
            sx={{
              marginTop: "-8px",
            }}
          >
            Age
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            size="small"
          >
            <MenuItem value={10}>就活</MenuItem>
            <MenuItem value={20}>体調不良</MenuItem>
            <MenuItem value={30}>身内の不幸</MenuItem>
            <MenuItem value={30}>結婚式</MenuItem>
            <MenuItem value={30}>交通機関の遅延</MenuItem>
          </Select>
        </FormControl> */}
      </Box>

      <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
        <Typography textAlign={"center"}>
          step2. 隣のテンプレート文を参考に入力してね！
        </Typography>
        <Grid container padding={"2% 10%"}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={4}
            p={2}
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <TextField
              type="text"
              value={userData.name || ""}
              onChange={(e) => updateUserData("name", e.target.value)}
              label="お名前"
              size="small"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={4}
            p={2}
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <TextField
              id="outlined-basic"
              label="大学学部学科"
              size="small"
              value={userData.university || ""}
              onChange={(e) => updateUserData("university", e.target.value)}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={4}
            p={2}
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <TextField
              id="outlined-basic"
              label="先生"
              size="small"
              value={userData.teacher || ""}
              onChange={(e) => updateUserData("teacher", e.target.value)}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={4}
            p={2}
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <TextField
              id="outlined-basic"
              label="学年"
              size="small"
              value={userData.grade || ""}
              onChange={(e) => updateUserData("grade", e.target.value)}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={4}
            p={2}
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={4}
            p={2}
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={4}
            p={2}
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={4}
            p={2}
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default InputCompoonent;
