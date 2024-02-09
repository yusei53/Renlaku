import { SxProps, styled } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export const CircleCheckIcon = (props: { sx: SxProps }) => {
  return (
    <Circle {...props}>
      <CheckIcon fontSize={"medium"} style={{ color: "white" }} />
    </Circle>
  );
};

const Circle = styled("div")({
  backgroundColor: "#006ee4",
  width: "25px",
  height: "25px",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export default CircleCheckIcon;
