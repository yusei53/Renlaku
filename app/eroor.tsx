import { Alert, AlertTitle } from "@mui/material";

const Error = () => {
  return (
    <Alert severity="error">
      <AlertTitle>500 Server Error</AlertTitle>
      Oops, something went wrong. This is an error —{" "}
      <strong>Try to refresh this page</strong>
    </Alert>
  );
};

export default Error;
